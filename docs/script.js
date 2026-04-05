// ── DATA ──────────────────────────────────────────────────────────────────
const LESSONS = [
  {
    title: "Marketing Fundamentals & The 4Ps Framework",
    duration: "24 min", category: "Foundation",
    content: `
      <h3>What is Marketing?</h3>
      <p>Marketing is the strategic process of identifying, anticipating, and satisfying customer needs profitably. It bridges the gap between what a business offers and what the market desires — creating value for both parties.</p>
      <h3>The Classic 4Ps</h3>
      <ul>
        <li><strong>Product:</strong> What you sell — features, quality, design, branding, and lifecycle management.</li>
        <li><strong>Price:</strong> The value exchange — pricing strategies include penetration, skimming, competitive, and value-based pricing.</li>
        <li><strong>Place:</strong> Distribution channels — where and how customers access your product (online, retail, direct).</li>
        <li><strong>Promotion:</strong> Communication — advertising, PR, social media, content marketing, and personal selling.</li>
      </ul>
      <h3>Modern Expansion: The 7Ps</h3>
      <p>Contemporary marketing extends the framework to include <em>People</em> (staff and culture), <em>Process</em> (the customer experience journey), and <em>Physical Evidence</em> (tangible proof of service quality).</p>
      <p>Understanding these pillars creates a foundation for every strategic decision you'll make in your marketing career.</p>
    `,
    quiz: {
      question: "What does the letter 'P' in the 4Ps framework that relates to communication and advertising stand for?",
      options: ["Pricing", "Promotion", "Position", "People"],
      correct: 1,
      explanation: "Correct! ✅ Promotion covers all communication strategies: advertising, PR, social media, and sales promotions."
    }
  },
  {
    title: "Understanding Your Target Audience & Buyer Personas",
    duration: "31 min", category: "Strategy",
    content: `
      <h3>Why Audience Research is Non-Negotiable</h3>
      <p>The biggest marketing mistake is trying to speak to everyone. When you target everyone, you resonate with no one. Deep audience understanding drives every effective campaign.</p>
      <h3>Building a Buyer Persona</h3>
      <p>A buyer persona is a semi-fictional representation of your ideal customer, built from real data and research. It includes demographics, psychographics, goals, pain points, and behavioral patterns.</p>
      <ul>
        <li><strong>Demographics:</strong> Age, gender, income, education, location</li>
        <li><strong>Psychographics:</strong> Values, interests, lifestyle, personality</li>
        <li><strong>Pain Points:</strong> What problems are they trying to solve?</li>
        <li><strong>Goals:</strong> What success looks like for them</li>
        <li><strong>Preferred Channels:</strong> Where they consume information</li>
      </ul>
      <h3>Research Methods</h3>
      <p>Use surveys, customer interviews, social listening, Google Analytics data, and CRM insights to validate your personas with real evidence rather than assumptions.</p>
    `,
    quiz: {
      question: "What is a 'buyer persona' in marketing?",
      options: ["A real customer profile from your CRM", "A semi-fictional representation of your ideal customer based on research", "A competitor analysis document", "A social media advertising format"],
      correct: 1,
      explanation: "Correct! ✅ A buyer persona is a research-backed, semi-fictional profile representing your ideal customer segment."
    }
  },
  {
    title: "Content Marketing Strategy & the Content Funnel",
    duration: "38 min", category: "Content",
    content: `
      <h3>Content as a Growth Engine</h3>
      <p>Content marketing is the art of creating valuable, relevant information that attracts and retains a clearly defined audience — driving profitable customer action without interrupting them.</p>
      <h3>The Three-Stage Content Funnel</h3>
      <ul>
        <li><strong>Top of Funnel (TOFU) — Awareness:</strong> Blog posts, social content, podcasts, YouTube videos that introduce your brand</li>
        <li><strong>Middle of Funnel (MOFU) — Consideration:</strong> Webinars, case studies, email sequences, comparison guides</li>
        <li><strong>Bottom of Funnel (BOFU) — Decision:</strong> Free trials, demos, testimonials, detailed product pages</li>
      </ul>
      <h3>The Pillar-Cluster Model</h3>
      <p>Modern SEO-driven content strategy uses topic clusters: one comprehensive pillar page covers a broad topic, while cluster pages dive into specific subtopics — all linking back to the pillar. This builds topical authority and search rankings simultaneously.</p>
    `,
    quiz: {
      question: "In content marketing, what is the primary purpose of Top-of-Funnel (TOFU) content?",
      options: ["To convert visitors into paying customers", "To build brand awareness and attract new audiences", "To retain existing customers", "To generate direct revenue through upsells"],
      correct: 1,
      explanation: "Correct! ✅ TOFU content focuses on awareness — reaching new audiences and introducing them to your brand without direct selling."
    }
  },
  {
    title: "SEO Mastery: Organic Search Dominance",
    duration: "45 min", category: "SEO",
    content: `
      <h3>Search Engine Optimization Fundamentals</h3>
      <p>SEO is the practice of optimizing your online presence to rank higher in search engine results pages (SERPs) for relevant queries — driving organic, high-intent traffic to your site.</p>
      <h3>The Three Pillars of SEO</h3>
      <ul>
        <li><strong>Technical SEO:</strong> Site speed, mobile optimization, crawlability, structured data, Core Web Vitals</li>
        <li><strong>On-Page SEO:</strong> Keyword research, content quality, title tags, meta descriptions, internal linking</li>
        <li><strong>Off-Page SEO:</strong> Backlink acquisition, domain authority building, brand mentions, social signals</li>
      </ul>
      <h3>Keyword Strategy</h3>
      <p>Effective keyword research balances search volume with competition (keyword difficulty). Prioritize long-tail keywords — phrases of 3+ words — as they have lower competition, higher intent, and better conversion rates despite lower search volume.</p>
      <p>Tools like Ahrefs, SEMrush, and Google Search Console are essential for data-driven keyword planning.</p>
    `,
    quiz: {
      question: "What are 'long-tail keywords' and why are they valuable in SEO strategy?",
      options: ["Keywords with many letters that describe products in detail", "Specific, multi-word phrases with lower competition and higher purchase intent", "Keywords used exclusively in paid advertising campaigns", "Short keywords that have the highest monthly search volume"],
      correct: 1,
      explanation: "Correct! ✅ Long-tail keywords are specific 3+ word phrases — lower competition, but higher intent which leads to better conversion rates."
    }
  },
  {
    title: "Social Media Marketing & Platform Algorithms",
    duration: "42 min", category: "Social",
    content: `
      <h3>Choosing Your Platforms Strategically</h3>
      <p>Not every social platform suits every business. Platform selection should be driven by where your target audience spends time, not where you feel comfortable or where competitors are.</p>
      <h3>Platform Deep-Dive</h3>
      <ul>
        <li><strong>LinkedIn:</strong> B2B, professionals, thought leadership — highest ROI for B2B companies</li>
        <li><strong>Instagram/TikTok:</strong> Visual, lifestyle, youth demographics — storytelling through short-form video dominates</li>
        <li><strong>Facebook:</strong> Broad demographics, community groups, advertising ecosystem still unmatched in targeting</li>
        <li><strong>X (Twitter):</strong> Real-time conversation, news, tech, and finance communities</li>
        <li><strong>YouTube:</strong> Long-form education and entertainment — second largest search engine globally</li>
      </ul>
      <h3>Cracking the Algorithm</h3>
      <p>Algorithms prioritize content that generates <em>meaningful interactions</em> — comments, shares, saves, and replies outweigh passive likes. Posting consistently, engaging authentically, and using native formats (Reels, Shorts, Stories) maximizes organic reach.</p>
    `,
    quiz: {
      question: "Which type of social media engagement signals are most valued by platform algorithms?",
      options: ["Impressions and views only", "Follower count milestones", "Comments, shares, saves, and replies (meaningful interactions)", "Paid promotion metrics"],
      correct: 2,
      explanation: "Correct! ✅ Algorithms reward meaningful interactions — comments, shares, saves — as these signal genuine audience engagement."
    }
  },
  {
    title: "Email Marketing & Automation Sequences",
    duration: "36 min", category: "Email",
    content: `
      <h3>Email: The Highest-ROI Channel</h3>
      <p>Email marketing consistently delivers the highest ROI of any digital channel — averaging $42 for every $1 spent. Unlike social media, you own your email list — it's an asset no algorithm can take away.</p>
      <h3>The Five Essential Email Sequences</h3>
      <ul>
        <li><strong>Welcome Series:</strong> First impressions — onboard new subscribers and set expectations</li>
        <li><strong>Nurture Sequence:</strong> Build relationship and trust over time with value-first content</li>
        <li><strong>Promotional Campaign:</strong> Drive sales with urgency, offers, and clear CTAs</li>
        <li><strong>Abandoned Cart:</strong> Recover lost revenue — typically 3 emails over 72 hours</li>
        <li><strong>Re-engagement Campaign:</strong> Win back inactive subscribers before removing them</li>
      </ul>
      <h3>Deliverability & Open Rates</h3>
      <p>Subject lines determine whether emails get opened. Best practices: 40–60 characters, personalization tokens, avoiding spam trigger words, and A/B testing subject line variants. Aim for >25% open rates in your industry benchmarks.</p>
    `,
    quiz: {
      question: "What is the average ROI figure commonly cited for email marketing?",
      options: ["$10 for every $1 spent", "$42 for every $1 spent", "$5 for every $1 spent", "$100 for every $1 spent"],
      correct: 1,
      explanation: "Correct! ✅ Email marketing averages approximately $42 ROI per $1 invested — making it the highest-ROI digital marketing channel."
    }
  },
  {
    title: "Paid Advertising: Google Ads & Meta Ads Mastery",
    duration: "52 min", category: "Paid Media",
    content: `
      <h3>The Paid Advertising Landscape</h3>
      <p>Paid advertising accelerates growth by placing your message in front of high-intent or perfectly targeted audiences. It complements organic strategies by providing immediate, measurable reach.</p>
      <h3>Google Ads (Search Intent)</h3>
      <p>Google Ads captures demand — targeting users actively searching for your product. Key metrics include Quality Score (relevance of ad + landing page), CPC (cost per click), CTR (click-through rate), and ROAS (return on ad spend).</p>
      <ul>
        <li>Search Campaigns: Text ads triggered by keywords</li>
        <li>Display Campaigns: Visual banner ads across the Google network</li>
        <li>Shopping Campaigns: Product listing ads for e-commerce</li>
        <li>YouTube Ads: Video advertising at scale</li>
      </ul>
      <h3>Meta Ads (Interest & Behavior Targeting)</h3>
      <p>Meta creates demand by reaching users who match your ideal customer profile. Leverage Lookalike Audiences to find new customers who resemble your best existing ones. The Meta Pixel tracks conversions for retargeting and optimization.</p>
    `,
    quiz: {
      question: "What does ROAS stand for in paid advertising, and what does it measure?",
      options: ["Return on Ad Spend — revenue generated per dollar of ad spend", "Rate of Audience Size — growth of your ad reach", "Reach of Ad Sources — total impressions divided by budget", "Revenue Over Ad Sales — total sales volume from campaigns"],
      correct: 0,
      explanation: "Correct! ✅ ROAS = Return on Ad Spend. It measures how much revenue you generate for every dollar invested in advertising."
    }
  },
  {
    title: "Brand Strategy, Positioning & Storytelling",
    duration: "33 min", category: "Branding",
    content: `
      <h3>What Makes a Brand Powerful?</h3>
      <p>A brand is not a logo — it is the sum of perceptions, emotions, and associations your audience holds about your organization. The strongest brands stand for something beyond their product category.</p>
      <h3>Positioning: Owning a Space in the Mind</h3>
      <p>Positioning defines how your brand is perceived relative to competitors. Effective positioning answers: "For [target audience], [brand] is the [category] that [unique benefit] because [reason to believe]."</p>
      <h3>The Brand Narrative Framework</h3>
      <ul>
        <li><strong>The Problem:</strong> What challenge does your audience face?</li>
        <li><strong>The Villain:</strong> What is making their life harder? (status quo, competitor, old way)</li>
        <li><strong>The Guide:</strong> Your brand as the trusted expert (not the hero)</li>
        <li><strong>The Plan:</strong> The simple path to transformation your brand provides</li>
        <li><strong>The Transformation:</strong> The new reality your customer achieves</li>
      </ul>
      <p>Note: Your customer is the hero of the story — your brand is their guide (think Yoda, not Luke).</p>
    `,
    quiz: {
      question: "In the Brand Narrative Framework, what role should your brand play in the customer's story?",
      options: ["The Hero who solves all problems", "The Villain creating tension and conflict", "The Guide who helps the customer (hero) succeed", "The Sidekick who supports quietly"],
      correct: 2,
      explanation: "Correct! ✅ Your brand should be the Guide (like Yoda or Gandalf) — empowering the customer (the Hero) to achieve their transformation."
    }
  },
  {
    title: "Data Analytics, KPIs & Marketing Attribution",
    duration: "40 min", category: "Analytics",
    content: `
      <h3>Marketing Without Data is Just Art</h3>
      <p>Data-driven marketing removes guesswork. By establishing clear KPIs and attribution models, you can identify which activities drive growth and optimize spend with precision.</p>
      <h3>Essential Marketing KPIs</h3>
      <ul>
        <li><strong>CAC (Customer Acquisition Cost):</strong> Total marketing spend ÷ new customers acquired</li>
        <li><strong>LTV (Lifetime Value):</strong> Average revenue a customer generates over the entire relationship</li>
        <li><strong>LTV:CAC Ratio:</strong> Should be ≥ 3:1 for a healthy, scalable business</li>
        <li><strong>Conversion Rate:</strong> Percentage of visitors who complete desired action</li>
        <li><strong>NPS (Net Promoter Score):</strong> Measure of customer loyalty and satisfaction</li>
      </ul>
      <h3>Attribution Models</h3>
      <p>Attribution determines which touchpoint gets credit for a conversion. Models include: Last-click (100% credit to final touchpoint), First-click (credit to discovery), Linear (equal credit all touchpoints), Time-decay, and Data-driven attribution using machine learning.</p>
    `,
    quiz: {
      question: "What does a healthy LTV:CAC ratio indicate in marketing analytics?",
      options: ["The business is spending more on advertising than earning from it", "The customer lifetime value is at least 3x the cost of acquiring them", "The conversion rate is above 10%", "Social media is driving more traffic than paid ads"],
      correct: 1,
      explanation: "Correct! ✅ A healthy LTV:CAC ratio is ≥ 3:1 — meaning each customer generates at least 3x what it cost to acquire them."
    }
  },
  {
    title: "Conversion Rate Optimization (CRO) & Landing Pages",
    duration: "37 min", category: "CRO",
    content: `
      <h3>CRO: Getting More From What You Have</h3>
      <p>Conversion Rate Optimization is the systematic process of increasing the percentage of visitors who take a desired action. CRO compounds every other marketing effort — doubling your conversion rate effectively halves your acquisition costs.</p>
      <h3>The Psychology of Conversion</h3>
      <ul>
        <li><strong>Clarity:</strong> A confused mind never buys. Your value proposition must be understood in 5 seconds.</li>
        <li><strong>Social Proof:</strong> Testimonials, reviews, case studies, and client logos reduce perceived risk</li>
        <li><strong>Urgency & Scarcity:</strong> Limited-time offers create action (use ethically)</li>
        <li><strong>Trust Signals:</strong> SSL badges, guarantees, refund policies, and media mentions</li>
        <li><strong>Friction Reduction:</strong> Remove every unnecessary form field, click, and barrier</li>
      </ul>
      <h3>A/B Testing Protocol</h3>
      <p>Effective A/B testing: 1) Form a hypothesis, 2) Change ONE element at a time, 3) Run until statistical significance (95% confidence, ~1,000 visitors per variant), 4) Implement winner, 5) Repeat. Popular tools include Google Optimize, Optimizely, and VWO.</p>
    `,
    quiz: {
      question: "In A/B testing best practices, how many elements should you change between variants at one time?",
      options: ["As many as possible for faster results", "At least three elements simultaneously", "Only one element at a time to isolate variables", "Five elements — the standard practice"],
      correct: 2,
      explanation: "Correct! ✅ Change only one element per A/B test to accurately determine which specific change drove the performance difference."
    }
  },
  {
    title: "Influencer & Affiliate Marketing Ecosystems",
    duration: "29 min", category: "Partnerships",
    content: `
      <h3>The Power of Borrowed Audiences</h3>
      <p>Influencer and affiliate marketing leverage the trust that creators have built with their audiences. Instead of building reach from scratch, you tap into established communities with existing credibility.</p>
      <h3>Influencer Tier Strategy</h3>
      <ul>
        <li><strong>Mega (1M+):</strong> Maximum reach, lowest engagement rate, highest cost — best for brand awareness</li>
        <li><strong>Macro (100K–1M):</strong> Broad reach with moderate engagement</li>
        <li><strong>Micro (10K–100K):</strong> High engagement rates (5–8%), niche authority, cost-effective</li>
        <li><strong>Nano (1K–10K):</strong> Highest trust and engagement, very niche, community feel</li>
      </ul>
      <h3>Affiliate Program Design</h3>
      <p>Affiliate marketing is performance-based: affiliates earn commission (typically 5–30%) for sales they drive. Set up tracking via dedicated affiliate links, use platforms like PartnerStack, Impact, or ShareASale, and provide creative assets to empower your affiliates for success.</p>
    `,
    quiz: {
      question: "Which influencer tier typically generates the highest engagement rates relative to audience size?",
      options: ["Mega influencers (1M+ followers)", "Macro influencers (100K–1M followers)", "Micro influencers (10K–100K followers)", "Celebrity brand ambassadors"],
      correct: 2,
      explanation: "Correct! ✅ Micro-influencers (10K–100K) consistently achieve the highest engagement rates — often 5–8% — due to tighter community relationships."
    }
  },
  {
    title: "Marketing Automation & CRM Integration",
    duration: "44 min", category: "Automation",
    content: `
      <h3>Scale Without Sacrificing Personalization</h3>
      <p>Marketing automation enables you to deliver the right message to the right person at the right time — at scale. The goal is not to automate everything, but to automate repetitive, low-value tasks so your team focuses on strategy and creativity.</p>
      <h3>Core Automation Workflows</h3>
      <ul>
        <li><strong>Lead Scoring:</strong> Automatically rank leads by behavior (page visits, email opens, content downloads)</li>
        <li><strong>Drip Campaigns:</strong> Time-based email sequences triggered by user actions</li>
        <li><strong>Behavioral Triggers:</strong> Emails sent based on specific actions (abandoned cart, product view)</li>
        <li><strong>Lead Routing:</strong> Auto-assign high-score leads to sales reps based on territory or tier</li>
      </ul>
      <h3>CRM as the Single Source of Truth</h3>
      <p>A CRM (Customer Relationship Management) system centralizes all customer data, interactions, and pipeline stages. Platforms like HubSpot, Salesforce, and ActiveCampaign combine CRM with marketing automation for a unified growth engine. The marketing-sales alignment achieved through CRM integration is a key driver of revenue growth.</p>
    `,
    quiz: {
      question: "What is the primary purpose of 'lead scoring' in marketing automation?",
      options: ["To track social media engagement and follower growth", "To automatically rank leads by their behavior and likelihood to convert", "To calculate the monthly marketing budget allocation", "To measure the SEO ranking of individual web pages"],
      correct: 1,
      explanation: "Correct! ✅ Lead scoring automatically ranks prospects by engagement behavior to help sales teams prioritize their highest-value leads."
    }
  },
  {
    title: "Building a Full-Stack Marketing Strategy & Career Roadmap",
    duration: "55 min", category: "Capstone",
    content: `
      <h3>Bringing It All Together</h3>
      <p>Congratulations — you've reached the final module. Now it's time to synthesize everything into a cohesive, integrated marketing strategy that compounds across every channel you've mastered.</p>
      <h3>The Integrated Marketing Framework (IMF)</h3>
      <ul>
        <li><strong>Foundation:</strong> Deep audience research, clear brand positioning, defined KPIs</li>
        <li><strong>Acquisition:</strong> SEO, paid media, social media, and influencer partnerships working in concert</li>
        <li><strong>Activation:</strong> Optimized landing pages, compelling offers, frictionless onboarding</li>
        <li><strong>Retention:</strong> Email automation, loyalty programs, community building, exceptional service</li>
        <li><strong>Revenue:</strong> Upsells, cross-sells, referral programs, and LTV maximization</li>
        <li><strong>Referral:</strong> Turning customers into brand advocates through NPS and referral mechanics</li>
      </ul>
      <h3>Your Marketing Career Roadmap</h3>
      <p>The most valuable marketers of the next decade are T-shaped: broad knowledge across all disciplines with deep expertise in 1–2 areas. Specialize in either performance marketing, content strategy, brand, or marketing technology — while maintaining fluency across the full stack. Build your portfolio with real campaigns, document results with data, and share your knowledge publicly to build your personal brand.</p>
      <p>You now possess the complete foundation to excel in any marketing role, launch campaigns, or build your own brand. The next step is execution. Go make an impact. 🚀</p>
    `,
    quiz: {
      question: "What does it mean to be a 'T-shaped' marketer in the modern landscape?",
      options: ["A marketer who only specializes in one technical skill deeply", "A marketer with broad knowledge across disciplines AND deep expertise in 1–2 specific areas", "A marketer who focuses exclusively on traditional (offline) channels", "A marketer who manages teams in a top-down hierarchy"],
      correct: 1,
      explanation: "Perfect! 🏆 A T-shaped marketer has broad marketing literacy (the horizontal bar) with deep expertise in 1–2 disciplines (the vertical bar) — the most valuable profile in today's market."
    }
  }
];
 
