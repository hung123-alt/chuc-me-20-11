import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/* Vườn hoa 3D tặng Mẹ 20/11 — three.js thuần, không model tải ngoài */
const canvas = document.getElementById('scene');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x9fd3ff);
scene.fog = new THREE.Fog(0x9fd3ff, 30, 90);

const camera = new THREE.PerspectiveCamera(38, innerWidth / innerHeight, 0.1, 300);
camera.position.set(0, 4.2, 14);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.maxPolarAngle = Math.PI * 0.495;
controls.minDistance = 4; controls.maxDistance = 30;
controls.target.set(0, 2.2, 0);
controls.autoRotate = !reduced;   // camera tự xoay quanh vườn hoa
controls.autoRotateSpeed = 0.9;

// ---- Ánh sáng ----
const hemi = new THREE.HemisphereLight(0xbfe3ff, 0x4a7c59, 0.9);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff2d9, 2.2);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -18; sun.shadow.camera.right = 18;
sun.shadow.camera.top = 18; sun.shadow.camera.bottom = -18;
sun.shadow.camera.far = 80; sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02;
scene.add(sun, sun.target);

// ---- Mặt đất cỏ ----
function grassTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#5da85f'; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 5200; i++) {
    g.fillStyle = `hsl(${105 + Math.random() * 30},${45 + Math.random() * 25}%,${28 + Math.random() * 28}%)`;
    g.fillRect(Math.random() * 256, Math.random() * 256, 2, 2 + Math.random() * 3);
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(10, 10);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
const ground = new THREE.Mesh(
  new THREE.CircleGeometry(26, 64),
  new THREE.MeshStandardMaterial({ map: grassTexture(), roughness: 1 })
);
ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true;
scene.add(ground);

// ---- Bông hoa thủ tục (thân + lá + nụ hồng) ----
const petalMats = [0xff6b9d, 0xff4d6d, 0xffd27a, 0xffffff, 0xc471ed].map(c =>
  new THREE.MeshStandardMaterial({ color: c, roughness: 0.55, metalness: 0.05, side: THREE.DoubleSide }));
const stemMat = new THREE.MeshStandardMaterial({ color: 0x2f7d3b, roughness: 0.9 });
const leafMat = new THREE.MeshStandardMaterial({ color: 0x3f9d4e, roughness: 0.8, side: THREE.DoubleSide });
const flowers = new THREE.Group(); scene.add(flowers);
const bloomers = [];

function makeRose(x, z, s, mi) {
  const g = new THREE.Group();
  const h = 1.6 * s + Math.random() * 0.9 * s;
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.03 * s, 0.05 * s, h, 6), stemMat);
  stem.position.y = h / 2; stem.castShadow = true; g.add(stem);
  for (let i = 0; i < 2; i++) {
    const leaf = new THREE.Mesh(new THREE.CircleGeometry(0.22 * s, 8), leafMat);
    leaf.position.set((i ? 1 : -1) * 0.16 * s, h * (0.35 + i * 0.2), 0);
    leaf.rotation.set(-0.7, 0, (i ? -1 : 1) * 0.9);
    leaf.castShadow = true; g.add(leaf);
  }
  const head = new THREE.Group(); head.position.y = h; g.add(head);
  const bud = new THREE.Mesh(new THREE.SphereGeometry(0.16 * s, 12, 10), petalMats[mi % petalMats.length]);
  bud.castShadow = true; head.add(bud);
  const ring = new THREE.Group(); head.add(ring);
  const n = 7;
  for (let i = 0; i < n; i++) {
    const p = new THREE.Mesh(new THREE.CircleGeometry(0.16 * s, 8), petalMats[(mi + i) % petalMats.length]);
    const a = (i / n) * Math.PI * 2;
    p.position.set(Math.cos(a) * 0.2 * s, 0.02, Math.sin(a) * 0.2 * s);
    p.rotation.set(-Math.PI / 2 + 0.7, 0, -a);
    p.castShadow = true; ring.add(p);
  }
  bloomers.push({ ring, bud, group: g, x, z, s: 0.6 + Math.random() * 0.5, ph: Math.random() * 6.28, sway: 0.5 + Math.random() });
  g.userData.ph = Math.random() * 6.28;
  g.position.set(x, 0, z);
  g.rotation.y = Math.random() * 6.28;
  flowers.add(g);
  return g;
}
// vòng hoa quanh trung tâm, chừa lối đi
for (let i = 0; i < 46; i++) {
  const a = (i / 46) * Math.PI * 2 + Math.random() * 0.2;
  const r = 3.2 + Math.random() * 9;
  makeRose(Math.cos(a) * r, Math.sin(a) * r, 0.8 + Math.random() * 0.9, i);
}

