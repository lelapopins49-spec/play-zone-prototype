# Cilento Playzone — Website Implementation Plan
Single-page · HTML/CSS/JS · Italian · Galaxy theme

---

## Design System

- **Colors:** Deep Space `#0B0A2A` · Cosmic Purple `#2A1A6E` · Galaxy Blue `#1A4FAA` · Brand Pink `#E8408A` · Neon Green `#3FE8A0` · Star Gold `#FFD93D` · White `#FFFFFF`
- **Heading font:** Fredoka One
- **Body font:** Nunito 400 · Nunito 600/700 for UI elements
- **Language:** Italian only
- **Build:** Plain HTML/CSS/JS · Claude Code in Antigravity IDE · Deploy to v0

---

## Page Structure (single-page, smooth-scroll)

Header → Hero → Feste di Compleanno → Animazione → Galleria → Testimonianze → Chi Siamo → Contatti → Footer

---

## File Structure

```
cilento-playzone/
│
├── index.html                  ← single HTML file, all sections live here
│
├── assets/
│   ├── fonts/                  ← if self-hosting fonts (optional)
│   ├── images/
│   │   ├── gallery/            ← the 9 photos go here
│   │   ├── logo/               ← logo SVG/PNG
│   │   └── hero/               ← any hero bg assets
│   └── icons/                  ← favicon, whatsapp icon, etc.
│
├── css/
│   ├── main.css                ← imports all other css files
│   ├── base/
│   │   ├── reset.css
│   │   ├── variables.css       ← all CSS custom properties
│   │   └── typography.css
│   ├── components/
│   │   ├── buttons.css
│   │   ├── navbar.css
│   │   ├── footer.css
│   │   ├── cookie-banner.css
│   │   └── whatsapp-float.css
│   └── sections/
│       ├── hero.css
│       ├── feste.css
│       ├── animazione.css
│       ├── gallery.css
│       ├── testimonials.css
│       └── contatti.css
│
└── js/
    ├── main.js                 ← imports/initialises everything
    ├── navbar.js               ← sticky nav + hamburger
    ├── gallery.js              ← lightbox logic
    ├── form.js                 ← form validation
    ├── cookie.js               ← GDPR banner logic
    └── whatsapp.js             ← float button show/hide logic
```

---

## Phase 1 — Design System Setup
> Tokens, fonts, variables — the foundation everything else builds on

- [x] Define CSS custom properties (colors, font sizes, spacing scale, border-radius)
- [x] Import Google Fonts — Fredoka One (headings) + Nunito (body/UI)
- [x] Create base reset & typography styles (html, body, h1–h4, p, a)
- [x] Build reusable button styles — Primary (pink), Secondary (green outline), Ghost (white outline)
- [x] Set up responsive breakpoints — mobile-first: 480px, 768px, 1024px, 1280px
- [ ] Recreate logo from screenshot — redraw CILENTO PLAYZONE wordmark + icon in SVG or CSS

---

## Phase 2 — Header & Navigation
> Sticky nav with smooth-scroll anchors to each section

- [x] Build sticky header bar — dark bg, logo left, nav links right, sticks on scroll
- [x] Add smooth-scroll anchor links (Hero, Feste, Animazione, Galleria, Testimonianze, Chi Siamo, Contatti)
- [x] Build mobile hamburger menu — slide-down nav for screens under 768px
- [x] Active section highlight on scroll — JS IntersectionObserver to highlight current nav item

---

## Phase 3 — Hero Section
> First impression — galaxy gradient, headline, CTA buttons

- [x] Build space gradient background — CSS radial + linear gradients: deep navy → purple → blue
- [x] Add decorative star elements — CSS/SVG scattered dots for starfield effect
- [x] Write Italian headline & subheadline — bold Fredoka One with pink/green highlights
- [x] Add primary CTA buttons — "Prenota la festa" (pink) + "Scopri di più" (green outline)
- [x] Add phone number display in hero — prominent, clickable tel: link

---

## Phase 4 — Content Sections
> Feste di Compleanno, Animazione, Chi Siamo — the core content

- [x] Build Feste di Compleanno section — feature cards: decorations, cake, entertainment, photos — Italian copy
- [x] Build Animazione section — services offered: face painting, games, characters — Italian copy
- [x] Build Chi Siamo section — about the business, team intro, Cilento location context
- [x] Style alternating section backgrounds — alternate #0B0A2A and #12103A for visual rhythm

