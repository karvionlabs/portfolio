import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface SceneProps {
  intensity?: number;
}

export const Background3D: React.FC<SceneProps> = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 35;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Prevents GPU lag
    mountRef.current.appendChild(renderer.domElement);

    // 2. Cybernetic Neural Node Core (Sphere with Icosahedron wires)
    const coreGeometry = new THREE.IcosahedronGeometry(12, 2);
    const coreWireframe = new THREE.WireframeGeometry(coreGeometry);
    const coreMaterial = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.35,
    });
    const coreMesh = new THREE.LineSegments(coreWireframe, coreMaterial);
    scene.add(coreMesh);

    // Outer energy ring
    const ringGeo = new THREE.TorusGeometry(18, 0.2, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x8a2be2,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    scene.add(ringMesh);

    // 3. Floating Automation Data Packets (Particles)
    const particleCount = 200;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 80;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.45,
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // 5. Responsive Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // 6. Smooth Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      coreMesh.rotation.x += 0.002;
      coreMesh.rotation.y += 0.003;

      ringMesh.rotation.x -= 0.001;
      ringMesh.rotation.y += 0.002;

      particles.rotation.y += 0.0008;

      // Smooth camera interpolation towards mouse
      camera.position.x += (mouseX * 4 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 4 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};
