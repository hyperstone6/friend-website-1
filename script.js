const navBtns = document.querySelectorAll("[data-nav-links]");
const story = document.querySelector(".story");
const parent = document.querySelector(".main-content");
const children = parent.children;

navBtns.forEach((navBtn) => {
  navBtn.addEventListener("click", (e) => {
    e.preventDefault();
    Array.from(children).forEach((child) => {
      if (Array.from(child.classList).includes(e.target.id)) {
        child.style.display = "block";
        setTimeout(() => {
          child.classList.add("fadeIn");
          child.classList.remove("fadeOut");
        }, 0);
      } else {
        child.classList.remove("fadeIn");
        child.classList.add("fadeOut");
        setTimeout(() => {
          child.style.display = "none";
        }, 1000);
      }
    });
  });
});

window.addEventListener("load", () => {
  Array.from(children).forEach((child) => {
    if (!Array.from(child.classList).includes("home")) {
      child.style.display = "none";
    }
  });
});
