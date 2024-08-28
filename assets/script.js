const hamburgerBtn = document.querySelector(".hamburger__btn");
const menuBar = document.querySelector(".menu__items");
const accordianButton = document.querySelectorAll(".accordion__title");
const accordionContent = document.querySelectorAll(".accordion__content");

// menubar mobile
hamburgerBtn.addEventListener("click", () => {
  menuBar.classList.toggle("open");
});

// accordion
accordianButton.forEach((item) => {
  item.addEventListener("click", () => {
    item.nextElementSibling.classList.toggle("show");
    item.classList.toggle("show");
  });
});
