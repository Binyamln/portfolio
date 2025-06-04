// Mobile Menu Toggle
const menuBtn = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
  }
});

// Scroll Top Button
const scrollTop = document.querySelector('#scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollTop.classList.add('active');
  } else {
    scrollTop.classList.remove('active');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu after clicking
      menuBtn.classList.remove('fa-times');
      navbar.classList.remove('active');
    }
  });
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Initialize ScrollReveal
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '80px',
  duration: 1000,
  reset: true
});

// Reveal elements on scroll
sr.reveal('.hero-content', { delay: 200 });
sr.reveal('.resume-card', { interval: 200 });
sr.reveal('.contact-content', { delay: 200 }); 