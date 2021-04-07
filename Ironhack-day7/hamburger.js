const hamburgerButton = document.getElementById("hamburger-button");
const navMenu = document.querySelector(".nav-menu-mobile");

hamburgerButton.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
