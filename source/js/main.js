import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {resetDefaultClass} from './utils/remove-nojs';
import {videoEnabled} from './modules/video';
import {openTab} from './modules/tabs';
import {initSwiperTrainer, renderSlidesOrder} from './modules/trainers-slider';
import {initSwiperReviews} from './modules/reviews-slider';
import {initPhoneMask} from './modules/phone-mask';
import {initForm} from './modules/send-form';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  resetDefaultClass();
  const swiper = document.querySelector('.swiper');

  iosVhFix();
  initSwiperTrainer(swiper);
  renderSlidesOrder();
  initSwiperReviews(swiper);

  window.addEventListener('load', () => {
    initModals();
    videoEnabled();
    openTab();
    initPhoneMask();
    initForm();
  });
});

