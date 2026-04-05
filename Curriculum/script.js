
/* ══════════════════════════════════════════════════════
   LESSON DATA
/*══════════════════════════════════════════════════════ */
const LESSONS = [
  {
    num: 1, icon: '📡', module: 1, free: true,
    title: 'Fundamentals of Digital Marketing',
    duration: '34 min', type: 'Video + Quiz',
    summary: 'Begin your journey with a comprehensive overview of the digital marketing landscape. Understand the <strong>4Ps framework</strong>, the difference between organic and paid strategies, and how modern brands build integrated marketing machines from scratch.',
    learns: [
      'The core 4Ps of Marketing and their modern extensions',
      'Difference between push vs. pull marketing strategies',
      'How to map a customer journey from awareness to purchase',
      'The digital marketing funnel and key conversion metrics'
    ],
    skills: ['Marketing Strategy', 'Customer Journey', 'Brand Positioning', 'Funnel Basics'],
    bonus: { label: 'Lesson Resource', items: ['📄 4Ps Cheat Sheet', '🎯 Funnel Template'] },
    difficulty: 'Beginner'
  },
  {
    num: 2, icon: '🎯', module: 1, free: false,
    title: 'Identifying Your Target Audience (Personas)',
    duration: '31 min', type: 'Video + Quiz',
    summary: 'Stop marketing to everyone and start converting someone. This lesson teaches you to <strong>build data-backed buyer personas</strong> that reflect real humans — their fears, motivations, and buying triggers — using research methods that professional agencies rely on.',
    learns: [
      'How to conduct audience research using surveys and analytics',
      'The 5 components of a powerful buyer persona',
      'Psychographic vs. demographic segmentation',
      'How to validate personas with real customer interviews'
    ],
    skills: ['Audience Research', 'Buyer Personas', 'Segmentation', 'Customer Psychology'],
    bonus: { label: 'Lesson Resource', items: ['📊 Persona Template', '🔍 Research Checklist'] },
    difficulty: 'Beginner'
  },
  {
    num: 3, icon: '✍️', module: 1, free: false,
    title: 'Content Marketing Strategy',
    duration: '38 min', type: 'Video + Quiz',
    summary: 'Content is the fuel of every digital marketing channel. Learn the <strong>pillar-cluster model</strong>, how to build a content calendar that drives consistent organic traffic, and how to repurpose one piece of content across 7+ formats without burning out.',
    learns: [
      'Building a Topic Cluster strategy for SEO authority',
      'Content calendar framework — plan 90 days in 1 hour',
      'TOFU / MOFU / BOFU content types and when to use each',
      'Repurposing content across blog, video, social, and email'
    ],
    skills: ['Content Strategy', 'Topic Clusters', 'Content Calendar', 'Repurposing'],
    bonus: { label: 'Lesson Resource', items: ['📅 90-Day Calendar', '🗂️ Content Audit Sheet'] },
    difficulty: 'Beginner'
  },
  {
    num: 4, icon: '📱', module: 1, free: false,
    title: 'Social Media Mastery (Facebook & Instagram)',
    duration: '45 min', type: 'Video + Quiz',
    summary: 'Master the two most powerful social commerce platforms. Understand <strong>algorithm mechanics</strong>, content formats that win organic reach, community building tactics, and how to turn followers into paying customers through strategic storytelling.',
    learns: [
      'Facebook & Instagram algorithm decoded — what gets shown',
      'Reels, Stories, Carousels: which format wins in 2025',
      'Building a social content system that runs in 30 min/day',
      'Community management and DM conversion strategies'
    ],
    skills: ['Facebook Marketing', 'Instagram Strategy', 'Reels', 'Community Building'],
    bonus: { label: 'Lesson Resource', items: ['📸 Content Grid Planner', '📊 Engagement Tracker'] },
    difficulty: 'Intermediate'
  },
  {
    num: 5, icon: '🔍', module: 2, free: false,
    title: 'Search Engine Optimization (SEO) Basics',
    duration: '42 min', type: 'Video + Quiz',
    summary: 'SEO is the only marketing channel that compounds over time. This lesson covers <strong>Technical SEO, On-Page optimization, and Link Building</strong> using the same strategies that have ranked client sites to page 1 in competitive niches with zero ad spend.',
    learns: [
      'Keyword research using Ahrefs, SEMrush, and free tools',
      'On-page SEO: Title tags, H1s, internal linking done right',
      'Technical SEO: Core Web Vitals, site speed, indexability',
      'Link building strategies that actually work in 2025'
    ],
    skills: ['SEO Strategy', 'Keyword Research', 'Technical SEO', 'Link Building'],
    bonus: { label: 'Lesson Resource', items: ['🔑 Keyword Research Template', '✅ SEO Audit Checklist'] },
    difficulty: 'Intermediate'
  },
  {
    num: 6, icon: '💰', module: 2, free: false,
    title: 'Paid Advertising (Google & Meta Ads)',
    duration: '52 min', type: 'Video + Quiz',
    summary: 'The fastest path to scalable revenue — when done right. Learn to set up <strong>Google Search campaigns and Meta Ads</strong> that generate measurable ROI from day one. Master audience targeting, ad creative principles, budget allocation, and ROAS optimization.',
    learns: [
      'Google Ads campaign structure: keywords, match types, bids',
      'Meta Ads: Audiences, creatives, and the campaign funnel',
      'Reading and acting on performance data (CTR, CPC, ROAS)',
      'Retargeting strategies to convert warm audiences at 3× efficiency'
    ],
    skills: ['Google Ads', 'Meta Ads', 'ROAS Optimization', 'Retargeting'],
    bonus: { label: 'Lesson Resource', items: ['📊 Ad Budget Calculator', '🎨 Ad Creative Swipe File'] },
    difficulty: 'Intermediate'
  },
  {
    num: 7, icon: '📧', module: 2, free: false,
    title: 'Email Marketing & Automation',
    duration: '36 min', type: 'Video + Quiz',
    summary: 'Email generates $42 for every $1 spent — making it the highest-ROI channel in digital marketing. Master <strong>list building, segmentation, 5-sequence automation flows</strong>, and the subject line psychology that lifts open rates above 35%.',
    learns: [
      'Building and segmenting an email list from zero',
      'The 5 essential automation sequences every business needs',
      'Subject line formulas with proven 35%+ open rates',
      'Email deliverability — staying out of spam folders'
    ],
    skills: ['Email Marketing', 'Automation Flows', 'List Building', 'Deliverability'],
    bonus: { label: 'Lesson Resource', items: ['✉️ 5-Sequence Template', '📝 Subject Line Swipe File'] },
    difficulty: 'Intermediate'
  },
  {
    num: 8, icon: '🧠', module: 2, free: false,
    title: 'Psychology of Selling & Copywriting',
    duration: '40 min', type: 'Video + Quiz',
    summary: 'Words make or break campaigns. This lesson reveals the <strong>6 psychological triggers</strong> behind every purchase decision, and teaches you to write copy that converts — headlines, ad copy, landing page text, and CTAs that stop thumbs and open wallets.',
    learns: [
      "Cialdini's 6 Principles of Persuasion applied to marketing copy",
      'The PAS and AIDA copywriting frameworks for any channel',
      'Writing headlines that stop the scroll in competitive feeds',
      'CTA optimization: micro-copy that lifts conversion rates'
    ],
    skills: ['Copywriting', 'Persuasion Psychology', 'PAS / AIDA', 'CTA Writing'],
    bonus: { label: 'Lesson Resource', items: ['📝 Copy Formula Cheat Sheet', '🔥 Headline Generator Framework'] },
    difficulty: 'Intermediate'
  },
  {
    num: 9, icon: '📊', module: 3, free: false,
    title: 'Analytics & Data Tracking',
    duration: '44 min', type: 'Video + Quiz',
    summary: 'Marketing without data is guesswork. Master <strong>Google Analytics 4, Meta Pixel, and UTM tracking</strong> to understand exactly which campaigns drive revenue. Learn to build dashboards that impress clients and make decisions that improve ROAS month over month.',
    learns: [
      'Google Analytics 4 setup, events, and conversion tracking',
      'UTM parameters: how to tag every link for clean attribution',
      'Building a marketing KPI dashboard in under 30 minutes',
      'Multi-touch attribution models and when to use each'
    ],
    skills: ['GA4', 'UTM Tracking', 'Attribution Models', 'KPI Dashboards'],
    bonus: { label: 'Lesson Resource', items: ['📈 KPI Dashboard Template', '🏷️ UTM Builder Spreadsheet'] },
    difficulty: 'Advanced'
  },
  {
    num: 10, icon: '🔧', module: 3, free: false,
    title: 'Building a Sales Funnel',
    duration: '48 min', type: 'Video + Quiz',
    summary: 'A funnel without leaks is a printing press. Learn to architect <strong>end-to-end sales funnels</strong> — from cold traffic to closed sale — using landing pages, lead magnets, tripwires, upsells, and email sequences that work while you sleep.',
    learns: [
      'The 6-stage sales funnel architecture from zero',
      'Lead magnet strategy: what converts in 2025',
      'Tripwires, order bumps, and upsell sequences',
      'Connecting traffic sources to CRM and automation'
    ],
    skills: ['Sales Funnels', 'Lead Magnets', 'Upsell Strategy', 'CRM Integration'],
    bonus: { label: 'Lesson Resource', items: ['🗺️ Funnel Map Template', '💡 Lead Magnet Idea Generator'] },
    difficulty: 'Advanced'
  },
  {
    num: 11, icon: '🤝', module: 3, free: false,
    title: 'Influencer Marketing Tactics',
    duration: '29 min', type: 'Video + Quiz',
    summary: 'Borrowed audiences beat built ones — when done strategically. Learn the <strong>influencer tier system</strong>, how to identify and negotiate with micro-influencers for maximum ROI, set up affiliate tracking, and measure impact beyond vanity metrics.',
    learns: [
      'Mega vs. Macro vs. Micro vs. Nano influencer strategy',
      'Finding influencers using free and paid research tools',
      'Outreach templates and negotiation tactics that close deals',
      'Affiliate tracking setup and commission structure design'
    ],
    skills: ['Influencer Strategy', 'Affiliate Marketing', 'Partnership Negotiation', 'UGC'],
    bonus: { label: 'Lesson Resource', items: ['📩 Outreach Template Pack', '📊 Influencer ROI Calculator'] },
    difficulty: 'Advanced'
  },
  {
    num: 12, icon: '⚡', module: 3, free: false,
    title: 'Conversion Rate Optimization (CRO)',
    duration: '37 min', type: 'Video + Quiz',
    summary: 'Doubling your conversion rate is worth more than doubling your traffic budget. Master <strong>A/B testing methodology, heatmap analysis, and landing page psychology</strong> to extract maximum revenue from your existing traffic — the most leveraged skill in marketing.',
    learns: [
      'CRO audit framework: finding the highest-impact fixes fast',
      'A/B testing protocol: hypothesis, sample size, significance',
      'Heatmaps and session recordings — reading user behavior',
      'Landing page trust signals and friction reduction techniques'
    ],
    skills: ['A/B Testing', 'Heatmap Analysis', 'Landing Page CRO', 'UX Psychology'],
    bonus: { label: 'Lesson Resource', items: ['🔬 CRO Audit Checklist', '📐 Landing Page Teardown Framework'] },
    difficulty: 'Advanced'
  },
  {
    num: 13, icon: '🚀', module: 3, free: false,
    title: 'Final Strategy: Scaling Your Business',
    duration: '55 min', type: 'Masterclass + Quiz',
    summary: 'The capstone. Synthesize all 12 previous modules into a <strong>full-stack, integrated marketing strategy</strong> — the same framework used to scale 7-figure brands. Build your personal roadmap, launch your first integrated campaign, and earn your verified certificate.',
    learns: [
      'The Integrated Marketing Framework (IMF): all channels unified',
      'T-shaped marketer career roadmap for the next 3 years',
      'Building a portfolio with real campaigns and real results',
      'Launching your first full-funnel campaign from lesson 1–12 knowledge'
    ],
    skills: ['Full-Stack Strategy', 'Campaign Planning', 'Portfolio Building', 'Career Roadmap'],
    bonus: { label: 'Capstone Reward', items: ['🏆 Verified Certificate', '📋 Full Strategy Template', '🎓 Alumni Community Access'] },
    difficulty: 'Masterclass'
  }
];

