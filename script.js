const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const techSwiper = new Swiper('.techSwiper', {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 5,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination-tech",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});