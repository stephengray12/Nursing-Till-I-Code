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
  const previews = document.querySelectorAll('.preview-thumb');

  // Move carousel
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update preview highlighting
  previews.forEach((preview, idx) => {
    if (idx === currentIndex) {
      preview.classList.add('active');
    } else {
      preview.classList.remove('active');
    }
  });
}

// Optional: Init preview state on page load
document.addEventListener('DOMContentLoaded', () => {
  updateCarousel();
});
