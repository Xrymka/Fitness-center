const videoEnabled = () => {
  const video = document.querySelector('.video');
  const button = video.querySelector('.video__btn');
  button.removeAttribute('disabled');

  function createIframe() {
    const iframe = document.createElement('iframe');

    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
    iframe.classList.add('video__media');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');

    return iframe;
  }

  if (video) {
    const link = video.querySelector('.video__link');

    link.removeAttribute('href');

    video.addEventListener('click', () => {
      const iframe = createIframe();

      link.remove();
      button.remove();
      video.append(iframe);
    });
  }
};

export {videoEnabled};
