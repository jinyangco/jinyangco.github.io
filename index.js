document.addEventListener('DOMContentLoaded', () => {
  const slideItems = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  let interval = setInterval(nextSlide, 4000);

  function goToSlide(index) {
    slideItems.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slideItems[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
  }

  function nextSlide() {
    goToSlide((currentIndex + 1) % slideItems.length);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      clearInterval(interval);
      let index = parseInt(e.target.getAttribute('data-index'));
      goToSlide(index);
      interval = setInterval(nextSlide, 4000);
    });
  });

  goToSlide(0);

  const cards = document.querySelectorAll('.card');
  const fadeElements = document.querySelectorAll('.fade-in');
  const isMobile = window.innerWidth <= 768;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        if (isMobile && entry.target.classList.contains('card')) {
          setTimeout(() => {
            entry.target.classList.add('show');
          }, index * 150);
        } else {
          entry.target.classList.add('show');
        }
      }
    });
  }, {
    threshold: 0.2
  });

  [...cards, ...fadeElements].forEach(el => observer.observe(el));

  const slider = document.querySelector('.slides');
  let startX = 0;
  let endX = 0;

  slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, false);

  slider.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        goToSlide((currentIndex - 1 + slideItems.length) % slideItems.length);
      } else {
        goToSlide((currentIndex + 1) % slideItems.length);
      }
      clearInterval(interval);
      interval = setInterval(nextSlide, 4000);
    }
  });
});