// ---- Trái tim 3D ở trung tâm + chữ Mẹ Yêu ----
const heartShape = new THREE.Shape();
heartShape.moveTo(0, 0.9);
heartShape.bezierCurveTo(0, 1.25, -0.8, 1.35, -0.8, 0.7);
heartShape.bezierCurveTo(-0.8, 0.25, 0, -0.1, 0, -0.7);
heartShape.bezierCurveTo(0, -0.1, 0.8, 0.25, 0.8, 0.7);
heartShape.bezierCurveTo(0.8, 1.35, 0, 1.25, 0, 0.9);
const heart = new THREE.Mesh(
  new THREE.ExtrudeGeometry(heartShape, { depth: 0.35, bevelEnabled: true, bevelSize: 0.06, bevelThickness: 0.06, bevelSegments: 3 }),
  new THREE.MeshStandardMaterial({ color: 0xff3d7e, roughness: 0.3, metalness: 0.25, emissive: 0x7a1033, emissiveIntensity: 0.55 })
);
heart.position.set(0, 2.6, 0); heart.castShadow = true;
scene.add(heart);

function textSprite(text, size = 90, color = '#fff') {
  const c = document.createElement('canvas'); c.width = 1024; c.height = 256;
  const g = c.getContext('2d');
  g.font = `800 ${size}px "Segoe UI", Arial`;
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.shadowColor = 'rgba(255,80,150,.9)'; g.shadowBlur = 34;
  g.fillStyle = color; g.fillText(text, 512, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false });
  const sp = new THREE.Sprite(m); sp.scale.set(7.5, 1.9, 1);
  return sp;
}
const title3d = textSprite('Mẹ Yêu  •  20/11', 84, '#fff6e8');
title3d.position.set(0, 4.6, 0); scene.add(title3d);

// Khung vòm hoa (torus hoa lá) phía sau
const arch = new THREE.Mesh(new THREE.TorusGeometry(3.4, 0.32, 12, 40, Math.PI),
  new THREE.MeshStandardMaterial({ color: 0x2f7d3b, roughness: 0.9 }));
arch.position.set(0, 0.4, -3.5); arch.castShadow = true; scene.add(arch);
for (let i = 0; i <= 14; i++) {
  const a = (i / 14) * Math.PI;
  const b = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), petalMats[i % petalMats.length]);
  b.position.set(Math.cos(a) * -3.4, 0.4 + Math.sin(a) * 3.4, -3.5);
  b.castShadow = true; scene.add(b);
}

// ---- Đàn bướm bay vỗ cánh ----
const butterflies = [];
const wingMat = new THREE.MeshBasicMaterial({ color: 0xffd27a, side: THREE.DoubleSide, transparent: true, opacity: 0.95 });
const wingMat2 = new THREE.MeshBasicMaterial({ color: 0xff6b9d, side: THREE.DoubleSide, transparent: true, opacity: 0.95 });
for (let i = 0; i < (reduced ? 3 : 9); i++) {
  const b = new THREE.Group();
  const wgeo = new THREE.PlaneGeometry(0.35, 0.28);
  const wl = new THREE.Mesh(wgeo, i % 2 ? wingMat : wingMat2);
  const wr = new THREE.Mesh(wgeo, i % 2 ? wingMat : wingMat2);
  wl.position.x = -0.16; wr.position.x = 0.16;
  b.add(wl, wr);
  b.position.set((Math.random() - 0.5) * 18, 2 + Math.random() * 4, (Math.random() - 0.5) * 18);
  scene.add(b);
  butterflies.push({ g: b, wl, wr, r: 3 + Math.random() * 7, h: b.position.y, sp: 0.25 + Math.random() * 0.45, ph: Math.random() * 6.28, cx: (Math.random() - 0.5) * 6, cz: (Math.random() - 0.5) * 6 });
}
// ---- Mưa cánh hoa (instanced) ----
const PETALS = reduced ? 60 : 260;
const petalGeo = new THREE.PlaneGeometry(0.16, 0.22);
const petalIM = new THREE.InstancedMesh(petalGeo,
  new THREE.MeshBasicMaterial({ color: 0xff8fb8, side: THREE.DoubleSide, transparent: true, opacity: 0.92 }), PETALS);
