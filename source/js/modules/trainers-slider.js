import Swiper, {Navigation} from 'swiper';

const initSwiperTrainer = (swiper) => {

  if (swiper) {
    const swiperTrainers = new Swiper('[data-slider="trainers-slider"]', {
      modules: [Navigation],

      navigation: {
        nextEl: '.trainers__button--next',
        prevEl: '.trainers__button--prev',
      },

      loop: true,
      grabCursor: true,

      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 22,
          initialSlide: 2,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 22,
          initialSlide: 2,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          initialSlide: 2,
        },

        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
          initialSlide: 0,
        },
      },
    });

    swiperTrainers.init();
  }
};

const renderSlidesOrder = () => {
  const duplicateSlides = document.querySelectorAll('.swiper-slide-duplicate.slider__trainer');
  duplicateSlides.forEach((slide) => {
    slide.removeAttribute('tabindex');
  });
};

export {initSwiperTrainer, renderSlidesOrder};
