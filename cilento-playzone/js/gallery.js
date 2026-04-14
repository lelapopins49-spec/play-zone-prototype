// gallery.js — lightbox logic

const galleryGrid  = document.getElementById('gallery-grid');
const lightbox     = document.getElementById('lightbox');
const lightboxMedia   = document.getElementById('lightbox-media');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose   = document.getElementById('lightbox-close');
const lightboxPrev    = document.getElementById('lightbox-prev');
const lightboxNext    = document.getElementById('lightbox-next');
const lightboxBackdrop = document.getElementById('lightbox-backdrop');

// Collect all gallery items in order
const items = Array.from(galleryGrid.querySelectorAll('.gallery-item'));
let currentIndex = 0;

// ── Helpers ─────────────────────────────────────────────────────────────────

function getItemContent(item) {
  // If the item has a real <img>, use that; otherwise clone the placeholder div
  const img = item.querySelector('img');
  if (img) {
    return { element: img.cloneNode(true), caption: img.alt || '' };
  }
  const placeholder = item.querySelector('.gallery-placeholder');
  const label = item.querySelector('.gallery-placeholder-label')?.textContent || '';
  return { element: placeholder.cloneNode(true), caption: label };
}

function renderItem(index) {
  const item = items[index];
  const { element, caption } = getItemContent(item);

  lightboxMedia.innerHTML = '';
  lightboxMedia.appendChild(element);
  lightboxCaption.textContent = caption;

  // Update arrow states
  lightboxPrev.disabled = index === 0;
  lightboxNext.disabled = index === items.length - 1;
  lightboxPrev.style.opacity = index === 0 ? '0.3' : '1';
  lightboxNext.style.opacity = index === items.length - 1 ? '0.3' : '1';
}

// ── Open / close ─────────────────────────────────────────────────────────────

function openLightbox(index) {
  currentIndex = index;
  renderItem(currentIndex);
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  // Return focus to the item that opened the lightbox
  items[currentIndex]?.focus();
}

function showPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    renderItem(currentIndex);
  }
}

function showNext() {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    renderItem(currentIndex);
  }
}

// ── Event listeners ───────────────────────────────────────────────────────────

// Open on grid item click
galleryGrid.addEventListener('click', (e) => {
  const item = e.target.closest('.gallery-item');
  if (!item) return;
  openLightbox(parseInt(item.dataset.index, 10));
});

// Close button
lightboxClose.addEventListener('click', closeLightbox);

// Close on backdrop click
lightboxBackdrop.addEventListener('click', closeLightbox);

// Prev / Next buttons
lightboxPrev.addEventListener('click', showPrev);
lightboxNext.addEventListener('click', showNext);

// Keyboard: ESC to close, arrow keys to navigate
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  showPrev();
  if (e.key === 'ArrowRight') showNext();
});
