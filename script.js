document.addEventListener('DOMContentLoaded', () => {

  const preloadImages = (srcs) => {
    srcs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };
  

  preloadImages([
    'images/bg-desk.webp',
    'images/bg-tab.webp',
    'images/bg-mob.webp',
    'images/char-desk.png',
    'images/char-tab.png',
    'images/char-mob1.png',
  ]);

});
