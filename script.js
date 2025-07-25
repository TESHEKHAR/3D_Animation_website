document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const closeBtn = document.getElementById("close-btn");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.add("active");
    closeBtn.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
    closeBtn.style.display = "none";
  });

  // Carousel Auto Slide
  const slides = document.getElementById("slides");
  const slideCount = document.querySelectorAll(".slide").length;
  let index = 0;
  let interval;

  function startAutoSlide() {
    interval = setInterval(() => {
      index++;
      slides.style.transition = "transform 1s ease-in-out";
      slides.style.transform = `translateX(-${index * 100}%)`;

      if (index === slideCount - 1) {
        setTimeout(() => {
          slides.style.transition = "none";
          slides.style.transform = "translateX(0)";
          index = 0;
        }, 1000);
      }
    }, 5000);
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  startAutoSlide();

  const carousel = document.getElementById("carousel");
  carousel.addEventListener("mouseenter", stopAutoSlide);
  carousel.addEventListener("mouseleave", startAutoSlide);
});
