// ═══════════════════════════════════════════════════════════
//  DATA LAYER — reads from same localStorage as course site
// ═══════════════════════════════════════════════════════════
const LESSON_TITLES = [
  "Marketing Fundamentals","Target Audience & Personas","Content Marketing Strategy",
  "SEO Mastery","Social Media & Algorithms","Email Marketing & Automation",
  "Google & Meta Ads","Brand Strategy & Storytelling","Data Analytics & KPIs",
  "Conversion Rate Optimization","Influencer & Affiliate Marketing",
  "Marketing Automation & CRM","Full-Stack Strategy & Roadmap"
];
const PLAN_PRICES = { premium: 147, standard: 97, pending: 0 };
const AVATAR_COLORS = [
  ['#1A237E','#E8BE3A'], ['#065F46','#34D399'], ['#7C2D12','#FB923C'],
  ['#312E81','#A78BFA'], ['#1E3A5F','#60A5FA'], ['#4C1D95','#C084FC'],
  ['#713F12','#FDE68A'], ['#1F2937','#9CA3AF']
];

let students = [];
let activeStudentId = null;
let currentView = 'overview';
let activityLog = [];

// ─── LOAD / SAVE ─────────────────────────────────────────
function loadStudents() {
  const raw = localStorage.getItem('mm_admin_students');
  students = raw ? JSON.parse(raw) : [];

  // Also try to import the current user from the main course site
  const courseState = localStorage.getItem('mmCourseState');
  if (courseState) {
    try {
      const cs = JSON.parse(courseState);
      if (cs.studentName || cs.registered) {
        const existingId = 'main_user';
        const exists = students.find(s => s.id === existingId);
        if (!exists && (cs.studentName || cs.paid)) {
          students.unshift({
            id: existingId,
            name: cs.studentName || 'Course User',
            email: 'user@mastermind.com',
            phone: '—',
            age: '—',
            plan: cs.paid ? 'premium' : 'pending',
            paid: !!cs.paid,
            completedLessons: cs.completedLessons || [],
            enrolledAt: new Date().toISOString(),
            isMainUser: true
          });
        } else if (exists) {
          exists.completedLessons = cs.completedLessons || [];
          exists.paid = !!cs.paid;
        }
      }
    } catch(e) {}
  }
  saveStudents();
}

function saveStudents() {
  localStorage.setItem('mm_admin_students', JSON.stringify(students));
}

function loadActivity() {
  const raw = localStorage.getItem('mm_admin_activity');
  activityLog = raw ? JSON.parse(raw) : [];
}
function saveActivity() {
  localStorage.setItem('mm_admin_activity', JSON.stringify(activityLog.slice(0, 50)));
}
function logActivity(text, color = 'var(--gold)') {
  activityLog.unshift({ text, color, time: new Date().toISOString() });
  saveActivity();
  renderActivity();
}

// ─── COMPUTED ────────────────────────────────────────────
function getStudentStatus(s) {
  if (!s.paid) return 'pending';
  if (s.completedLessons.length === 13) return 'complete';
  if (s.completedLessons.length === 0) return 'new';
  // Determine if stuck: paid, has completed some, but next lesson should be completable
  return 'active';
}
function isStuck(s) {
  if (!s.paid || s.completedLessons.length === 13) return false;
  // Heuristic: "stuck" if they are registered and paid but have 0 completions for more than threshold
  return false; // Real implementation would track quiz attempts — for demo use admin flag
}
function getProgress(s) {
  return s.completedLessons.length;
}
function getProgressPct(s) {
  return Math.round((s.completedLessons.length / 13) * 100);
}
function getInitials(name) {
  return name.split(' ').slice(0,2).map(w => w[0] || '').join('').toUpperCase() || '?';
}
function getAvatarColors(idx) {
  return AVATAR_COLORS[idx % AVATAR_COLORS.length];
}
function timeAgo(iso) {
  const diff = (Date.now() - new Date(iso)) / 1000;
  if (diff < 60) return 'just now';
  if (diff < 3600) return Math.floor(diff/60) + 'm ago';
  if (diff < 86400) return Math.floor(diff/3600) + 'h ago';
  return Math.floor(diff/86400) + 'd ago';
}

