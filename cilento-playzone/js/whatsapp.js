// whatsapp.js — float button show/hide logic

const waFloat   = document.getElementById('whatsapp-float');
const waLink    = waFloat?.querySelector('.wa-float-btn');
const contatti  = document.getElementById('contatti');

if (waFloat && contatti) {
  // ── Hide when the contact section is visible ───────────────────────────────
  // The contact section already has a WhatsApp button, so the float is redundant
  // while it's on screen. We hide it the moment any part of #contatti enters the
  // viewport, and restore it when the section leaves.

  const observer = new IntersectionObserver(
    ([entry]) => {
      const hidden = entry.isIntersecting;
      waFloat.classList.toggle('is-hidden', hidden);
      // Keep the link out of tab order when visually hidden
      if (waLink) waLink.tabIndex = hidden ? -1 : 0;
      waFloat.setAttribute('aria-hidden', hidden ? 'true' : 'false');
    },
    { threshold: 0.1 }
  );

  observer.observe(contatti);
}
