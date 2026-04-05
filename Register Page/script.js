/* ═══════════════════════════════════
   VALIDATION RULES
═══════════════════════════════════ */
const RULES = {
  fullName:  { test: v => v.trim().length >= 3 && v.trim().includes(' '), err:'⚠ Enter your full name (first & last)', ok:'✓ Looks good!' },
  email:     { test: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()), err:'⚠ Enter a valid email address', ok:'✓ Valid email' },
  age:       { test: v => { const n=parseInt(v); return !isNaN(n) && n>=16 && n<=80; }, err:'⚠ Age must be between 16 and 80', ok:'✓ Valid' },
  phone:     { test: v => v.replace(/\D/g,'').length >= 7, err:'⚠ Enter a valid phone number', ok:'✓ Valid number' },
  password:  { test: v => v.length >= 8, err:'⚠ Password must be at least 8 characters', ok:'✓ Strong password' },
  confirmPw: { test: v => v === document.getElementById('password').value && v.length >= 8, err:'⚠ Passwords do not match', ok:'✓ Passwords match' }
};

/* ── Field state setter ── */
function setState(id, state, msg) {
  const inp = document.getElementById(id);
  const msgEl = document.getElementById(id + 'Msg');
  const st = document.getElementById(id + 'St');
  inp.classList.remove('valid','invalid');
  if (state === 'valid') { inp.classList.add('valid'); if(st) st.textContent='✅'; }
  else if (state === 'invalid') { inp.classList.add('invalid'); if(st) st.textContent='❌'; }
  else { if(st) st.textContent=''; }
  if (msgEl) {
    msgEl.className = 'field-msg';
    if (msg && state) { msgEl.classList.add(state==='valid'?'success':'error'); msgEl.textContent=msg; }
  }
}

/* ── Validate one field ── */
function validateOne(id) {
  const rule = RULES[id]; if(!rule) return true;
  const val  = document.getElementById(id).value;
  const ok   = rule.test(val);
  setState(id, ok?'valid':'invalid', ok?rule.ok:rule.err);
  return ok;
}

/* ── Password strength ── */
function getStrength(pw) {
  let s = 0;
  if(pw.length >= 8) s++;
  if(/[A-Z]/.test(pw)) s++;
  if(/[0-9]/.test(pw)) s++;
  if(/[^A-Za-z0-9]/.test(pw)) s++;
  return s;
}
function updateStrength(pw) {
  const wrap  = document.getElementById('strengthWrap');
  const label = document.getElementById('strengthLbl');
  if(!pw){ wrap.style.display='none'; return; }
  wrap.style.display='block';
  const score = getStrength(pw);
  const level = score<=1?'weak':score<=2?'fair':'strong';
  const info  = {weak:{label:'🔴 Too Weak',color:'var(--red)'},fair:{label:'🟡 Fair',color:'var(--gold)'},strong:{label:'🟢 Strong',color:'var(--green)'}};
  ['seg1','seg2','seg3','seg4'].forEach((sid,i)=>{
    const el=document.getElementById(sid); el.className='strength-seg';
    if(i<score) el.classList.add(level);
  });
  label.textContent=info[level].label; label.style.color=info[level].color;
}

/* ── Toggle password ── */
function togglePw(id,btn){
  const inp=document.getElementById(id);
  inp.type=inp.type==='password'?'text':'password';
  btn.textContent=inp.type==='password'?'👁️':'🙈';
}

/* ── Live validation ── */
['fullName','email','age','phone','password','confirmPw'].forEach(id=>{
  const el=document.getElementById(id); if(!el) return;
  el.addEventListener('input',()=>{
    if(id==='password'){ updateStrength(el.value); if(document.getElementById('confirmPw').value) validateOne('confirmPw'); }
    if(el.value.length>0) validateOne(id); else setState(id,'','');
  });
  el.addEventListener('blur',()=>{ if(el.value.length>0) validateOne(id); });
});

