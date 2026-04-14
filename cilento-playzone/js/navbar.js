// navbar.js — sticky nav + hamburger + active section highlight

const header     = document.getElementById('header');
const hamburger  = document.getElementById('hamburger');
const mobileNav  = document.getElementById('mobile-nav');
const navLinks   = document.querySelectorAll('.nav-link[href^="#"]');

// ── Sticky header on scroll ──────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, { passive: true });

// ── Hamburger toggle ─────────────────────────────────────────────────────────
hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  mobileNav.setAttribute('aria-hidden', !isOpen);
});

// Close mobile nav when a link inside it is clicked
mobileNav.addEventListener('click', (e) => {
  if (e.target.matches('a')) {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
  }
});

// ── Active section highlight via IntersectionObserver ────────────────────────
const sectionIds = ['hero', 'feste', 'animazione', 'galleria', 'testimonianze', 'chi-siamo', 'contatti'];

const setActive = (id) => {
  navLinks.forEach((link) => {
    const matches = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('active', matches);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  },
  {
    // Trigger when section reaches the upper third of the viewport
    rootMargin: '-10% 0px -60% 0px',
    threshold: 0,
  }
);

sectionIds.forEach((id) => {
  const el = document.getElementById(id);
  if (el) observer.observe(el);
});
