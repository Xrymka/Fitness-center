
import Swiper, {Navigation, A11y} from 'swiper';

const initSwiperReviews = (swiper) => {
  if (swiper) {
    const swiperReviews = new Swiper('[data-slider="reviews-slider"]', {
      modules: [Navigation, A11y],

      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },

      loop: false,
      grabCursor: true,

      initialSlide: 0,
    });

    swiperReviews.init();
  }
};

export {initSwiperReviews};