petalIM.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
scene.add(petalIM);
const drops = Array.from({ length: PETALS }, () => ({
  x: (Math.random() - 0.5) * 30, y: Math.random() * 14 + 2, z: (Math.random() - 0.5) * 30,
  vy: 0.5 + Math.random() * 0.9, ph: Math.random() * 6.28, sp: 0.6 + Math.random() * 1.4, rx: Math.random() * 6.28
}));
const dummy = new THREE.Object3D();
const pointer = new THREE.Vector2(99, 99);
addEventListener('pointermove', e => {
  pointer.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
});
function updatePetals(t, burst) {
  for (let i = 0; i < PETALS; i++) {
    const d = drops[i];
    d.y -= d.vy * 0.016 * (burst ? 2.2 : 1);
    d.x += Math.sin(t * d.sp + d.ph) * 0.008;
    // cánh hoa né / bay theo chuột: tạo cảm giác chạm được
    const dx = d.x - pointer.x * 12, dz = d.z;
    const dist = Math.hypot(dx, dz);
    if (dist < 3) { d.x += dx / (dist + 0.4) * 0.03; d.y += 0.02; }
    if (d.y < 0.1) { d.y = 12 + Math.random() * 4; d.x = (Math.random() - 0.5) * 30; d.z = (Math.random() - 0.5) * 30; }
    dummy.position.set(d.x, d.y, d.z);
    dummy.rotation.set(d.rx + t * d.sp, d.ph + t * 0.7, 0);
    dummy.updateMatrix(); petalIM.setMatrixAt(i, dummy.matrix);
  }
  petalIM.instanceMatrix.needsUpdate = true;
}

// ---- Đom đóm cho chế độ đêm ----
const fireGeo = new THREE.BufferGeometry();
const FN = 120; const fp = new Float32Array(FN * 3);
for (let i = 0; i < FN; i++) { fp[i * 3] = (Math.random() - 0.5) * 24; fp[i * 3 + 1] = Math.random() * 7 + 0.5; fp[i * 3 + 2] = (Math.random() - 0.5) * 24; }
fireGeo.setAttribute('position', new THREE.BufferAttribute(fp, 3));
const fireflies = new THREE.Points(fireGeo, new THREE.PointsMaterial({ color: 0xffe28a, size: 0.12, transparent: true, opacity: 0 }));
scene.add(fireflies);

// ---- Preset ánh sáng ----
const PRESETS = {
  morning: { bg: 0x9fd3ff, fog: 0x9fd3ff, sun: 0xfff2d9, si: 2.2, hi: 0.9, pos: [10, 14, 8], exp: 1.0, fire: 0 },
  golden: { bg: 0xffb46b, fog: 0xffc98a, sun: 0xff9f43, si: 2.4, hi: 0.6, pos: [-12, 5, 6], exp: 1.05, fire: 0.15 },
  night: { bg: 0x0b1030, fog: 0x0b1030, sun: 0x8fb8ff, si: 0.35, hi: 0.25, pos: [6, 12, -8], exp: 0.85, fire: 1 }
};
let preset = PRESETS.golden;
function setLight(name) {
  preset = PRESETS[name];
  document.querySelectorAll('[data-light]').forEach(b => b.classList.toggle('on', b.dataset.light === name));
  gsap.to(scene.background, { r: new THREE.Color(preset.bg).r, g: new THREE.Color(preset.bg).g, b: new THREE.Color(preset.bg).b, duration: 1.2 });
  gsap.to(scene.fog.color, { r: new THREE.Color(preset.fog).r, g: new THREE.Color(preset.fog).g, b: new THREE.Color(preset.fog).b, duration: 1.2 });
  gsap.to(sun.color, { r: new THREE.Color(preset.sun).r, g: new THREE.Color(preset.sun).g, b: new THREE.Color(preset.sun).b, duration: 1.2 });
  gsap.to(sun, { intensity: preset.si, duration: 1.2 });
  gsap.to(hemi, { intensity: preset.hi, duration: 1.2 });
  gsap.to(sun.position, { x: preset.pos[0], y: preset.pos[1], z: preset.pos[2], duration: 1.2 });
  gsap.to(fireflies.material, { opacity: preset.fire, duration: 1.2 });
}
document.querySelectorAll('[data-light]').forEach(b => b.onclick = () => setLight(b.dataset.light));
setLight('golden');