// ── STATE ─────────────────────────────────────────────────────────────────
let state = {
  registered: false,
  paid: false,
  currentLesson: 0,
  completedLessons: [],
  selectedPlan: 'premium',
  selectedOption: null,
  quizAnswered: false,
  studentName: ''
};
 
// Persist across refresh
function saveState() {
  localStorage.setItem('mmCourseState', JSON.stringify(state));
}
function loadState() {
  const saved = localStorage.getItem('mmCourseState');
  if (saved) {
    try { state = { ...state, ...JSON.parse(saved) }; } catch(e) {}
  }
}
 
// ── INIT ──────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  renderLessons();
  updateProgress();
  if (state.paid) {
    document.getElementById('lockBanner').style.display = 'none';
    document.getElementById('progressSection').style.display = 'block';
    showSuccessStep();
  }
  // Card number formatter
  const cardInput = document.getElementById('card-num');
  if (cardInput) {
    cardInput.addEventListener('input', e => {
      let v = e.target.value.replace(/\D/g,'');
      v = v.replace(/(.{4})/g,'$1 ').trim();
      e.target.value = v;
    });
  }
});
 
// ── RENDER LESSONS ────────────────────────────────────────────────────────
function renderLessons() {
  const grid = document.getElementById('lessonsGrid');
  grid.innerHTML = '';
  LESSONS.forEach((lesson, i) => {
    const isCompleted = state.completedLessons.includes(i);
    const isUnlocked = state.paid && (i === 0 || state.completedLessons.includes(i - 1));
    const isActive = state.paid && isUnlocked && !isCompleted;
    const isLocked = !state.paid || (!isUnlocked && !isCompleted);
 
    let statusClass = isLocked ? 'locked-card-lesson' : (isCompleted ? 'completed-card' : (isActive ? 'active-card' : ''));
    let badge = isLocked ? `<span class="lesson-badge badge-locked">🔒 Locked</span>` :
                isCompleted ? `<span class="lesson-badge badge-completed">✓ Done</span>` :
                isActive ? `<span class="lesson-badge badge-active">▶ Active</span>` :
                `<span class="lesson-badge badge-unlocked">◦ Unlocked</span>`;
    let numContent = isCompleted ? '✓' : (i + 1);
    
    const card = document.createElement('div');
    card.className = `lesson-card ${statusClass}`;
    card.innerHTML = `
      <div class="lesson-num">${numContent}</div>
      <div class="lesson-info">
        <div class="lesson-title-text">Lesson ${i+1}: ${lesson.title}</div>
        <div class="lesson-meta"><span>⏱ ${lesson.duration}</span><span>📂 ${lesson.category}</span></div>
      </div>
      ${badge}
    `;
    if (!isLocked) {
      card.onclick = () => openLesson(i);
    } else {
      card.onclick = () => {
        if (!state.paid) showToast('🔒 Complete enrollment to unlock lessons', '🔒');
        else showToast('🔒 Complete previous lessons first', '🔒');
      };
    }
    grid.appendChild(card);
  });
}
 
