let currentIndex = 0;

function moveCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const totalSlides = document.querySelectorAll('.carousel-item').length;

  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function updateCarousel() {
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}


  
  
  
  
  
  
  
  


// Optional: Init preview state on page load
document.addEventListener('DOMContentLoaded', () => {
  updateCarousel();
});