---

## Phase 5 — Gallery Section
> 9 placeholder images, lightbox on click — swap real photos later

- [x] Build responsive photo grid — CSS grid, 3 cols desktop / 2 tablet / 1 mobile
- [x] Add 9 placeholder images — colored placeholder divs with icons, easy to swap for real photos
- [x] Implement lightbox on click — pure JS lightbox, opens fullscreen overlay with close button

---

## Phase 6 — Testimonials Section
> 3 generic Italian reviews with star ratings and names

- [x] Build testimonial card layout — 3 cards side by side, each with quote, stars, name, occasion
- [x] Write 3 generic Italian testimonials — realistic-sounding reviews from fictional parents
- [x] Add star rating display — 5-star gold icons using CSS or Unicode

---

## Phase 7 — Contact Section & Form
> Inquiry form, phone, WhatsApp — all contact channels

- [x] Build contact/inquiry form — fields: name, email, phone, date, message — Italian labels
- [x] Add form validation — client-side validation with Italian error messages
- [x] Add prominent phone number block — large, clickable 338 7299939 with icon
- [x] Add WhatsApp CTA button in contact section — wa.me link with pre-filled message
- [x] Style section with space theme — dark bg, glowing card effect for the form

---

## Phase 8 — Floating WhatsApp Button
> Always-visible fixed WhatsApp button in bottom-right corner

- [x] Build floating WhatsApp button — fixed bottom-right, green circle with WhatsApp icon
- [x] Add pulse animation — subtle ring animation to draw attention without being annoying
- [x] Link to wa.me with pre-filled message — "Ciao! Vorrei informazioni sulle feste..."
- [x] Hide/show on scroll logic — hide when contact section is visible (already has WA button there)

---

## Phase 9 — Footer
> Business info, links, social, copyright

- [x] Build footer layout — logo, nav links, contact info, social icons — dark bg
- [x] Add Instagram link — icon + handle, opens in new tab
- [x] Add copyright line — © 2025 Cilento Playzone · P.IVA placeholder
- [x] Add privacy policy link in footer — links to cookie/privacy section or modal

---

## Phase 10 — Cookie & Privacy Banner
> GDPR-compliant banner — required for Italian businesses with contact forms

- [ ] Build cookie consent banner — bottom banner: brief message, Accept + Decline buttons
- [ ] Store consent in localStorage — don't show again once user has chosen
- [ ] Write basic privacy policy text — Italian, covers form data collection — placeholder legal text
- [ ] Add privacy policy modal or section — triggered from footer link

---

## Phase 11 — SEO & Meta
> Meta tags, Open Graph, favicon — small effort, big payoff

- [ ] Write Italian meta title & description — ~60 char title, ~155 char description, include "Cilento", "ludoteca", "feste"
- [ ] Add Open Graph tags — og:title, og:description, og:image for WhatsApp/social sharing previews
- [ ] Add favicon — simple star or rocket icon, 32×32 ICO + 180×180 Apple touch icon
- [ ] Add structured data (JSON-LD) — LocalBusiness schema: name, address, phone, hours
- [ ] Set lang="it" on html tag — tells search engines and screen readers this is Italian content

---

## Phase 12 — QA, Polish & Deploy
> Test everything, fix issues, deploy to v0

- [ ] Mobile responsiveness check — test on 375px, 768px, 1024px, 1440px viewports
- [ ] Cross-browser test — Chrome, Safari, Firefox, especially iOS Safari
- [ ] Check all links and phone numbers — tel: links, wa.me, Instagram, nav anchors
- [ ] Optimize images — compress placeholder or real photos, target under 200kb each
- [ ] Check page load speed — Lighthouse audit, target 90+ performance score
- [ ] Swap placeholder gallery images for real photos — drop client photos in, adjust grid if needed
- [ ] Final copy review in Italian — check all text for typos, grammar, tone
- [ ] Deploy to v0 / hosting platform — upload files, verify live URL, test on real mobile device
- [ ] Share preview link with client — get feedback and sign-off before going live

---

*Plan created with Claude · Cilento Playzone prototype · 2025*