// ── OPEN / CLOSE LESSON ───────────────────────────────────────────────────
function openLesson(index) {
  if (!state.paid) { showToast('🔒 Enroll first to access lessons', '🔒'); return; }
  const canAccess = index === 0 || state.completedLessons.includes(index - 1);
  if (!canAccess) { showToast('🔒 Complete the previous lesson first!', '🔒'); return; }
 
  state.currentLesson = index;
  state.selectedOption = null;
  state.quizAnswered = false;
 
  const lesson = LESSONS[index];
  const viewer = document.getElementById('lesson-viewer');
  document.getElementById('viewerBadge').textContent = `Lesson ${index + 1} · ${lesson.category}`;
  document.getElementById('viewerTitle').textContent = lesson.title;
  document.getElementById('viewerContent').innerHTML = lesson.content;
  document.getElementById('quizQuestion').textContent = lesson.quiz.question;
 
  // Build options
  const optContainer = document.getElementById('quizOptions');
  optContainer.innerHTML = '';
  lesson.quiz.options.forEach((opt, i) => {
    const div = document.createElement('div');
    div.className = 'quiz-option';
    div.innerHTML = `<div class="option-dot">${String.fromCharCode(65+i)}</div><span>${opt}</span>`;
    div.onclick = () => selectOption(i, div);
    optContainer.appendChild(div);
  });
 
  // Reset quiz state
  document.getElementById('quizFeedback').className = 'quiz-feedback';
  document.getElementById('quizFeedback').textContent = '';
  const submitBtn = document.getElementById('quizSubmit');
  submitBtn.disabled = true;
  submitBtn.style.display = 'inline-flex';
  document.getElementById('quizNext').style.display = 'none';
 
  // If already completed, show completed state
  if (state.completedLessons.includes(index)) {
    submitBtn.style.display = 'none';
    document.getElementById('quizFeedback').className = 'quiz-feedback success';
    document.getElementById('quizFeedback').textContent = '✅ You have already completed this lesson!';
    document.getElementById('quizNext').style.display = index < LESSONS.length - 1 ? 'inline-flex' : 'none';
    // Highlight correct answer
    const opts = optContainer.querySelectorAll('.quiz-option');
    opts[lesson.quiz.correct].classList.add('correct');
    opts[lesson.quiz.correct].querySelector('.option-dot').textContent = '✓';
  }
 
  viewer.style.display = 'block';
  document.body.style.overflow = 'hidden';
  viewer.scrollTo(0, 0);
}
 
