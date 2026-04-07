// JavaScript logic for hospital-elearning frontend

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  const menuToggle = document.getElementById('menu-toggle');
  
  // 1. Header scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle implementation
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    // Add logic to open a mobile dropdown menu overlay here.
    // For now, it just toggles the active state animation of the hamburger base.
    alert('모바일 메뉴 활성화 기능 - 추후 GNB 드롭다운과 연결됩니다.');
  });
  
  // 3. Smooth reveal on scroll - Intersection Observer logic
  const revealElements = document.querySelectorAll('.card, .board-box, .widget-box');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    revealObserver.observe(el);
  });
});
