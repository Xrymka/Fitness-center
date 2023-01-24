import Swiper, {Navigation, A11y} from 'swiper';

const initSwiperTrainer = (swiper) => {

  if (swiper) {
    const swiperTrainers = new Swiper('[data-slider="trainers-slider"]', {
      modules: [Navigation, A11y],

      navigation: {
        nextEl: '.trainers__button--next',
        prevEl: '.trainers__button--prev',
      },

      loop: true,
      grabCursor: true,
      allowTouchMove: true,
      autoHeight: true,
      watchOverflow: true,
      watchSlidesProgress: true,
      keyboard: true,

      breakpoints: {
        280: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 2,
        },

        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 2,
        },

        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
          initialSlide: 2,
        },

        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 40,
        },
      },
    });

    swiperTrainers.init();

    const duplicateSlides = document.querySelectorAll('.swiper-slide-duplicate');
    duplicateSlides.forEach((slide) => {
      slide.removeAttribute('tabindex');
    });
  }
};

export {initSwiperTrainer};
