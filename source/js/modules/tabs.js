const tab = document.querySelector('.tab');
const tabBtn = document.querySelectorAll('.tab__button');
const tabContent = document.querySelectorAll('.tab__item');

const openTab = () => {
  if (tab) {
    tab.addEventListener('click', (e) => {
      if (e.target.classList.contains('tab__button')) {
        const tabPath = e.target.dataset.tabsPath;
        tabBtn.forEach((el) => {
          el.classList.remove('is-active');
        });
        document.querySelector(`[data-tabs-path="${tabPath}"]`).classList.add('is-active');
        tabHandler(tabPath);
      }
    });
  }
};

const tabHandler = (path) => {
  tabContent.forEach((el) => {
    el.classList.remove('is-open');
  });
  document.querySelector(`[data-tabs-content="${path}"]`).classList.add('is-open');
};

export {openTab};
