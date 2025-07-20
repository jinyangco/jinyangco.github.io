const openBtn = document.querySelector(".open-hamburger");
const closeBtn = document.querySelector(".close-hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const subDropdownBtns = document.querySelectorAll(".sub-dropdown-btn");

// 메뉴 열기
openBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

// 메뉴 닫기
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  closeAllMenus();
});

function closeAllMenus() {
  document.querySelectorAll(".dropdown-content, .sub-dropdown-content").forEach(el => el.classList.remove("open"));
  document.querySelectorAll(".dropdown-btn, .sub-dropdown-btn").forEach(el => el.classList.remove("active"));
}

function toggleMenu(btn, groupSelector) {
  const content = btn.nextElementSibling;
  const isOpen = content.classList.contains("open");

  // 같은 그룹의 다른 메뉴 닫기
  const parentUL = btn.closest("ul");
  if (parentUL) {
    parentUL.querySelectorAll(groupSelector).forEach(el => el.classList.remove("open"));
    parentUL.querySelectorAll(".dropdown-btn, .sub-dropdown-btn").forEach(el => el.classList.remove("active"));
  }

  if (!isOpen) {
    btn.classList.add("active");
    content.classList.add("open");
  }
}

// 상위 메뉴 토글
dropdownBtns.forEach(btn => {
  btn.addEventListener("click", () => toggleMenu(btn, ".dropdown-content"));
});

// 하위 메뉴 토글
subDropdownBtns.forEach(btn => {
  btn.addEventListener("click", () => toggleMenu(btn, ".sub-dropdown-content"));
});

// active 표시
const allMenuItems = document.querySelectorAll(
  '.mobile-nav a, .dropdown-btn, .sub-dropdown-btn'
);
allMenuItems.forEach(item => {
  item.addEventListener("click", () => {
    allMenuItems.forEach(el => el.classList.remove("active"));
    item.classList.add("active");
  });
});

// ✅ 화면 크기 변경 시 모바일 메뉴 강제 닫기
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    mobileMenu.classList.remove("active");
    closeAllMenus();  // 기존 함수 그대로 사용
  }
});
