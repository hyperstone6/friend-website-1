const navBtns = document.querySelectorAll("[data-nav-links]");
const parent = document.querySelector(".main-content");
const children = parent.children;

navBtns.forEach((navBtn) => {
  navBtn.addEventListener("click", (e) => {
    e.preventDefault();
    Array.from(children).forEach((child) => {
      if (!Array.from(child.classList).includes(e.target.id)) {
        setTimeout(() => {
          child.style.display = "none";
        }, 900);
        setTimeout(() => {
          child.classList.add("fadeOut");
          child.classList.remove("fadeIn");
        }, 0);
      } else {
        setTimeout(() => {
          child.style.display = "block";
        }, 900)
        setTimeout(() => {
          child.classList.remove("fadeOut");
          child.classList.add("fadeIn");
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
