const carousel = document.querySelector(".full-carousel_track");

const images = document.querySelectorAll(".full-carousel_track img");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const dots = document.querySelectorAll(".carousel-dots span");

let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach((dot) => {
    dot.classList.remove("active-dot");
  });

  dots[currentIndex].classList.add("active-dot");
}

nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  updateCarousel();
});