// ═══════════════════════════════════════════════════════════
//  RENDER FUNCTIONS
// ═══════════════════════════════════════════════════════════
function renderAll() {
  updateNavBadges();
  renderStats();
  renderFunnel();
  renderDonut();
  renderActivity();
  renderStudentTable(students);
  renderPaymentTable(students);
  renderQuizTable(students);
  renderQuizBreakdown();
}

// ── NAV BADGES ────────────────────────────────────────────
function updateNavBadges() {
  document.getElementById('navStudentCount').textContent = students.length;
  document.getElementById('navPaidCount').textContent = students.filter(s=>s.paid).length;
  const stuck = students.filter(s=>s.paid && s.completedLessons.length<13 && s.completedLessons.length===0 && s.paid).length;
  document.getElementById('navStuckCount').textContent = stuck;
}

// ── STAT CARDS ────────────────────────────────────────────
function renderStats() {
  const total = students.length;
  const paid = students.filter(s=>s.paid);
  const revenue = paid.reduce((sum,s) => sum + (PLAN_PRICES[s.plan]||0), 0);
  const complete = students.filter(s=>s.completedLessons.length===13).length;
  const stuck = students.filter(s=>s.paid && s.completedLessons.length===0).length;
  
  document.getElementById('statTotal').textContent = total;
  document.getElementById('statRevenue').textContent = '$' + revenue.toLocaleString();
  document.getElementById('statComplete').textContent = complete;
  document.getElementById('statStuck').textContent = stuck;
  document.getElementById('studentTableCount').textContent = total + ' student' + (total!==1?'s':'');
}

// ── FUNNEL CHART ──────────────────────────────────────────
function renderFunnel() {
  const fc = document.getElementById('funnelChart');
  const paidStudents = students.filter(s=>s.paid);
  if (!paidStudents.length) {
    fc.innerHTML = '<div class="empty-state" style="padding:2rem"><div class="empty-icon">📊</div><p>No paid students yet</p></div>';
    return;
  }
  const COLORS = ['#E8BE3A','#C5A021','#A08018','#7A6010','#34D399','#10B981','#059669','#047857','#3B82F6','#2563EB','#1D4ED8','#1E40AF','#7C3AED'];
  let html = '';
  for (let i = 0; i < 13; i++) {
    const count = paidStudents.filter(s => s.completedLessons.includes(i)).length;
    const pct = paidStudents.length ? Math.round((count/paidStudents.length)*100) : 0;
    const shortTitle = LESSON_TITLES[i].split(' ').slice(0,2).join(' ');
    html += `
      <div class="funnel-bar">
        <div class="funnel-label" title="${LESSON_TITLES[i]}">L${i+1} · ${shortTitle}</div>
        <div class="funnel-track">
          <div class="funnel-fill" style="width:${pct}%;background:${COLORS[i]}"></div>
        </div>
        <div class="funnel-count">${count}</div>
      </div>`;
  }
  fc.innerHTML = html;
}

// ── DONUT ─────────────────────────────────────────────────
function renderDonut() {
  const total = students.length;
  const paid = students.filter(s=>s.paid).length;
  const pending = total - paid;
  const premium = students.filter(s=>s.plan==='premium'&&s.paid).length;
  const standard = students.filter(s=>s.plan==='standard'&&s.paid).length;
  
  const circ = 326.7;
  const paidOffset = total ? (paid / total) * circ : 0;
  const pendingOffset = circ - paidOffset;
  
  document.getElementById('donutPaid').setAttribute('stroke-dasharray', `${paidOffset} ${pendingOffset}`);
  document.getElementById('donutPending').setAttribute('stroke-dasharray', `0 ${paidOffset} ${pendingOffset} 0`);
  // Rotate pending to start after paid arc
  const pendingRot = -90 + (paid/total||0)*360;
  document.getElementById('donutPending').setAttribute('transform', `rotate(${pendingRot} 65 65)`);
  document.getElementById('donutCenter').textContent = total;

  document.getElementById('donutLegend').innerHTML = `
    <div class="legend-item"><div class="legend-dot" style="background:var(--green)"></div><span class="legend-text">Paid</span><span class="legend-val">${paid}</span></div>
    <div class="legend-item"><div class="legend-dot" style="background:var(--amber)"></div><span class="legend-text">Pending</span><span class="legend-val">${pending}</span></div>
    <div class="legend-item"><div class="legend-dot" style="background:var(--blue-acc)"></div><span class="legend-text">Premium Plan</span><span class="legend-val">${premium}</span></div>
    <div class="legend-item"><div class="legend-dot" style="background:var(--gold)"></div><span class="legend-text">Standard Plan</span><span class="legend-val">${standard}</span></div>
  `;
}

