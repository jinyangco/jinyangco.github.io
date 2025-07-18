// mobile.js
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const dropdownBtns = document.querySelectorAll(".dropdown-btn");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");

  // 메뉴 닫을 때 드롭다운도 모두 닫음
  if (!mobileMenu.classList.contains("active")) {
    dropdownBtns.forEach(btn => {
      btn.classList.remove("active");
      const dropdown = btn.nextElementSibling;
      if (dropdown && dropdown.classList.contains("dropdown-content")) {
        dropdown.style.maxHeight = null;
      }
    });
  }
});

// 드롭다운 버튼 토글
dropdownBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const dropdown = btn.nextElementSibling;
    if (dropdown && dropdown.classList.contains("dropdown-content")) {
      dropdown.style.maxHeight = btn.classList.contains("active")
        ? dropdown.scrollHeight + "px"
        : null;
    }
  });
});

// 메뉴 클릭 시 active 클래스 유지 (굵은 글씨)
document.querySelectorAll('.mobile-nav a, .dropdown-btn, .dropdown-content li a').forEach(item => {
  item.addEventListener('click', () => {
    // 기존 active 전부 제거
    document.querySelectorAll('.mobile-nav a, .dropdown-btn, .dropdown-content li a')
      .forEach(el => el.classList.remove('active'));

    // 현재 클릭된 요소에 active 부여
    item.classList.add('active');
  });
});

const closeBtn = document.querySelector(".close-hamburger");

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");

  // 드롭다운도 닫기
  dropdownBtns.forEach(btn => {
    btn.classList.remove("active");
    const dropdown = btn.nextElementSibling;
    if (dropdown && dropdown.classList.contains("dropdown-content")) {
      dropdown.style.maxHeight = null;
    }
  });
});
