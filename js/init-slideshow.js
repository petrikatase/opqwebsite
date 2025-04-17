document.addEventListener('DOMContentLoaded', function () {
    const listEl = document.querySelector('.splide__list');
    const images = window.imageList || []; // ✅ make sure it's accessible
    images.forEach((src, i) => {
      const li = document.createElement('li');
      li.className = 'splide__slide';
      li.innerHTML = `<img src="${src}" alt="Slide ${i + 1}">`;
      listEl.appendChild(li);
    });
  
    new Splide('#splide', {
      type: 'loop',
      autoplay: true,
      interval: 4000,
      pagination: true,
      arrows: true,
    }).mount();
  });
  