function closeLesson() {
  document.getElementById('lesson-viewer').style.display = 'none';
  document.body.style.overflow = '';
  renderLessons();
  updateProgress();
}
 
// ── QUIZ LOGIC ─────────────────────────────────────────────────────────────
function selectOption(index, el) {
  if (state.quizAnswered) return;
  state.selectedOption = index;
  document.querySelectorAll('.quiz-option').forEach(o => {
    o.classList.remove('selected');
    o.querySelector('.option-dot').textContent = o.querySelector('.option-dot').dataset.letter || o.querySelector('.option-dot').textContent;
  });
  el.classList.add('selected');
  const letter = el.querySelector('.option-dot').textContent;
  el.querySelector('.option-dot').textContent = '●';
  document.getElementById('quizSubmit').disabled = false;
}
 
function submitQuiz() {
  if (state.selectedOption === null || state.quizAnswered) return;
  const lesson = LESSONS[state.currentLesson];
  const isCorrect = state.selectedOption === lesson.quiz.correct;
  const opts = document.querySelectorAll('.quiz-option');
  state.quizAnswered = true;
 
  opts.forEach((opt, i) => {
    opt.onclick = null;
    if (i === lesson.quiz.correct) {
      opt.classList.remove('selected');
      opt.classList.add('correct');
      opt.querySelector('.option-dot').textContent = '✓';
    } else if (i === state.selectedOption && !isCorrect) {
      opt.classList.remove('selected');
      opt.classList.add('wrong');
      opt.querySelector('.option-dot').textContent = '✗';
    }
  });
 
  const feedback = document.getElementById('quizFeedback');
  if (isCorrect) {
    feedback.className = 'quiz-feedback success';
    feedback.textContent = lesson.quiz.explanation;
    document.getElementById('quizSubmit').style.display = 'none';
    // Mark lesson complete
    if (!state.completedLessons.includes(state.currentLesson)) {
      state.completedLessons.push(state.currentLesson);
      saveState();
    }
    if (state.currentLesson === LESSONS.length - 1) {
      setTimeout(() => document.getElementById('completionModal').classList.add('active'), 1000);
      document.getElementById('quizNext').style.display = 'none';
    } else {
      document.getElementById('quizNext').style.display = 'inline-flex';
    }
    showToast('✅ Correct! Lesson unlocked next.', '🎉');
  } else {
    feedback.className = 'quiz-feedback error';
    feedback.textContent = '❌ Not quite. Review the lesson material and try again!';
    document.getElementById('quizSubmit').style.display = 'none';
    const retryBtn = document.createElement('button');
    retryBtn.className = 'quiz-submit';
    retryBtn.textContent = '↺ Try Again';
    retryBtn.onclick = resetQuiz;
    document.querySelector('.quiz-buttons').prepend(retryBtn);
  }
}
 
