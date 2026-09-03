document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a, .mobile-menu-nav a').forEach((link) => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });

  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const yearNode = document.querySelector('[data-year]');
  if (yearNode) yearNode.textContent = new Date().getFullYear();

  document.querySelectorAll('form[data-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      let valid = true;
      form.querySelectorAll('[required]').forEach((field) => {
        const fieldWrap = field.closest('.form-field');
        const errorNode = fieldWrap ? fieldWrap.querySelector('.error-message') : null;
        const value = field.value.trim();

        if (!value) {
          valid = false;
          if (errorNode) errorNode.textContent = 'This field is required.';
          return;
        }

        if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          valid = false;
          if (errorNode) errorNode.textContent = 'Please enter a valid email address.';
          return;
        }

        if (errorNode) errorNode.textContent = '';
      });

      if (!valid) return;
      const successBox = form.parentElement.querySelector('.success-box');
      if (successBox) successBox.classList.add('show');
      form.reset();
    });
  });
});
