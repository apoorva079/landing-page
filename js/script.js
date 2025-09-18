// Basic interactivity: mobile nav toggle, mobile dropdown toggles, contact form basic submit
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const body = document.body;

  // Toggle mobile nav
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    body.classList.toggle('nav-open');
  });

  // Mobile dropdown toggles
  const dropdownToggles = document.querySelectorAll('.has-dropdown > a');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // allow opening submenu on mobile without navigating
        const parent = toggle.parentElement;
        const isOpen = parent.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
      }
    });
  });

  // Close mobile nav if clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-inner') && body.classList.contains('nav-open')) {
      body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Simple contact form handling (client-side only)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('#name').value.trim();
      const email = contactForm.querySelector('#email').value.trim();
      const message = contactForm.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill all fields.');
        return;
      }

      // For now just show a success message (replace with real submission to backend later)
      alert('Thank you, ' + name + '! Your message was received (demo only).');
      contactForm.reset();
    });
  }

  // Set year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
