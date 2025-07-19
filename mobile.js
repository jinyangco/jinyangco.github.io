
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
  closeAllDropdowns();
  closeAllSubDropdowns();
});

// 드롭다운 전체 닫기
function closeAllDropdowns() {
  dropdownBtns.forEach(btn => {
    btn.classList.remove("active");
    const dropdown = btn.nextElementSibling;
    if (dropdown && dropdown.classList.contains("dropdown-content")) {
      dropdown.style.maxHeight = null;
    }
  });
}

// 서브 드롭다운 전체 닫기
function closeAllSubDropdowns() {
  subDropdownBtns.forEach(btn => {
    btn.classList.remove("active");
    const subMenu = btn.nextElementSibling;
    if (subMenu && subMenu.classList.contains("sub-dropdown-content")) {
      subMenu.style.maxHeight = null;
    }
  });
}

// 드롭다운 토글
dropdownBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const dropdown = btn.nextElementSibling;
    const isActive = btn.classList.contains("active");

    if (isActive) {
      btn.classList.remove("active");
      if (dropdown && dropdown.classList.contains("dropdown-content")) {
        dropdown.style.maxHeight = null;
      }
    } else {
      closeAllDropdowns();
      btn.classList.add("active");
      if (dropdown && dropdown.classList.contains("dropdown-content")) {
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
      }
    }

    // 서브 드롭다운은 항상 닫음
    closeAllSubDropdowns();
  });
});

// 서브 드롭다운 토글
subDropdownBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const subMenu = btn.nextElementSibling;
    const isActive = btn.classList.contains("active");

    if (isActive) {
      btn.classList.remove("active");
      if (subMenu && subMenu.classList.contains("sub-dropdown-content")) {
        subMenu.style.maxHeight = null;
      }
    } else {
      closeAllSubDropdowns();
      btn.classList.add("active");
      if (subMenu && subMenu.classList.contains("sub-dropdown-content")) {
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    }
  });
});

// 메뉴 항목 클릭 시 active 표시
document.querySelectorAll('.mobile-nav a, .dropdown-btn, .sub-dropdown-btn, .dropdown-content li a, .sub-dropdown-content li a').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.mobile-nav a, .dropdown-btn, .sub-dropdown-btn, .dropdown-content li a, .sub-dropdown-content li a')
      .forEach(el => el.classList.remove('active'));
    item.classList.add('active');
  });
});