function resetQuiz() {
  const lesson = LESSONS[state.currentLesson];
  state.selectedOption = null;
  state.quizAnswered = false;
  const optContainer = document.getElementById('quizOptions');
  optContainer.innerHTML = '';
  lesson.quiz.options.forEach((opt, i) => {
    const div = document.createElement('div');
    div.className = 'quiz-option';
    div.innerHTML = `<div class="option-dot">${String.fromCharCode(65+i)}</div><span>${opt}</span>`;
    div.onclick = () => selectOption(i, div);
    optContainer.appendChild(div);
  });
  document.getElementById('quizFeedback').className = 'quiz-feedback';
  document.getElementById('quizFeedback').textContent = '';
  document.getElementById('quizSubmit').disabled = true;
  document.getElementById('quizSubmit').style.display = 'inline-flex';
  const retryBtn = document.querySelector('.quiz-buttons .quiz-submit[textContent="↺ Try Again"]');
  // Remove old retry buttons
  document.querySelectorAll('.quiz-buttons button').forEach(b => {
    if (b.textContent.includes('↺') || b.id === 'quizSubmit') {} else b.remove();
  });
  document.querySelectorAll('.quiz-buttons').forEach(qb => {
    qb.querySelectorAll('button:not(#quizSubmit):not(#quizNext)').forEach(b => b.remove());
  });
}
 
