import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const context = canvas.getContext('2d')!;
    
    // Create a gradient earth texture
    const gradient = context.createLinearGradient(0, 0, 512, 256);
    gradient.addColorStop(0, '#0066cc');
    gradient.addColorStop(0.3, '#1a8cff');
    gradient.addColorStop(0.6, '#33a3ff');
    gradient.addColorStop(1, '#0066cc');
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, 512, 256);
    
    // Add some random "land masses"
    context.fillStyle = '#22cc88';
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 256;
      const size = Math.random() * 50 + 10;
      context.beginPath();
      context.arc(x, y, size, 0, Math.PI * 2);
      context.fill();
    }
    
    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <Sphere ref={meshRef} args={[2, 32, 32]}>
      <meshStandardMaterial 
        map={texture}
        transparent
        opacity={0.9}
        emissive={new THREE.Color(0x001144)}
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
};

const AnimatedGlobe: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00aaff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#aa00ff" />
        <Globe />
        <Stars radius={300} depth={60} count={1000} factor={7} fade speed={1} />
      </Canvas>
    </div>
  );
};

export default AnimatedGlobe;