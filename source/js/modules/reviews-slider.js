const initSwiperReviews = (swiper) => {
  if (swiper) {
    const swiperReviews = new Swiper('[data-slider="reviews-slider"]', {
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
