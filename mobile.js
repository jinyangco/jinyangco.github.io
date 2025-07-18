
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");

  hamburger?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("active");
  });

  dropdownBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const content = btn.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
});
