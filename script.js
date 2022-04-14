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

//Carousel function
// const track = document.querySelector(".carousel__slides");
// const slides = Array.from(track.children);
// const nextButton = document.querySelector(".carousel__btn--right");
// const previousButton = document.querySelector(".carousel__btn--left");
// const navButtons = document.querySelector('.carousel__nav__buttons')
// const dots = Array.from(navButtons.children)

// const slideWidth = slides[0].getBoundingClientRect().width;

// const setSlidePosition = (slide, index) => {
//   slide.style.left = slideWidth * index + "px";
// };
// slides.forEach(setSlidePosition);

// const moveTargetSlide = (track, currentSlide, targetSlide) => {
//   if (targetSlide !== null) {
//     nextButton.style.backgroundColor = "#e89f71"
//     previousButton.style.backgroundColor = '#e89f71'
//     if(!targetSlide) return
//     track.style.transform = "translateX( -" + targetSlide.style.left + ")";
//     currentSlide.classList.remove("current__img");
//     targetSlide.classList.add("current__img");
//   } 
// };

// const updateDots = (currentDot, targetDot) => {
//   if(targetDot !== null) {
//     currentDot.classList.remove("carousel__nav__btn--current");
//     targetDot.classList.add("carousel__nav__btn--current");
//   }
// }

// nextButton.addEventListener("click", (e) => {
//   const currentSlide = track.querySelector(".current__img");
//   const nextSlide = currentSlide.nextElementSibling;
//   const currentDot = navButtons.querySelector('.carousel__nav__btn--current')
//   const nextDot = currentDot.nextElementSibling
//   moveTargetSlide(track, currentSlide, nextSlide);

//   updateDots(currentDot, nextDot)
//   if(nextSlide === null) {
//     nextButton.style.backgroundColor = "#ffdbc4"
//   }
// });

// previousButton.addEventListener("click", (e) => {
//   const currentSlide = track.querySelector(".current__img");
//   const currentDot = navButtons.querySelector('.carousel__nav__btn--current')
//   const previousSlide = currentSlide.previousElementSibling;
//   moveTargetSlide(track, currentSlide, previousSlide);
//   const previousDot = currentDot.previousElementSibling
//   updateDots(currentDot, previousDot)
//   if(previousSlide === null) {
//     previousButton.style.backgroundColor = "#ffdbc4"
//   }
// });

// navButtons.addEventListener('click', e => {
//     const targetDot = e.target.closest('button')
//     const currentSlide = track.querySelector('.current__img')
//     const currentDot = navButtons.querySelector('.carousel__nav__btn--current')
//     const targetIndex = dots.findIndex(dot => dot === targetDot)
//     const targetSlide = slides[targetIndex]

//     moveTargetSlide(track, currentSlide, targetSlide);
//     updateDots(currentDot, targetDot)
// })