// ── ACTIVITY ──────────────────────────────────────────────
function renderActivity() {
  const el = document.getElementById('activityLog');
  if (!activityLog.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon">📭</div><p>No activity yet</p></div>';
    return;
  }
  el.innerHTML = activityLog.slice(0,10).map(a => `
    <div class="log-item">
      <div class="log-dot" style="background:${a.color}"></div>
      <div class="log-content">
        <div class="log-text">${a.text}</div>
        <div class="log-time">${timeAgo(a.time)}</div>
      </div>
    </div>`).join('');
}

// ── STUDENT TABLE ─────────────────────────────────────────
function renderStudentTable(data) {
  const tbody = document.getElementById('studentTable');
  if (!data.length) {
    tbody.innerHTML = '<tr><td colspan="7"><div class="empty-state"><div class="empty-icon">🎓</div><p>No students match your filters.</p></div></td></tr>';
    return;
  }
  tbody.innerHTML = data.map((s, displayIdx) => {
    const idx = students.indexOf(s);
    const [bgC, textC] = getAvatarColors(idx);
    const progress = getProgress(s);
    const pct = getProgressPct(s);
    const isComplete = progress === 13;
    const isNew = progress === 0 && s.paid;
    const isStuckUser = s.paid && progress === 0;
    
    // Quiz dots
    const dots = Array.from({length:13},(_,i)=> {
      let cls = '';
      if (s.completedLessons.includes(i)) cls = 'passed';
      else if (i === progress && s.paid) cls = 'current';
      return `<div class="quiz-dot ${cls}" title="L${i+1}: ${cls||'locked'}"></div>`;
    }).join('');
    
    return `
      <tr>
        <td>
          <div class="cell-name">
            <div class="user-avatar" style="background:${bgC};color:${textC}">${getInitials(s.name)}</div>
            <div>
              <div style="font-weight:700;font-size:.85rem">${escHtml(s.name)}</div>
              <div style="font-size:.7rem;color:var(--text-dim)">${s.isMainUser?'<span style="color:var(--gold-light)">◆ Main User</span>':''}</div>
            </div>
          </div>
        </td>
        <td>
          <div class="cell-mono">${escHtml(s.email)}</div>
          <div style="font-size:.72rem;color:var(--text-dim);margin-top:.2rem">${escHtml(s.phone)}</div>
        </td>
        <td><span style="font-family:'JetBrains Mono',monospace;font-size:.85rem">${s.age}</span></td>
        <td>
          ${s.paid
            ? `<span class="badge badge-paid"><span class="status-ring ring-green"></span>Paid · ${s.plan||'standard'}</span>`
            : `<span class="badge badge-pending"><span class="status-ring ring-amber"></span>Pending</span>`}
        </td>
        <td>
          <div class="lesson-progress">
            <div class="lesson-bar-bg">
              <div class="lesson-bar-fill ${isComplete?'complete':''}" style="width:${pct}%"></div>
            </div>
            <div class="lesson-label">${progress}/13</div>
          </div>
          ${isComplete?'<div style="font-size:.68rem;color:var(--green);font-weight:700;margin-top:.25rem">● Complete</div>':''}
          ${isStuckUser&&!isComplete?'<div style="font-size:.68rem;color:var(--amber);font-weight:700;margin-top:.25rem">● Not started</div>':''}
        </td>
        <td><div class="quiz-dots">${dots}</div></td>
        <td>
          <div class="action-btns">
            <button class="act-btn unlock" onclick="openUnlockModal('${s.id}')">🔓 Unlock</button>
            <button class="act-btn reset" onclick="openResetModal('${s.id}')">↺ Reset</button>
          </div>
        </td>
      </tr>`;
  }).join('');
}

