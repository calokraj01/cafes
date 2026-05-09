'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

const FloatingObject = ({ position, color, speed = 1, distort = 0.4 }: { position: [number, number, number], color: string, speed?: number, distort?: number }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2 * speed;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3 * speed;
  });

  return (
    <Float speed={speed * 2} rotationIntensity={2} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} position={position} ref={mesh}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={speed * 2}
          roughness={0}
          metalness={1}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00F5FF" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#FF0080" />
        <spotLight position={[0, 10, 0]} intensity={2} color="#B4FF00" />

        <FloatingObject position={[-4, 2, 0]} color="#FF0080" speed={0.5} distort={0.6} />
        <FloatingObject position={[4, -2, 2]} color="#00F5FF" speed={0.8} distort={0.4} />
        <FloatingObject position={[0, 3, -2]} color="#B4FF00" speed={1.2} distort={0.5} />
        <FloatingObject position={[-5, -4, 1]} color="#7B2EFF" speed={0.6} distort={0.7} />

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default HeroScene;
