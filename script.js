// Simple active nav state
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Set first nav item as active on load
  if (navLinks.length > 0) {
    navLinks[0].classList.add("active");
  }
});
