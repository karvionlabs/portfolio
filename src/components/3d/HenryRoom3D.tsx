import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RetroOS } from '../dashboard/RetroOS';
import { ZoomIn, ZoomOut, Monitor } from 'lucide-react';

export const HenryRoom3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState('0%');
  const [isLoaded, setIsLoaded] = useState(false);

  // References for camera animation
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const targetCameraPos = useRef(new THREE.Vector3(0, 1800, 5500)); // Desk overview
  const targetFocalPoint = useRef(new THREE.Vector3(0, 500, 0));

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xd9dadc); // Exact Henry Heffernan light grey background

    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      10,
      100000
    );
    camera.position.set(0, 1800, 5500);
    camera.lookAt(0, 500, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mountRef.current.appendChild(renderer.domElement);

    // 2. Loading Manager & Textures
    const loadingManager = new THREE.LoadingManager(
      () => {
        setIsLoaded(true);
      },
      (_item, loaded, total) => {
        const progress = Math.round((loaded / total) * 100);
        setLoadingProgress(`${progress}%`);
      }
    );

    const textureLoader = new THREE.TextureLoader(loadingManager);
    const gltfLoader = new GLTFLoader(loadingManager);

    // Load Baked Computer Setup
    textureLoader.load('/models/Computer/baked_computer.jpg', (computerTexture) => {
      computerTexture.flipY = false;
      computerTexture.colorSpace = THREE.SRGBColorSpace;

      const computerMat = new THREE.MeshBasicMaterial({ map: computerTexture });

      gltfLoader.load('/models/Computer/computer_setup.glb', (gltf) => {
        gltf.scene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).material = computerMat;
          }
        });
        gltf.scene.position.set(0, 0, 0);
        scene.add(gltf.scene);
      });
    });

    // Load Baked Environment (Desk, chair, walls)
    textureLoader.load('/models/World/baked_environment.jpg', (envTexture) => {
      envTexture.flipY = false;
      envTexture.colorSpace = THREE.SRGBColorSpace;

      const envMat = new THREE.MeshBasicMaterial({ map: envTexture });

      gltfLoader.load('/models/World/environment.glb', (gltf) => {
        gltf.scene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).material = envMat;
          }
        });
        scene.add(gltf.scene);
      });
    });

    // Load Baked Decor (Coffee mug, papers, plant)
    textureLoader.load('/models/Decor/baked_decor_modified.jpg', (decorTexture) => {
      decorTexture.flipY = false;
      decorTexture.colorSpace = THREE.SRGBColorSpace;

      const decorMat = new THREE.MeshBasicMaterial({ map: decorTexture });

      gltfLoader.load('/models/Decor/decor.glb', (gltf) => {
        gltf.scene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).material = decorMat;
          }
        });
        scene.add(gltf.scene);
      });
    });

    // 3. Mouse Parallax on Desk View
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      if (isZoomedIn) return;
      mouseX = (e.clientX - window.innerWidth / 2) * 0.3;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.3;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 4. Resize listener
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // 5. Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (cameraRef.current) {
        // Smoothly interpolate camera position
        camera.position.x += (targetCameraPos.current.x + mouseX - camera.position.x) * 0.05;
        camera.position.y += (targetCameraPos.current.y - mouseY - camera.position.y) * 0.05;
        camera.position.z += (targetCameraPos.current.z - camera.position.z) * 0.05;

        camera.lookAt(targetFocalPoint.current);
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isZoomedIn]);

  // Toggle Zoom between 3D Room and Screen
  const handleToggleZoom = () => {
    if (!isZoomedIn) {
      // Zoom into Monitor (Exact Henry Heffernan monitor coordinates)
      targetCameraPos.current.set(0, 950, 1650);
      targetFocalPoint.current.set(0, 950, 0);
      setIsZoomedIn(true);
    } else {
      // Zoom out to Desk
      targetCameraPos.current.set(0, 1800, 5500);
      targetFocalPoint.current.set(0, 500, 0);
      setIsZoomedIn(false);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      
      {/* 3D WebGL Canvas Layer */}
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />

      {/* Top Left Bio Badge (Exactly matching Henry Heffernan's site) */}
      <div
        style={{
          position: 'absolute',
          top: '28px',
          left: '32px',
          zIndex: 50,
          background: 'rgba(0,0,0,0.85)',
          color: '#fff',
          padding: '10px 16px',
          fontFamily: 'monospace',
          fontSize: '12px',
          borderRadius: '4px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          gap: '3px',
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: '13px' }}>AI Automation Architect</div>
        <div style={{ color: '#aaa' }}>Principal Workflow Engineer</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '4px' }}>
          <span style={{ color: '#00ffcc' }}>● SYSTEM ONLINE</span>
          <button
            onClick={handleToggleZoom}
            style={{
              background: '#222',
              border: '1px solid #444',
              color: '#fff',
              padding: '2px 8px',
              fontSize: '11px',
              borderRadius: '2px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            {isZoomedIn ? <ZoomOut className="w-3 h-3" /> : <ZoomIn className="w-3 h-3" />}
            {isZoomedIn ? 'Zoom Out Room' : 'Click Monitor'}
          </button>
        </div>
      </div>

      {/* Interactive Monitor Overlay Screen */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: isZoomedIn
            ? 'translate(-50%, -50%) scale(1)'
            : 'translate(-50%, -50%) perspective(1200px) rotateX(-2deg) translateY(-28px) scale(0.24)',
          width: '1024px',
          height: '768px',
          zIndex: isZoomedIn ? 40 : 20,
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: isZoomedIn ? '0 0 50px rgba(0,0,0,0.8)' : '0 10px 30px rgba(0,0,0,0.5)',
          borderRadius: '12px',
          border: isZoomedIn ? '8px solid #2a2a2a' : '4px solid #111',
          overflow: 'hidden',
          cursor: isZoomedIn ? 'default' : 'pointer',
        }}
        onClick={() => {
          if (!isZoomedIn) handleToggleZoom();
        }}
      >
        {/* Inner Virtual OS */}
        <RetroOS />
      </div>

      {/* Floating Instructions Pill when zoomed out */}
      {!isZoomedIn && isLoaded && (
        <div
          onClick={handleToggleZoom}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.8)',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '30px',
            fontSize: '13px',
            fontWeight: 'bold',
            cursor: 'pointer',
            zIndex: 60,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            animation: 'pulseGlow 2s infinite',
          }}
        >
          <Monitor className="w-4 h-4 text-cyan-400" />
          Click the computer monitor to zoom in & explore portfolio!
        </div>
      )}

      {/* Loading Screen Overlay */}
      {!isLoaded && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#d9dadc',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            fontFamily: 'monospace',
          }}
        >
          <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', color: '#333' }}>
            BOOTING AI AUTOMATION WORKSPACE...
          </div>
          <div style={{ width: '240px', height: '6px', background: '#ccc', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: loadingProgress, height: '100%', background: '#008080', transition: 'width 0.2s' }} />
          </div>
          <div style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>{loadingProgress} loaded</div>
        </div>
      )}
    </div>
  );
};