function nextLesson() {
  const next = state.currentLesson + 1;
  if (next < LESSONS.length) openLesson(next);
  else closeLesson();
}
 
// ── PROGRESS ──────────────────────────────────────────────────────────────
function updateProgress() {
  const pct = Math.round((state.completedLessons.length / LESSONS.length) * 100);
  document.getElementById('progressPct').textContent = pct + '%';
  document.getElementById('progressFill').style.width = pct + '%';
  
  // Dots
  const dotsEl = document.getElementById('progressDots');
  dotsEl.innerHTML = '';
  LESSONS.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'progress-dot';
    if (state.completedLessons.includes(i)) dot.classList.add('done');
    else if (state.paid && (i === 0 || state.completedLessons.includes(i - 1))) dot.classList.add('current');
    dotsEl.appendChild(dot);
  });
}
 
// ── REGISTRATION FLOW ─────────────────────────────────────────────────────
function goToPayment() {
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const phone = document.getElementById('reg-phone').value.trim();
  const age = document.getElementById('reg-age').value.trim();
  
  if (!name || !email || !phone || !age) {
    showToast('⚠️ Please fill in all fields to continue', '⚠️');
    return;
  }
  if (!email.includes('@') || !email.includes('.')) {
    showToast('⚠️ Please enter a valid email address', '⚠️');
    return;
  }
  if (parseInt(age) < 16 || parseInt(age) > 80) {
    showToast('⚠️ Please enter a valid age (16–80)', '⚠️');
    return;
  }
  
  state.studentName = name;
  document.getElementById('reg-step').style.display = 'none';
  document.getElementById('payment-step').style.display = 'block';
  selectPlan('premium');
}
 
