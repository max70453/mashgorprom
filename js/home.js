/* МАШГОРПРОМ — Главная страница */

document.addEventListener('DOMContentLoaded', () => {
  // Preloader
  const preload = document.querySelector('.preload');
  if (preload) {
    window.addEventListener('load', () => {
      preload.classList.add('hidden');
    });
    setTimeout(() => preload.classList.add('hidden'), 2000);
  }

  // Header scroll
  const header = document.querySelector('.site-header');
  if (header) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      if (scroll > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
      lastScroll = scroll;
    });
  }

  // Mobile nav
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      nav.classList.toggle('open');
      document.body.classList.toggle('nav-open');
    });
  }

  // Scroll to top
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    window.addEventListener('scroll', () => {
      scrollTop.classList.toggle('visible', window.scrollY > 400);
    });
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Hero slider
  if (document.querySelector('.hero-slider')) {
    new Swiper('.hero-slider', {
      loop: true,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { el: '.hero-pagination', clickable: true },
      navigation: {
        nextEl: '.hero-next',
        prevEl: '.hero-prev'
      }
    });
  }

  // Projects slider
  if (document.querySelector('.projects-slider')) {
    new Swiper('.projects-slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 24,
      navigation: {
        nextEl: '.projects-next',
        prevEl: '.projects-prev'
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }

  // Testimonials slider
  if (document.querySelector('.testimonials-slider')) {
    new Swiper('.testimonials-slider', {
      loop: true,
      autoplay: { delay: 4000, disableOnInteraction: false },
      pagination: { el: '.testimonials-pagination', clickable: true }
    });
  }

  // Newsletter form
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      if (input?.value) {
        alert('Спасибо за подписку!');
        input.value = '';
      }
    });
  }
});
