const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── COUNTER ANIMATION ─────────────────────────────── */
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const isDecimal = el.getAttribute('data-decimal') === 'true';
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = isDecimal
      ? current.toFixed(0)
      : Math.floor(current).toLocaleString();
    if (current >= target) clearInterval(timer);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
      entry.target.classList.add('counted');
      entry.target.querySelectorAll('.counter').forEach(animateCounter);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(el => counterObserver.observe(el));
/* ── ACTIVE NAV LINK ───────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));

/* ── PARALLAX ON HERO ──────────────────────────────── */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const heroText = document.querySelector('.hero-text');
  if (heroText && scrollY < window.innerHeight) {
    heroText.style.transform = `translateY(${scrollY * 0.15}px)`;
  }
});

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}