// ── PAYMENT TABLE ─────────────────────────────────────────
function renderPaymentTable(data) {
  const tbody = document.getElementById('paymentTable');
  if (!data.length) {
    tbody.innerHTML = '<tr><td colspan="7"><div class="empty-state"><div class="empty-icon">💳</div><p>No payment records.</p></div></td></tr>';
    return;
  }
  tbody.innerHTML = data.map((s,idx) => {
    const [bgC,textC] = getAvatarColors(idx);
    const amount = PLAN_PRICES[s.plan] || 0;
    return `
      <tr>
        <td>
          <div class="cell-name">
            <div class="user-avatar" style="background:${bgC};color:${textC}">${getInitials(s.name)}</div>
            <span>${escHtml(s.name)}</span>
          </div>
        </td>
        <td><div class="cell-mono">${escHtml(s.email)}</div></td>
        <td><span style="text-transform:capitalize;font-weight:600">${s.plan||'—'}</span></td>
        <td><span style="font-family:'JetBrains Mono',monospace;color:var(--gold-light);font-weight:700">$${amount}</span></td>
        <td>
          ${s.paid
            ? `<span class="badge badge-paid">● Paid</span>`
            : `<span class="badge badge-pending">● Pending</span>`}
        </td>
        <td><span style="font-size:.75rem;color:var(--text-dim)">${timeAgo(s.enrolledAt||new Date().toISOString())}</span></td>
        <td>
          <button class="act-btn ${s.paid?'reset':'unlock'}" onclick="togglePayment('${s.id}')">
            ${s.paid ? '↺ Mark Pending' : '✓ Mark Paid'}
          </button>
        </td>
      </tr>`;
  }).join('');
}

// ── QUIZ TABLE ────────────────────────────────────────────
function renderQuizTable(data) {
  const tbody = document.getElementById('quizTable');
  const paidData = data.filter(s => s.paid);
  if (!paidData.length) {
    tbody.innerHTML = '<tr><td colspan="6"><div class="empty-state"><div class="empty-icon">🧠</div><p>No paid students with quiz data.</p></div></td></tr>';
    return;
  }
  tbody.innerHTML = paidData.map((s,idx) => {
    const [bgC,textC] = getAvatarColors(students.indexOf(s));
    const progress = getProgress(s);
    const isComplete = progress === 13;
    const statusBadge = isComplete
      ? '<span class="badge badge-complete">● Completed</span>'
      : progress === 0
        ? '<span class="badge badge-pending">● Not Started</span>'
        : '<span class="badge badge-stuck">● In Progress</span>';
    const lastLesson = progress > 0 ? `L${progress}: ${LESSON_TITLES[progress-1]}` : '—';
    const dots = Array.from({length:13},(_,i) => {
      let cls = s.completedLessons.includes(i) ? 'passed' : (i===progress&&!isComplete?'current':'');
      return `<div class="quiz-dot ${cls}" title="Lesson ${i+1}"></div>`;
    }).join('');
    return `
      <tr>
        <td>
          <div class="cell-name">
            <div class="user-avatar" style="background:${bgC};color:${textC}">${getInitials(s.name)}</div>
            <span>${escHtml(s.name)}</span>
          </div>
        </td>
        <td><span style="font-family:'JetBrains Mono',monospace;font-size:.9rem;font-weight:700;color:var(--gold-light)">${progress}<span style="color:var(--text-dim)">/13</span></span></td>
        <td><div class="quiz-dots">${dots}</div></td>
        <td>${statusBadge}</td>
        <td><div style="font-size:.78rem;color:var(--text-mid);max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${lastLesson}</div></td>
        <td>
          <div class="action-btns">
            <button class="act-btn unlock" onclick="openUnlockModal('${s.id}')">🔓 Unlock</button>
            <button class="act-btn reset"  onclick="openResetModal('${s.id}')">↺ Reset</button>
          </div>
        </td>
      </tr>`;
  }).join('');
}

