document.addEventListener('DOMContentLoaded', () => {
  // ✅ 슬라이드 자동 넘기기
  const slideItems = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  let slideCount = dots.length;
  let interval = setInterval(nextSlide, 4000);

  function goToSlide(index) {
    slideItems.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slideItems[index].classList.add('active');
    dots[index].classList.add('active');

    currentIndex = index;
  }

  function nextSlide() {
    let nextIndex = (currentIndex + 1) % slideCount;
    goToSlide(nextIndex);
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

  // ✅ 등장 애니메이션
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

  // ✅ 터치 슬라이드 (모바일용)
  const slider = document.querySelector('.slides');
  let startX = 0;
  let endX = 0;

  slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, false);

  slider.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  }, false);

  function handleSwipe() {
    const deltaX = endX - startX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        let prevIndex = (currentIndex - 1 + slideCount) % slideCount;
        goToSlide(prevIndex);
      } else {
        let nextIndex = (currentIndex + 1) % slideCount;
        goToSlide(nextIndex);
      }

      clearInterval(interval);
      interval = setInterval(nextSlide, 4000);
    }
  }
});
