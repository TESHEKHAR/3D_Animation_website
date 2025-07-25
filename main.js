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

// THREE.js Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 100;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector(".canvas-container").appendChild(renderer.domElement);

// Create particles
const geometry = new THREE.BufferGeometry();
const count = 1000;
const positions = [];

for (let i = 0; i < count; i++) {
  positions.push(
    (Math.random() - 0.5) * 200,
    (Math.random() - 0.5) * 200,
    (Math.random() - 0.5) * 200
  );
}

geometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(positions, 3)
);

const material = new THREE.PointsMaterial({
  color: 0x0000ff,
  size: 0.5,
});

const points = new THREE.Points(geometry, material);
scene.add(points);

// Animate
function animate() {
  requestAnimationFrame(animate);
  points.rotation.x += 0.001;
  points.rotation.y += 0.001;
  renderer.render(scene, camera);
}
animate();

// Handle resizing
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Scroll reveal animations
window.addEventListener('scroll', reveal);

function reveal() {
  let reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

// ❌ Removed duplicate Hero Slider code
// ✅ Already handled inside DOMContentLoaded block above
