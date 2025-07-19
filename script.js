const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);
camera.position.z = 100;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('.canvas-container').appendChild(renderer.domElement);

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

geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({
  color: 0x00ffff,
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
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