// ── QUIZ BREAKDOWN ─────────────────────────────────────────
function renderQuizBreakdown() {
  const el = document.getElementById('quizBreakdown');
  const paid = students.filter(s=>s.paid);
  if (!paid.length) { el.innerHTML = '<div class="empty-state" style="padding:1.5rem"><p>No data</p></div>'; return; }
  const COLORS = ['#10B981','#34D399','#6EE7B7','#A7F3D0','#FDE68A','#FCD34D','#FBBF24','#F59E0B','#F97316','#EF4444','#EC4899','#8B5CF6','#3B82F6'];
  let html = '';
  for (let i = 0; i < 13; i++) {
    const passed = paid.filter(s => s.completedLessons.includes(i)).length;
    const pct = paid.length ? Math.round((passed/paid.length)*100) : 0;
    html += `
      <div class="funnel-bar">
        <div class="funnel-label" title="${LESSON_TITLES[i]}">L${i+1} · ${LESSON_TITLES[i].split(' ').slice(0,3).join(' ')}</div>
        <div class="funnel-track">
          <div class="funnel-fill" style="width:${pct}%;background:${COLORS[i]}"></div>
        </div>
        <div class="funnel-count" style="color:${COLORS[i]}">${pct}%</div>
      </div>`;
  }
  el.innerHTML = html;
}

// ═══════════════════════════════════════════════════════════
//  FILTER / SEARCH
// ═══════════════════════════════════════════════════════════
function filterStudents() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const payFilter = document.getElementById('filterPayment').value;
  const progFilter = document.getElementById('filterProgress').value;
  let result = students.filter(s => {
    const matchQ = !q || s.name.toLowerCase().includes(q) || s.email.toLowerCase().includes(q);
    const matchPay = !payFilter || (payFilter==='paid'?s.paid:!s.paid);
    let matchProg = true;
    if (progFilter === 'complete') matchProg = s.completedLessons.length===13;
    else if (progFilter === 'active') matchProg = s.completedLessons.length>0 && s.completedLessons.length<13 && s.paid;
    else if (progFilter === 'stuck') matchProg = s.paid && s.completedLessons.length===0;
    else if (progFilter === 'new') matchProg = !s.paid;
    return matchQ && matchPay && matchProg;
  });
  renderStudentTable(result);
  document.getElementById('studentTableCount').textContent = result.length + ' student' + (result.length!==1?'s':'');
}

function filterPayments() {
  const q = document.getElementById('searchPayment').value.toLowerCase();
  const result = students.filter(s => !q || s.name.toLowerCase().includes(q));
  renderPaymentTable(result);
}

// ═══════════════════════════════════════════════════════════
//  MODALS & ACTIONS
// ═══════════════════════════════════════════════════════════
function openUnlockModal(id) {
  activeStudentId = id;
  const s = students.find(s=>s.id===id);
  if (!s) return;
  document.getElementById('unlockModalSub').textContent = `Student: ${s.name} · Currently at Lesson ${s.completedLessons.length}/13`;
  const sel = document.getElementById('unlockSelect');
  sel.innerHTML = '';
  for (let i = 1; i <= 13; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `Lesson ${i}: ${LESSON_TITLES[i-1]}`;
    if (i === s.completedLessons.length + 1) opt.selected = true;
    sel.appendChild(opt);
  }
  document.getElementById('unlockModal').classList.add('open');
}

function confirmUnlock() {
  const s = students.find(s=>s.id===activeStudentId);
  if (!s) return;
  const target = parseInt(document.getElementById('unlockSelect').value);
  s.paid = true;
  const newCompleted = [];
  for (let i = 0; i < target; i++) newCompleted.push(i);
  s.completedLessons = newCompleted;
  
  // Sync back to main course if it's the main user
  if (s.isMainUser) syncToMain(s);
  
  saveStudents();
  renderAll();
  closeModal('unlockModal');
  logActivity(`<strong>${escHtml(s.name)}</strong> was manually unlocked to Lesson ${target}`, 'var(--gold)');
  showToast(`🔓 Unlocked up to Lesson ${target} for ${s.name}`, '🔓');
}

function openResetModal(id) {
  activeStudentId = id;
  const s = students.find(s=>s.id===id);
  if (!s) return;
  document.getElementById('resetModalSub').innerHTML = `This will reset <strong>${escHtml(s.name)}</strong>'s progress (${s.completedLessons.length} lessons completed). This cannot be undone.`;
  document.getElementById('resetModal').classList.add('open');
}