const DIFF_COLORS = {
  'Beginner':    { bg: 'rgba(5,150,105,.08)',  text: 'var(--green)',     border:'rgba(5,150,105,.2)' },
  'Intermediate':{ bg: 'rgba(197,160,33,.08)', text: 'var(--gold-dark)', border:'rgba(197,160,33,.2)' },
  'Advanced':    { bg: 'rgba(26,35,126,.08)',  text: 'var(--navy-light)',border:'rgba(26,35,126,.15)' },
  'Masterclass': { bg: 'rgba(124,45,18,.08)',  text: '#c2410c',          border:'rgba(124,45,18,.2)' },
};

/* ── Load course state from localStorage ── */
let courseState = { paid: false, completedLessons: [] };
try {
  const raw = localStorage.getItem('mmCourseState');
  if (raw) courseState = { ...courseState, ...JSON.parse(raw) };
} catch(e) {}

/* ── Build progress UI ── */
function buildProgressUI() {
  const pct = Math.round((courseState.completedLessons.length / 13) * 100);
  if (courseState.paid || courseState.completedLessons.length > 0) {
    document.getElementById('heroProgressWrap').style.display = 'block';
    document.getElementById('heroPctLabel').textContent = pct + '% Complete';
    setTimeout(() => { document.getElementById('heroTrackFill').style.width = pct + '%'; }, 300);
    // dots
    const dotsEl = document.getElementById('heroTrackDots');
    dotsEl.innerHTML = '';
    for (let i = 0; i < 13; i++) {
      const d = document.createElement('div');
      d.className = 'track-dot';
      if (courseState.completedLessons.includes(i)) d.classList.add('done');
      else if (i === courseState.completedLessons.length && courseState.paid) d.classList.add('active');
      dotsEl.appendChild(d);
    }
  }
  // sidebar
  document.getElementById('sidePct').textContent = pct + '%';
  document.getElementById('sideFill').style.width = pct + '%';
  document.getElementById('progSub').textContent = courseState.paid
    ? `${courseState.completedLessons.length} of 13 lessons completed`
    : 'Complete registration to start';
  // module mini
  const miniEl = document.getElementById('moduleMini');
  miniEl.innerHTML = '';
  [['Foundation','01–04',0,4],['Growth','05–08',4,8],['Mastery','09–13',8,13]].forEach(([name,range,start,end]) => {
    const done = courseState.completedLessons.filter(n => n >= start && n < end).length;
    const total = end - start;
    const dots = Array.from({length:total},(_,i) => `<div class="module-mini-dot${courseState.completedLessons.includes(start+i)?' done':''}"></div>`).join('');
    miniEl.innerHTML += `<div class="module-mini-item"><span class="module-mini-name">${name} (${range})</span><div class="module-mini-dots">${dots}</div></div>`;
  });
}

