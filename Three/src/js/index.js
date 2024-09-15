import * as THREE from 'three';
import WebGL from 'three/examples/jsm/capabilities/WebGL.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const $result = document.getElementById('result');

if (WebGL.isWebGL2Available()) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xa8daf9);

  const camera = new THREE.PerspectiveCamera(
    50,
    $result.clientWidth / $result.clientHeight,
    0.1,
    1000,
  );
  camera.position.set(15, 10, 5);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({
    canvas: $result,
    antialias: true,
  });
  renderer.setSize($result.clientWidth, $result.clientHeight);

  //   document.body.appendChild(renderer.domElement);

  const light = new THREE.DirectionalLight(0xffffff, 1.2);
  light.position.set(3, 4, 10);
  scene.add(light);

  const poire = new THREE.Group();
  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: 0xe0f542,
  });
  const bottomGeometry = new THREE.DodecahedronGeometry(2, 1);
  const bottom = new THREE.Mesh(bottomGeometry, bodyMaterial);
  poire.add(bottom);

  const topGeometry = new THREE.TetrahedronGeometry(1.3, 3);
  const top = new THREE.Mesh(topGeometry, bodyMaterial);
  poire.add(top);
  top.position.y = 1.6;

  const stemMaterial = new THREE.MeshStandardMaterial({
    color: 0x703411,
  });
  const stemGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.9);
  const stem = new THREE.Mesh(stemGeometry, stemMaterial);
  poire.add(stem);
  stem.position.y = 3;

  const leafMaterial = new THREE.MeshStandardMaterial({
    color: 0x22ba3b,
    side: THREE.DoubleSide,
  });
  const leafGeometry = new THREE.SphereGeometry(0.5, 32, 16, 0, Math.PI / 3);
  const poireLeaf = new THREE.Mesh(leafGeometry, leafMaterial);
  poire.add(poireLeaf);
  poireLeaf.position.set(-0.5, 3, -0.1);
  poireLeaf.rotation.z = Math.PI / -2;

  poire.scale.set(0.6, 0.6, 0.6);
  poire.position.set(2.5, 0.3, 0);
  scene.add(poire);

  const tree = new THREE.Group();
  const trunk = new THREE.Group();
  const trunkMaterial = new THREE.MeshStandardMaterial({
    color: 0x703411,
  });
  const trunkGeometry = new THREE.CylinderGeometry(0.8, 1, 1.5);

  const trunk1 = new THREE.Mesh(trunkGeometry, trunkMaterial);
  trunk.add(trunk1);
  const trunk2 = new THREE.Mesh(trunkGeometry, trunkMaterial);
  trunk2.position.set(0.1, 1.3, 0);
  trunk2.scale.set(0.9, 0.9, 0.9);
  trunk2.rotation.z = THREE.MathUtils.degToRad(-5);
  trunk.add(trunk2);
  const trunk3 = new THREE.Mesh(trunkGeometry, trunkMaterial);
  trunk3.position.set(0.2, 2.5, 0);
  trunk3.scale.set(0.8, 0.8, 0.8);
  trunk3.rotation.z = THREE.MathUtils.degToRad(-5);
  trunk.add(trunk3);
  const trunk4 = new THREE.Mesh(trunkGeometry, trunkMaterial);
  trunk4.position.set(0.3, 3.5, 0);
  trunk4.scale.set(0.7, 0.7, 0.7);
  trunk4.rotation.z = THREE.MathUtils.degToRad(-5);
  trunk.add(trunk4);
  tree.add(trunk);

  const leaf = new THREE.Group();
  const trunkLeafMaterial = new THREE.MeshStandardMaterial({
    color: 0x22ba3b,
    side: THREE.DoubleSide,
  });
  const trunkLeafGeometry = new THREE.SphereGeometry(
    2,
    32,
    16,
    Math.PI / 3,
    Math.PI / 3,
  );
  const trunkLeaf1 = new THREE.Mesh(trunkLeafGeometry, trunkLeafMaterial);
  trunkLeaf1.rotation.x = Math.PI / -2;
  trunkLeaf1.position.set(0, 3.2, 2);
  leaf.add(trunkLeaf1);
  const trunkLeaf2 = new THREE.Mesh(trunkLeafGeometry, trunkLeafMaterial);
  trunkLeaf2.rotation.x = Math.PI / -2;
  trunkLeaf2.rotation.z = Math.PI / 2;
  trunkLeaf2.position.set(2, 3.2, 0);
  leaf.add(trunkLeaf2);
  const trunkLeaf3 = new THREE.Mesh(trunkLeafGeometry, trunkLeafMaterial);
  trunkLeaf3.rotation.x = Math.PI / -2;
  trunkLeaf3.rotation.z = Math.PI;
  trunkLeaf3.position.set(0, 3.2, -2);
  leaf.add(trunkLeaf3);
  const trunkLeaf4 = new THREE.Mesh(trunkLeafGeometry, trunkLeafMaterial);
  trunkLeaf4.rotation.x = Math.PI / -2;
  trunkLeaf4.rotation.z = Math.PI / 2;
  trunkLeaf4.position.set(-2, 3.2, 0);
  leaf.add(trunkLeaf4);
  leaf.position.x = -0.4;
  leaf.rotation.z = THREE.MathUtils.degToRad(-10);
  tree.add(leaf);

  scene.add(tree);

  const axes = new THREE.AxesHelper(10);
  scene.add(axes);

  const controls = new OrbitControls(camera, renderer.domElement);

  function animate() {
    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(animate);
  }

  animate();
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  });
} else {
  document.body.appendChild(WebGL.getWebGLErrorMessage());
}