function confirmReset() {
  const s = students.find(s=>s.id===activeStudentId);
  if (!s) return;
  const prevProgress = s.completedLessons.length;
  s.completedLessons = [];
  if (s.isMainUser) syncToMain(s);
  saveStudents();
  renderAll();
  closeModal('resetModal');
  logActivity(`<strong>${escHtml(s.name)}</strong>'s progress was reset (was at Lesson ${prevProgress})`, 'var(--red)');
  showToast(`↺ Progress reset for ${s.name}`, '↺');
}

function togglePayment(id) {
  const s = students.find(s=>s.id===id);
  if (!s) return;
  s.paid = !s.paid;
  if (!s.paid) s.completedLessons = [];
  if (s.isMainUser) syncToMain(s);
  saveStudents();
  renderAll();
  logActivity(`<strong>${escHtml(s.name)}</strong> payment status set to ${s.paid?'Paid':'Pending'}`, s.paid?'var(--green)':'var(--amber)');
  showToast(`${s.paid?'✅ Marked Paid':'⏳ Marked Pending'}: ${s.name}`, s.paid?'✅':'⏳');
}

function syncToMain(s) {
  try {
    const cs = JSON.parse(localStorage.getItem('mmCourseState') || '{}');
    cs.completedLessons = s.completedLessons;
    cs.paid = s.paid;
    localStorage.setItem('mmCourseState', JSON.stringify(cs));
  } catch(e) {}
}

