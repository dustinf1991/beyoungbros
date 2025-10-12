// ===== app.js =====
// JavaScript for Be Young Bros website
document.addEventListener('DOMContentLoaded', () => {
  // ===== GALLERY IMAGE ZOOM EFFECT =====
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    // Helper: is a gallery image?
    const isImg = el => el && el.classList && el.classList.contains('galleryimage');

    // Mouse hover (desktop)
    gallery.addEventListener('mouseover', (e) => {
      if (isImg(e.target)) e.target.classList.add('zoom');
    });

    gallery.addEventListener('mouseout', (e) => {
      if (isImg(e.target)) e.target.classList.remove('zoom');
    });

    // Keyboard accessibility...test
    gallery.addEventListener('focusin', (e) => {
      if (isImg(e.target)) e.target.classList.add('zoom');
    });

    gallery.addEventListener('focusout', (e) => {
      if (isImg(e.target)) e.target.classList.remove('zoom');
    });

    // Make images focusable by keyboard users...test
    gallery.querySelectorAll('.galleryimage').forEach(img => {
      if (!img.hasAttribute('tabindex')) img.setAttribute('tabindex', '0');
    });

    // Optional: tap/click toggles zoom on touch devices...test
    gallery.addEventListener('click', (e) => {
      if (isImg(e.target)) e.target.classList.toggle('zoom');
    });
  }

  // ===== RAINBOW HOVER EFFECT FOR HERO TITLES =====
  const heroTitles = document.querySelectorAll('.hero-title');
  heroTitles.forEach(title => {
    title.addEventListener('mouseenter', () => {
      title.classList.add('rainbow');   // add rainbow when hovered
    });

    title.addEventListener('mouseleave', () => {
      title.classList.remove('rainbow'); // remove rainbow when not hovered
    });
  });
  // ===== SIMPLE FRONT-END REGISTRATION HANDLER =====
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  if (!form) return; // only run on the registration page

  const confirmBox = document.getElementById('reg-confirm');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent page reload

    // Run HTML5 validation manually (since form has "novalidate")
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const fname = (document.getElementById('fname')?.value || '').trim();
    const lname = (document.getElementById('lname')?.value || '').trim();
    const interest = document.getElementById('interest')?.value || '';

    confirmBox.textContent =
      `Thanks, ${fname} ${lname}! Your registration for “${interest}” was submitted successfully.`;
    confirmBox.classList.remove('hidden');
    confirmBox.classList.add('show');

    form.reset();
    confirmBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
});
