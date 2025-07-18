const openBtn = document.querySelector(".open-hamburger");
const closeBtn = document.querySelector(".close-hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const dropdownBtns = document.querySelectorAll(".dropdown-btn");

// 햄버거 메뉴 열기
openBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

// 햄버거 메뉴 닫기
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");

  // 드롭다운 닫기
  dropdownBtns.forEach(btn => {
    btn.classList.remove("active");
    const dropdown = btn.nextElementSibling;
    if (dropdown && dropdown.classList.contains("dropdown-content")) {
      dropdown.style.maxHeight = null;
    }
  });
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

// 메뉴 클릭 시 active 클래스 부여
document.querySelectorAll('.mobile-nav a, .dropdown-btn, .dropdown-content li a').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.mobile-nav a, .dropdown-btn, .dropdown-content li a')
      .forEach(el => el.classList.remove('active'));
    item.classList.add('active');
  });
});
