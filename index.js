// main.js

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

// 처음 표시
goToSlide(0);
