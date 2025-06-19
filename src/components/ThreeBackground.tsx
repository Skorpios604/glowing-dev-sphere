
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
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  const getGeometry = () => {
    switch (type) {
      case 'box':
        return <boxGeometry args={[0.8, 0.8, 0.8]} />;
      case 'torus':
        return <torusGeometry args={[0.5, 0.2, 16, 32]} />;
      default:
        return <sphereGeometry args={[0.5, 32, 32]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {getGeometry()}
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.6}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#667eea" />
      
      <FloatingGeometry position={[-8, 2, -5]} color="#667eea" type="sphere" />
      <FloatingGeometry position={[8, -2, -5]} color="#764ba2" type="box" />
      <FloatingGeometry position={[-4, -4, -8]} color="#f093fb" type="torus" />
      <FloatingGeometry position={[6, 4, -6]} color="#4facfe" type="sphere" />
      <FloatingGeometry position={[0, -6, -10]} color="#43e97b" type="box" />
      <FloatingGeometry position={[-6, 6, -4]} color="#38f9d7" type="torus" />
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        onCreated={({ gl }) => {
          gl.setClearColor('#0f172a', 1);
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
