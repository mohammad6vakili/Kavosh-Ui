$('.carousel').carousel({
    interval: 6000
  })

const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: "fade",
  loop: true,
  speed: 1200,
  autoplay: {
    delay: 6000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