/* Phone: digits only */
document.getElementById('phone').addEventListener('input',function(){
  this.value=this.value.replace(/[^\d\s\-\(\)+]/g,'');
});

/* ── Full validation ── */
function validateAll(){
  let ok=true;
  ['fullName','email','age','phone','password','confirmPw'].forEach(id=>{if(!validateOne(id)) ok=false;});
  const termsEl=document.getElementById('terms');
  const termsMsg=document.getElementById('termsMsg');
  if(!termsEl.checked){
    termsMsg.className='field-msg error'; termsMsg.textContent='⚠ Please accept the terms to continue';
    ok=false;
  } else { termsMsg.className='field-msg'; }
  return ok;
}

/* ── Collect & save ── */
function collectData(){
  return {
    id:         'student_' + Date.now(),
    name:       document.getElementById('fullName').value.trim(),
    email:      document.getElementById('email').value.trim().toLowerCase(),
    age:        document.getElementById('age').value,
    gender:     document.getElementById('gender').value,
    phone:      document.getElementById('countryCode').value + ' ' + document.getElementById('phone').value.trim(),
    countryCode:document.getElementById('countryCode').value,
    plan:       'pending',
    paid:       false,
    completedLessons:[],
    enrolledAt: new Date().toISOString()
  };
}

function saveData(data){
  // Main course state
  localStorage.setItem('mmCourseState', JSON.stringify({
    registered:true, paid:false,
    studentName:data.name,
    completedLessons:[], currentLesson:0
  }));
  // Admin students list
  let students=[];
  try{ students=JSON.parse(localStorage.getItem('mm_admin_students')||'[]'); }catch(e){}
  students=students.filter(s=>s.email!==data.email);
  students.unshift(data);
  localStorage.setItem('mm_admin_students', JSON.stringify(students));
  // Activity log
  let activity=[];
  try{ activity=JSON.parse(localStorage.getItem('mm_admin_activity')||'[]'); }catch(e){}
  activity.unshift({
    text:`New student <strong>${data.name}</strong> registered — awaiting payment`,
    color:'#3B82F6', time:new Date().toISOString()
  });
  localStorage.setItem('mm_admin_activity', JSON.stringify(activity.slice(0,50)));
  // Pending for payment page
  localStorage.setItem('mm_pending_registration', JSON.stringify(data));
}

/* ── Submit ── */
document.getElementById('regForm').addEventListener('submit', async function(e){
  e.preventDefault();
  if(!validateAll()){
    showToast('⚠ Please fix the errors above','⚠️');
    const first=document.querySelector('.input-field.invalid');
    if(first) first.scrollIntoView({behavior:'smooth',block:'center'});
    return;
  }
  const btn=document.getElementById('submitBtn');
  const text=document.getElementById('btnText');
  const arr=document.getElementById('btnArr');
  const loader=document.getElementById('btnLoader');
  btn.disabled=true; text.textContent='Creating your account…'; arr.style.display='none'; loader.style.display='block';

  await new Promise(r=>setTimeout(r,1700));

  const data=collectData();
  saveData(data);

  // Show success
  document.getElementById('successName').textContent = data.name.split(' ')[0];
  document.getElementById('successOverlay').classList.add('show');

  // Countdown redirect
  let cd=3;
  const fill=document.getElementById('redirectFill');
  const lbl=document.getElementById('redirectLbl');
  requestAnimationFrame(()=>{ fill.style.transition=`width ${cd}s linear`; fill.style.width='100%'; });
  const timer=setInterval(()=>{
    cd--;
    lbl.textContent=cd>0?`Redirecting in ${cd}s…`:'Redirecting…';
    if(cd<=0){ clearInterval(timer); window.location.href='marketing-course-lms.html#register'; }
  },1000);
});

/* ── Toast ── */
let toastTimer;
function showToast(msg,icon='ℹ️'){
  document.getElementById('toastMsg').textContent=msg;
  document.getElementById('toastIcon').textContent=icon;
  const t=document.getElementById('toast'); t.classList.add('show');
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>t.classList.remove('show'),3500);
}
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}