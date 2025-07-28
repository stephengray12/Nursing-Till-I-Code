let currentSlide = 0;

  function moveCarousel(direction) {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;

    currentSlide += direction;

    // wrap around
    if (currentSlide < 0) {
      currentSlide = totalItems - 1;
    } else if (currentSlide >= totalItems) {
      currentSlide = 0;
    }

    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }