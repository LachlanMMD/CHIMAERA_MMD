const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel img");

let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});