// ---- Góc nhìn ----
const VIEWS = {
  front: { p: [0, 4.2, 14], t: [0, 2.2, 0] },
  corner: { p: [10, 5.5, 10], t: [0, 2, 0] },
  low: { p: [0, 1.2, 8], t: [0, 3.2, 0] },
  aerial: { p: [0, 14, 7], t: [0, 0.5, 0] }
};
function flyTo(name) {
  const v = VIEWS[name]; if (!v) return;
  document.querySelectorAll('[data-view]').forEach(b => b.classList.toggle('on', b.dataset.view === name));
  if (reduced) { camera.position.set(...v.p); controls.target.set(...v.t); return; }
  gsap.to(camera.position, { x: v.p[0], y: v.p[1], z: v.p[2], duration: 1.6, ease: 'power2.inOut' });
  gsap.to(controls.target, { x: v.t[0], y: v.t[1], z: v.t[2], duration: 1.6, ease: 'power2.inOut' });
}
document.querySelectorAll('[data-view]').forEach(b => b.onclick = () => flyTo(b.dataset.view));

// ---- Scroll = timeline camera (Lenis + GSAP) ----
gsap.registerPlugin(ScrollTrigger);
let lenis = null;
if (!reduced && window.Lenis) {
  lenis = new Lenis({ lerp: 0.09 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
const scrollState = { orbit: 0 };
ScrollTrigger.create({
  trigger: '#story', start: 'top top', end: 'bottom bottom', scrub: 1,
  onUpdate: s => { scrollState.orbit = s.progress; }
});

// ---- Nút tương tác ----
let burst = 0;
const toast = m => {
  const el = document.getElementById('toast');
  el.textContent = m; el.classList.add('show');
  clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('show'), 2600);
};
document.getElementById('bloomBtn').onclick = () => {
  bloomers.forEach(b => gsap.to(b.ring.scale, { x: 1.6, y: 1.6, z: 1.6, duration: 1.2, ease: 'elastic.out(1,.4)', yoyo: true, repeat: 1 }));
  gsap.to(heart.scale, { x: 1.35, y: 1.35, z: 1.35, duration: 0.9, ease: 'elastic.out(1,.35)', yoyo: true, repeat: 1 });
  burst = 1; setTimeout(() => burst = 0, 2500);
  toast('🌸 Vườn hoa nở rộ tặng Mẹ Yêu!');
};
document.getElementById('petalBurst').onclick = () => {
  burst = 1; setTimeout(() => burst = 0, 4000);
  drops.forEach(d => { d.y = 8 + Math.random() * 7; });
  toast('🌧️ Mưa cánh hoa rơi vì Mẹ!');
};

// ---- Modal viết thư ----
const modal = document.getElementById('letterModal');
document.getElementById('openLetter').onclick = () => { modal.hidden = false; };
document.getElementById('closeLetter').onclick = () => { modal.hidden = true; };
modal.addEventListener('click', e => { if (e.target === modal) modal.hidden = true; });
document.getElementById('saveLetter').onclick = () => {
  const t = document.getElementById('letterText').value.trim();
  const s = document.getElementById('letterSign').value.trim() || 'Con của Mẹ';
  const box = document.getElementById('savedLetter');
  box.hidden = false;
  box.innerHTML = `<b>💌 Thư gửi Mẹ Yêu (20/11):</b><br>${t.replace(/</g, '&lt;')}<br><br><i>— ${s.replace(/</g, '&lt;')} —</i>`;
  toast('💾 Đã lưu thư! Hãy đọc to cho Mẹ nghe nhé ❤️');
};

// ---- Nhạc nền: file bạn gửi (assets/nhac-me.mp3, 35s, tự lặp) ----
const bgm = new Audio('assets/nhac-me.mp3');
bgm.loop = true; bgm.volume = 0.8;
let playing = false;
document.getElementById('musicBtn').onclick = e => {
  playing = !playing;
  e.currentTarget.textContent = playing ? '♪ Nhạc: đang phát' : '♪ Nhạc: tắt';
  e.currentTarget.setAttribute('aria-pressed', playing);
  if (playing) { bgm.play().catch(() => toast('⚠️ Trình duyệt chặn tự phát — bấm lại nút Nhạc nhé')); toast('🎵 Giai điệu dành tặng Mẹ…'); }
  else bgm.pause();
};

// ---- Bay mở màn: camera từ xa lao vào vườn hoa ----
if (!reduced) {
  camera.position.set(0, 9, 30);
  gsap.to(camera.position, { x: 0, y: 4.2, z: 14, duration: 3.2, ease: 'power3.out', delay: 0.3 });
  gsap.to(controls.target, { x: 0, y: 2.2, z: 0, duration: 3.2, ease: 'power3.out', delay: 0.3 });
}
// Dừng xoay tự động khi người dùng đang kéo
controls.addEventListener('start', () => { controls.autoRotate = false; });
controls.addEventListener('end', () => { if (!reduced) setTimeout(() => controls.autoRotate = true, 3000); });

// ---- Vòng lặp ----
const clock = new THREE.Clock();
function loop() {
  const t = clock.getElapsedTime();
  // Trái tim: xoay liên tục + đập phình + lơ lửng
  heart.position.y = 2.6 + Math.sin(t * 1.6) * 0.28;
  heart.rotation.y += 0.012;
  const beat = 1 + Math.max(0, Math.sin(t * 3.2)) * 0.12;
  heart.scale.setScalar(burst ? 1.35 : beat);
  heart.material.emissiveIntensity = 0.45 + Math.sin(t * 3.2) * 0.2 + burst * 0.5;
  // Chữ 3D bay lơ lửng + xoay nhẹ về phía camera
  title3d.position.y = 4.6 + Math.sin(t * 1.1) * 0.18;
  // Hoa: đung đưa theo gió + sóng nở lan tỏa từ tâm
  const wind = Math.sin(t * 0.8) * 0.5 + Math.sin(t * 2.3) * 0.2;
  bloomers.forEach(b => {
    const dist = Math.hypot(b.x, b.z);
    const wave = 1 + Math.sin(t * 2.5 - dist * 0.8) * 0.12 + (burst ? 0.5 : 0);
    b.ring.scale.setScalar(b.s * wave);
    b.ring.rotation.y = t * 0.6 + b.ph;
    b.group.rotation.z = Math.sin(t * 1.5 + b.ph) * 0.09 * b.sway + wind * 0.03;
    b.group.rotation.x = Math.cos(t * 1.2 + b.ph) * 0.06 * b.sway;
  });
  // Bướm: bay vòng tròn + vỗ cánh + nhấp nhô
  butterflies.forEach(bf => {
    const a = t * bf.sp + bf.ph;
    bf.g.position.set(bf.cx + Math.cos(a) * bf.r, bf.h + Math.sin(t * 1.8 + bf.ph) * 0.7, bf.cz + Math.sin(a) * bf.r);
    bf.g.rotation.y = -a;
    const flap = Math.sin(t * 18 + bf.ph) * 0.9;
    bf.wl.rotation.y = flap; bf.wr.rotation.y = -flap;
  });
  // scroll xoay nhẹ camera quanh vườn
  if (!reduced && scrollState.orbit > 0) {
    const a = scrollState.orbit * Math.PI * 1.2;
    const r = camera.position.length();
    camera.position.x += Math.sin(a) * 0.004 * r;
    camera.position.z += Math.cos(a * 0.7) * 0.002 * r;
  }
  updatePetals(t, burst);
  fireGeo.attributes.position.needsUpdate = false;
  controls.update();
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(loop);
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

window.__app = { renderer, scene, camera };