// ── ADD USER MODAL ─────────────────────────────────────────
function showAddUserModal() {
  document.getElementById('addUserModal').classList.add('open');
}
function confirmAddUser() {
  const name = document.getElementById('addName').value.trim();
  const email = document.getElementById('addEmail').value.trim();
  const phone = document.getElementById('addPhone').value.trim();
  const age = document.getElementById('addAge').value.trim();
  const plan = document.getElementById('addPlan').value;
  const lessons = parseInt(document.getElementById('addLessons').value);
  
  if (!name || !email) { showToast('⚠️ Name and email are required', '⚠️'); return; }
  
  const completed = [];
  for (let i = 0; i < lessons; i++) completed.push(i);
  
  const newStudent = {
    id: 'student_' + Date.now(),
    name, email,
    phone: phone || '—',
    age: age || '—',
    plan,
    paid: plan !== 'pending',
    completedLessons: completed,
    enrolledAt: new Date().toISOString()
  };
  students.push(newStudent);
  saveStudents();
  renderAll();
  closeModal('addUserModal');
  
  // Reset form
  ['addName','addEmail','addPhone','addAge'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('addLessons').value = 5;
  document.getElementById('addLessonsVal').textContent = '5';
  
  logActivity(`New student <strong>${escHtml(name)}</strong> added manually (${plan}, ${lessons} lessons)`, 'var(--blue-acc)');
  showToast(`✅ Student "${name}" added!`, '✅');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// ═══════════════════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════════════════
const VIEW_LABELS = { overview: 'Overview', students: 'Students', payments: 'Payments', quizzes: 'Quiz Logs' };
function switchView(name) {
  document.querySelectorAll('[id^="view-"]').forEach(el => el.style.display = 'none');
  document.getElementById('view-' + name).style.display = 'block';
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  event.currentTarget.classList.add('active');
  document.getElementById('viewTitle').textContent = '— ' + VIEW_LABELS[name];
  currentView = name;
  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
}
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ═══════════════════════════════════════════════════════════
//  EXPORT CSV
// ═══════════════════════════════════════════════════════════
function exportCSV() {
  if (!students.length) { showToast('⚠️ No students to export', '⚠️'); return; }
  const headers = ['Name','Email','Phone','Age','Plan','Paid','Lessons Completed','Progress %','Enrolled'];
  const rows = students.map(s => [
    s.name, s.email, s.phone, s.age, s.plan,
    s.paid?'Yes':'No', s.completedLessons.length,
    getProgressPct(s)+'%', s.enrolledAt ? new Date(s.enrolledAt).toLocaleDateString() : '—'
  ].map(v => `"${String(v).replace(/"/g,'""')}"`).join(','));
  const csv = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csv], {type:'text/csv'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download='mastermind_students.csv'; a.click();
  URL.revokeObjectURL(url);
  logActivity('Admin exported student data as CSV', 'var(--blue-acc)');
  showToast('📥 CSV exported successfully!', '📥');
}

// ═══════════════════════════════════════════════════════════
//  UTILITIES
let toastTimer;
function showToast(msg, icon='ℹ️') {
  document.getElementById('toastMsg').textContent = msg;
  document.getElementById('toastIcon').textContent = icon;
  const t = document.getElementById('toast');
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 3000);
}

function escHtml(str) {
  return String(str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Click outside modal to close
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
});

// ═══════════════════════════════════════════════════════════
//  DEMO DATA — seeds if localStorage is empty
// ═══════════════════════════════════════════════════════════
function seedDemoData() {
  const demoStudents = [
    { id:'d1', name:'Ahmed Al-Rashidi', email:'ahmed@techcorp.dz', phone:'+213 555 001 234', age:'32', plan:'premium', paid:true, completedLessons:[0,1,2,3,4,5,6,7,8,9,10,11,12], enrolledAt: new Date(Date.now()-7*86400000).toISOString() },
    { id:'d2', name:'Fatima Boumediene', email:'fatima.b@gmail.com', phone:'+213 555 002 345', age:'27', plan:'premium', paid:true, completedLessons:[0,1,2,3,4,5,6,7], enrolledAt: new Date(Date.now()-5*86400000).toISOString() },
    { id:'d3', name:'Youssef Mansouri', email:'y.mansouri@outlook.com', phone:'+213 555 003 456', age:'35', plan:'standard', paid:true, completedLessons:[0,1,2,3], enrolledAt: new Date(Date.now()-3*86400000).toISOString() },
    { id:'d4', name:'Nadia Cherif', email:'nadia.cherif@edu.dz', phone:'+213 555 004 567', age:'24', plan:'standard', paid:true, completedLessons:[0,1,2,3,4,5,6,7,8,9], enrolledAt: new Date(Date.now()-4*86400000).toISOString() },
    { id:'d5', name:'Karim Bekkali', email:'kbekkali@startup.dz', phone:'+213 555 005 678', age:'29', plan:'premium', paid:true, completedLessons:[], enrolledAt: new Date(Date.now()-1*86400000).toISOString() },
    { id:'d6', name:'Sara Al-Mansoori', email:'sara.mansoori@gmail.com', phone:'+971 50 123 4567', age:'31', plan:'premium', paid:true, completedLessons:[0,1,2,3,4,5], enrolledAt: new Date(Date.now()-2*86400000).toISOString() },
    { id:'d7', name:'Omar Tlemcani', email:'o.tlemcani@company.com', phone:'+213 555 007 890', age:'38', plan:'pending', paid:false, completedLessons:[], enrolledAt: new Date(Date.now()-6*86400000).toISOString() },
    { id:'d8', name:'Amira Hadjadj', email:'amira.h@freelance.dz', phone:'+213 555 008 901', age:'26', plan:'standard', paid:true, completedLessons:[0,1,2,3,4,5,6,7,8,9,10,11], enrolledAt: new Date(Date.now()-9*86400000).toISOString() },
  ];
  const demoActivity = [
    { text: '<strong>Ahmed Al-Rashidi</strong> completed the full course — 13/13 lessons!', color:'var(--green)', time: new Date(Date.now()-3600000).toISOString() },
    { text: '<strong>Nadia Cherif</strong> passed Quiz 10: Conversion Rate Optimization', color:'var(--gold)', time: new Date(Date.now()-7200000).toISOString() },
    { text: '<strong>Sara Al-Mansoori</strong> enrolled in Premium plan — $147', color:'var(--blue-acc)', time: new Date(Date.now()-10800000).toISOString() },
    { text: '<strong>Karim Bekkali</strong> registered but has not started lessons yet', color:'var(--amber)', time: new Date(Date.now()-86400000).toISOString() },
    { text: '<strong>Omar Tlemcani</strong> registered — payment pending', color:'var(--red)', time: new Date(Date.now()-172800000).toISOString() },
  ];
  localStorage.setItem('mm_admin_students', JSON.stringify(demoStudents));
  localStorage.setItem('mm_admin_activity', JSON.stringify(demoActivity));
}

// ═══════════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('mm_admin_students')) seedDemoData();
  loadStudents();
  loadActivity();
  renderAll();
  // Auto-refresh every 30s
  setInterval(() => { loadStudents(); renderAll(); document.getElementById('lastSync').textContent = 'Synced just now'; }, 30000);
});