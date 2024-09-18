import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

const container = document.getElementById('cube');
const width = container.clientWidth;
const height = container.clientHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);
renderer.setAnimationLoop(animate);
container.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(0.02, 32, 16);
const material = new THREE.MeshBasicMaterial({color: 0xffff00});
// const sphere = new THREE.Mesh( geometry, material );
camera.position.z = 50;
const count = 10000;
const disc_radius = 10;
const disc_radius_2 = 100;

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

async function createPoints() {
  while (scene.children.length > 0) {
    scene.remove(scene.children[0]);
  }

  for (let i = 0; i < count; i++) {
    const u = disc_radius_2 * Math.random();
    const theta = 2 * Math.PI * Math.random();

    const x = Math.sqrt(u) * Math.cos(theta)
    const y = Math.sqrt(u) * Math.sin(theta)

    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.x = x;
    sphere.position.y = y;
    scene.add(sphere);
    if (i % 100 == 0) {
      await new Promise(r => setTimeout(r, 0));
    }
  }
}

document.getElementById('reset-button').addEventListener('click', createPoints);

createPoints();

function animate() {
  // requestAnimationFrame( animate );
  controls.update();
  renderer.render(scene, camera);
}