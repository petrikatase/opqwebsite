const basePath = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '/') + 'fotos/';
window.imageList = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg'].map(name => basePath + name);

window.imageList = [
    '/fotos/slide1.jpg',
    '/fotos/slide2.jpg',
    '/fotos/slide3.jpg',
    '/fotos/slide4.jpg',
    '/fotos/slide5.jpg',
    '/fotos/slide6.jpg'
  ];
  