/* ── Render accordion ── */
function renderAccordion(filter = 0) {
  const list = document.getElementById('accordionList');
  list.innerHTML = '';

  LESSONS.forEach((lesson, idx) => {
    if (filter !== 0 && lesson.module !== filter) return;

    const isCompleted = courseState.completedLessons.includes(idx);
    const isUnlocked  = lesson.free || (courseState.paid && (idx === 0 || courseState.completedLessons.includes(idx - 1)));
    const isLocked    = !isUnlocked;
    const diff        = DIFF_COLORS[lesson.difficulty] || DIFF_COLORS['Beginner'];

    const item = document.createElement('div');
    item.className = `accordion-item reveal delay-${(idx % 3) + 1}${isLocked ? ' locked' : ''}${isCompleted ? ' completed' : ''}`;
    item.id = `lesson-${idx}`;

    const lockIconHtml = isLocked
      ? '<span class="lock-icon">🔒</span>'
      : isCompleted
        ? '<span style="color:var(--green);font-size:1.1rem">✓</span>'
        : '';

    const tagHtml = lesson.free
      ? '<span class="tag tag-free">✦ Free Preview</span>'
      : isLocked
        ? '<span class="tag tag-locked">🔒 Locked</span>'
        : isCompleted
          ? '<span class="tag tag-done">✓ Completed</span>'
          : '<span class="tag tag-type">▶ Unlocked</span>';

    const bonusItems = lesson.bonus.items.map(b => `<div class="bonus-item">${b}</div>`).join('');
    const learnItems = lesson.learns.map(l => `<div class="learn-item"><div class="learn-check">✓</div><span>${l}</span></div>`).join('');
    const skillTags  = lesson.skills.map(s => `<span class="skill-tag">${s}</span>`).join('');

    const ctaText = isLocked ? '🔒 Complete Previous Lesson' : isCompleted ? '✓ Review Lesson' : lesson.free ? '▶ Start Free — Lesson 1' : '▶ Continue Learning';
    const ctaClass = isLocked ? 'locked-cta' : isCompleted ? 'completed-cta' : '';
    const ctaAction = isLocked ? `showLockedToast(${idx})` : `goToLesson(${idx})`;

    item.innerHTML = `
      <div class="accordion-header${isLocked ? ' no-hover' : ''}" onclick="${isLocked ? `showLockedToast(${idx})` : `toggleAccordion(${idx})`}">
        <div class="lesson-number">${String(lesson.num).padStart(2,'0')}</div>
        <div class="lesson-icon-wrap">${lesson.icon}</div>
        <div class="lesson-title-block">
          <div class="lesson-title-text">
            ${lesson.title}
            ${lockIconHtml}
            ${lesson.num === 13 ? '<span class="tag tag-popular" style="font-size:.62rem">FINAL</span>' : ''}
          </div>
          <div class="lesson-meta">
            <span class="tag tag-duration">⏱ ${lesson.duration}</span>
            <span class="tag tag-type">${lesson.type}</span>
            <span class="tag" style="background:${diff.bg};color:${diff.text};border:1px solid ${diff.border}">${lesson.difficulty}</span>
            ${tagHtml}
          </div>
        </div>
        ${!isLocked ? '<div class="chevron">▾</div>' : ''}
      </div>
      <div class="accordion-body">
        <div class="accordion-body-inner">
          <div class="lesson-overview">
            <div>
              <p class="lesson-summary">${lesson.summary}</p>
              <div style="font-size:.72rem;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:var(--navy-dark);margin-bottom:.75rem">What You'll Learn</div>
              <div class="learn-list">${learnItems}</div>
              <div style="font-size:.72rem;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:var(--navy-dark);margin-bottom:.625rem">Skills You'll Gain</div>
              <div class="skill-tags">${skillTags}</div>
              <div class="lesson-footer">
                <div class="lesson-details-pills">
                  <div class="detail-pill">⏱ ${lesson.duration}</div>
                  <div class="detail-pill">📋 ${lesson.type}</div>
                  <div class="detail-pill">📊 ${lesson.difficulty}</div>
                </div>
                <button class="lesson-cta ${ctaClass}" onclick="${ctaAction}">${ctaText}</button>
              </div>
            </div>
            <div class="bonus-card">
              <div class="bonus-label">${lesson.bonus.label}</div>
              ${bonusItems}
            </div>
          </div>
        </div>
      </div>
    `;
    list.appendChild(item);
  });

  // Reveal observer
  setTimeout(() => {
    document.querySelectorAll('.accordion-item.reveal').forEach(el => revealObs.observe(el));
  }, 50);
}