function selectPlan(plan) {
  state.selectedPlan = plan;
  document.querySelectorAll('.plan-card').forEach(c => c.classList.remove('selected'));
  document.getElementById(`plan-${plan}`).classList.add('selected');
}
 
function processPayment() {
  const cardNum = document.getElementById('card-num').value.replace(/\s/g,'');
  const exp = document.getElementById('card-exp').value.trim();
  const cvv = document.getElementById('card-cvv').value.trim();
  
  if (cardNum.length < 16 || !exp || cvv.length < 3) {
    showToast('⚠️ Please enter valid payment details', '⚠️');
    return;
  }
  
  // Simulate payment processing
  const btn = document.querySelector('#payment-step .btn-full');
  btn.textContent = '⏳ Processing...';
  btn.disabled = true;
  
  setTimeout(() => {
    state.registered = true;
    state.paid = true;
    saveState();
    showSuccessStep();
    document.getElementById('lockBanner').style.display = 'none';
    document.getElementById('progressSection').style.display = 'block';
    renderLessons();
    updateProgress();
    showToast('🎉 Payment successful! Welcome to MasterMind!', '🎉');
  }, 1800);
}
 
function showSuccessStep() {
  document.getElementById('reg-step').style.display = 'none';
  document.getElementById('payment-step').style.display = 'none';
  document.getElementById('success-step').style.display = 'block';
  document.getElementById('welcome-name').textContent = state.studentName || 'there';
}
 
function startCourse() {
  document.getElementById('course').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => openLesson(0), 600);
}
 
// ── UTILITY ───────────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg, icon = 'ℹ️') {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  document.getElementById('toastIcon').textContent = icon;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}
 
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
 
function scrollToCourse() {
  document.getElementById('course').scrollIntoView({ behavior: 'smooth' });
}
 
// Navbar scroll effect
