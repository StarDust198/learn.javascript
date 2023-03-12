const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const carouselList = document.querySelector('.carousel-list');
let carouselState = 0;

const moveCarousel = () => {
  carouselList.style.right = carouselState * 390 + 'px';
};
const moveLeft = () => {
  if (carouselState !== 0) carouselState--;
  moveCarousel();
};
const moveRight = () => {
  if (carouselState !== 3) carouselState++;
  moveCarousel();
};

arrowLeft.addEventListener('click', moveLeft);
arrowRight.addEventListener('click', moveRight);
