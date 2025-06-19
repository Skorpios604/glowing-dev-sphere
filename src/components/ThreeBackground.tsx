
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingGeometry({ position, color, type = 'sphere' }: { 
  position: [number, number, number], 
  color: string, 
  type?: string 
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.02;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 1.2;
    }
  });

  const getGeometry = () => {
    switch (type) {
      case 'box':
        return <boxGeometry args={[1.2, 1.2, 1.2]} />;
      case 'torus':
        return <torusGeometry args={[0.8, 0.3, 16, 32]} />;
      case 'octahedron':
        return <octahedronGeometry args={[0.8]} />;
      default:
        return <sphereGeometry args={[0.8, 32, 32]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {getGeometry()}
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.8}
        emissive={color}
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ff00ff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#9d4edd" />
      <pointLight position={[0, 10, -10]} intensity={1.2} color="#c77dff" />
      
      {/* More geometric shapes with neon colors */}
      <FloatingGeometry position={[-8, 2, -5]} color="#ff006e" type="sphere" />
      <FloatingGeometry position={[8, -2, -5]} color="#8338ec" type="box" />
      <FloatingGeometry position={[-4, -4, -8]} color="#3a86ff" type="torus" />
      <FloatingGeometry position={[6, 4, -6]} color="#fb5607" type="octahedron" />
      <FloatingGeometry position={[0, -6, -10]} color="#ffbe0b" type="box" />
      <FloatingGeometry position={[-6, 6, -4]} color="#c77dff" type="torus" />
      <FloatingGeometry position={[10, 0, -8]} color="#ff006e" type="sphere" />
      <FloatingGeometry position={[-10, -2, -6]} color="#9d4edd" type="octahedron" />
      <FloatingGeometry position={[4, 8, -7]} color="#8338ec" type="box" />
      <FloatingGeometry position={[-2, -8, -9]} color="#fb5607" type="torus" />
      <FloatingGeometry position={[12, -4, -5]} color="#c77dff" type="sphere" />
      <FloatingGeometry position={[-12, 3, -7]} color="#ff006e" type="octahedron" />
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        onCreated={({ gl }) => {
          gl.setClearColor('#0a0612', 1);
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
