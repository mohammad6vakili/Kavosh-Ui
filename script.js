let isHamOpen = false;

const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetweenSlides: 30,
    },
    800: {
      slidesPerView: 2,
      spaceBetweenSlides: 40,
    },
    320: {
      slidesPerView: 1,
      spaceBetweenSlides: 40,
    },
  },
});

const techSwiper = new Swiper(".techSwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 5,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    1200: {
      slidesPerView: 5,
      spaceBetweenSlides: 30,
    },
    800: {
      slidesPerView: 3,
      spaceBetweenSlides: 40,
    },
    400: {
      slidesPerView: 2,
      spaceBetweenSlides: 40,
    },
    320: {
      slidesPerView: 1,
      spaceBetweenSlides: 40,
    },
  },
  pagination: {
    el: ".swiper-pagination-tech",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("kavoshLogo").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("hamButton").addEventListener("click", () => {
  if (isHamOpen === false) {
    document.getElementById("hamMenu").classList.add("hamOpen");
    isHamOpen = true;
  } else {
    document.getElementById("hamMenu").classList.remove("hamOpen");
    isHamOpen = false;
  }
});

document.getElementById("main").addEventListener("click", () => {
  document.getElementById("hamMenu").classList.remove("hamOpen");
  isHamOpen = false;
});

document.getElementById("footer").addEventListener("click", () => {
  document.getElementById("hamMenu").classList.remove("hamOpen");
  isHamOpen = false;
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.getElementById("headerTop").classList.add("header-in-scroll");
  } else if (window.scrollY < 50) {
    document.getElementById("headerTop").classList.remove("header-in-scroll");
  }
});