/* ── Accordion toggle ── */
let openIdx = null;
function toggleAccordion(idx) {
  const lesson = LESSONS[idx];
  const isUnlocked = lesson.free || (courseState.paid && (idx === 0 || courseState.completedLessons.includes(idx - 1)));
  if (!isUnlocked) { showLockedToast(idx); return; }

  const item = document.getElementById(`lesson-${idx}`);
  if (!item) return;

  if (openIdx !== null && openIdx !== idx) {
    const prev = document.getElementById(`lesson-${openIdx}`);
    if (prev) prev.classList.remove('open');
  }
  item.classList.toggle('open');
  openIdx = item.classList.contains('open') ? idx : null;
}

/* ── Filter modules ── */
function filterModule(mod, btn) {
  document.querySelectorAll('.module-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  openIdx = null;
  renderAccordion(mod);
}

/* ── Lock toast ── */
function showLockedToast(idx) {
  const prev = idx > 0 ? LESSONS[idx - 1].title : '';
  if (!courseState.paid) {
    showToast('🔒 Enroll to unlock all 13 lessons', '🔒');
  } else {
    showToast(`🔒 Complete "${prev}" first`, '🔒');
  }
}

/* ── Go to lesson ── */
function goToLesson(idx) {
  window.location.href = `marketing-course-lms.html#course`;
}

/* ── Module tabs ── */
function filterModule(mod, btn) {
  document.querySelectorAll('.module-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  openIdx = null;
  renderAccordion(mod);
  // Re-observe new elements
  setTimeout(() => {
    document.querySelectorAll('.accordion-item.reveal:not(.visible)').forEach(el => revealObs.observe(el));
    document.querySelectorAll('.accordion-item.reveal').forEach(el => { el.classList.add('visible'); });
  }, 60);
}

/* ── Toast ── */
let toastTimer;
function showToast(msg, icon = 'ℹ️') {
  document.getElementById('toastMsg').textContent = msg;
  document.getElementById('toastIcon').textContent = icon;
  const t = document.getElementById('toast');
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
}

/* ── Scroll reveal ── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── Navbar scroll ── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.style.boxShadow = window.scrollY > 50 ? '0 4px 28px rgba(0,0,0,.28)' : 'none';
});

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  buildProgressUI();
  renderAccordion(0);
  // Auto-open first lesson
  setTimeout(() => {
    const first = document.getElementById('lesson-0');
    if (first) { first.classList.add('open'); openIdx = 0; }
  }, 400);
  // Observe accordion reveals after render
  setTimeout(() => {
    document.querySelectorAll('.accordion-item.reveal').forEach(el => {
      el.classList.add('visible');
      revealObs.observe(el);
    });
  }, 100);
});

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}