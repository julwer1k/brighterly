import Swiper from "swiper/bundle";
import "swiper/css/bundle";
// Initialize Swiper

let swiper = new Swiper(".report-slider", {
  grabCursor: true,
  loop: true,
  slidesPerView: "auto",
  effect: "coverflow",
  breakpoints: {
    320: {
      effect: "slide",
    },
    767: {
      effect: "coverflow",
    },
  },
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 420,
    depth: 120,
    modifier: 1.2,
    slideShadows: false,
  },
});

let swiperMobile = new Swiper(".feedback__items", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
  },
});

if (window.matchMedia("(min-width: 768px)").matches) {
  swiperMobile.disable();
  swiperMobile.destroy(true, true);
} else {
  swiperMobile.enable();
}
