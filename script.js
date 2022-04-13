const navBtns = document.querySelectorAll("[data-nav-links]");
const cvBtn = document.querySelector("[data-download-cv]");
const parent = document.querySelector(".main-content");
const children = parent.children;

//Hide all pages except home
window.addEventListener("load", () => {
  Array.from(children).forEach((child) => {
    if (!Array.from(child.classList).includes("home")) {
      child.style.display = "none";
    }
  });
});

//Navigation function
navBtns.forEach((navBtn) => {
  navBtn.addEventListener("click", (e) => {
    e.preventDefault();
    Array.from(children).forEach((child) => {
      if (!Array.from(child.classList).includes(e.target.id)) {
        setTimeout(() => {
          child.style.display = "none";
        }, 1000);
        setTimeout(() => {
          child.classList.add("fadeOut");
          child.classList.remove("fadeIn");
        }, 0);
      } else {
        setTimeout(() => {
          child.style.display = "block";
        }, 900);
        setTimeout(() => {
          child.classList.remove("fadeOut");
          child.classList.add("fadeIn");
        }, 1000);
      }
    });
  });
});

//CV button function
cvBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

//Type effect
document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#element", {
    speed: 100,
    loop: false,
    strings: ["OPERATIONS MANAGER"],
    breakLines: false,
  }).go();
});