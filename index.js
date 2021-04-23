const burgerIcon = document.querySelector(".burger-icon");
const navbar = document.querySelector(".navbar");

burgerIcon.addEventListener("click", function () {
  navbar.classList.toggle("navbar_active");
});

navbar.addEventListener("click", function () {
  navbar.classList.remove("navbar_active");
});