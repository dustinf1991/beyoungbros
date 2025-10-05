// js/app.js
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;

  // Helper: is a gallery image?
  const isImg = el => el && el.classList && el.classList.contains('galleryimage');

  // Mouse hover (desktop)
  gallery.addEventListener('mouseover', (e) => {
    if (isImg(e.target)) e.target.classList.add('zoom');
  });

  gallery.addEventListener('mouseout', (e) => {
    if (isImg(e.target)) e.target.classList.remove('zoom');
  });

  // Keyboard accessibility
  gallery.addEventListener('focusin', (e) => {
    if (isImg(e.target)) e.target.classList.add('zoom');
  });

  gallery.addEventListener('focusout', (e) => {
    if (isImg(e.target)) e.target.classList.remove('zoom');
  });

  // Make images focusable by keyboard users
  gallery.querySelectorAll('.galleryimage').forEach(img => {
    if (!img.hasAttribute('tabindex')) img.setAttribute('tabindex', '0');
  });

  // Optional: tap/click toggles zoom on touch devices
  gallery.addEventListener('click', (e) => {
    if (!isImg(e.target)) return;
    e.target.classList.toggle('zoom');

    // Rainbow hover effect for all hero titles
    const heroTitles = document.querySelectorAll('.hero-title');

    heroTitles.forEach(title => {
        title.addEventListener('mouseenter', () => {
            title.classList.add('rainbow');   // add rainbow when hovered
  });

    title.addEventListener('mouseleave', () => {
        title.classList.remove('rainbow'); // remove rainbow when not hovered
  });
});

  });
});
