var swiper = new Swiper(".projectsSwiper", {
  effect: "coverflow",
  grabCursor: false,
  keyboard: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});
