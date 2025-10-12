// ===== app.js =====
// JavaScript for Be Young Bros website
document.addEventListener('DOMContentLoaded', () => {
  // ===== GALLERY IMAGE ZOOM EFFECT =====
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    const isImg = el => el && el.classList && el.classList.contains('galleryimage');

    gallery.addEventListener('mouseover', (e) => { if (isImg(e.target)) e.target.classList.add('zoom'); });
    gallery.addEventListener('mouseout',  (e) => { if (isImg(e.target)) e.target.classList.remove('zoom'); });
    gallery.addEventListener('focusin',   (e) => { if (isImg(e.target)) e.target.classList.add('zoom'); });
    gallery.addEventListener('focusout',  (e) => { if (isImg(e.target)) e.target.classList.remove('zoom'); });
    gallery.querySelectorAll('.galleryimage').forEach(img => {
      if (!img.hasAttribute('tabindex')) img.setAttribute('tabindex', '0');
    });
    gallery.addEventListener('click', (e) => { if (isImg(e.target)) e.target.classList.toggle('zoom'); });
  }

  // ===== RAINBOW HOVER EFFECT FOR HERO TITLES =====
  document.querySelectorAll('.hero-title').forEach(title => {
    title.addEventListener('mouseenter', () => title.classList.add('rainbow'));
    title.addEventListener('mouseleave', () => title.classList.remove('rainbow'));
  });

  // ===== SIMPLE FRONT-END REGISTRATION HANDLER =====
  const form = document.getElementById('registrationForm');
  if (!form) return;

  const confirmBox = document.getElementById('reg-confirm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

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
