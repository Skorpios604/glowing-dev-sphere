
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingGeometry({ position, color, type = 'sphere', scale = 1 }: { 
  position: [number, number, number], 
  color: string, 
  type?: string,
  scale?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 1.5;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.5 + position[2]) * 0.5;
    }
  });

  const getGeometry = () => {
    switch (type) {
      case 'box':
        return <boxGeometry args={[1.5 * scale, 1.5 * scale, 1.5 * scale]} />;
      case 'torus':
        return <torusGeometry args={[1 * scale, 0.4 * scale, 16, 32]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1 * scale]} />;
      case 'tetrahedron':
        return <tetrahedronGeometry args={[1 * scale]} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={[0.8 * scale]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[0.8 * scale]} />;
      default:
        return <sphereGeometry args={[1 * scale, 32, 32]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {getGeometry()}
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.9}
        emissive={color}
        emissiveIntensity={0.6}
        wireframe={Math.random() > 0.7}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#ff0080" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#8000ff" />
      <pointLight position={[0, 10, -10]} intensity={1.8} color="#ff00ff" />
      <pointLight position={[10, -10, 0]} intensity={1.5} color="#ff0040" />
      <pointLight position={[-10, 10, 5]} intensity={1.2} color="#c000ff" />
      
      {/* Main layer of shapes */}
      <FloatingGeometry position={[-8, 2, -5]} color="#ff0080" type="sphere" scale={1.2} />
      <FloatingGeometry position={[8, -2, -5]} color="#8000ff" type="box" scale={1.1} />
      <FloatingGeometry position={[-4, -4, -8]} color="#ff00ff" type="torus" scale={1.3} />
      <FloatingGeometry position={[6, 4, -6]} color="#ff0040" type="octahedron" scale={1.0} />
      <FloatingGeometry position={[0, -6, -10]} color="#c000ff" type="tetrahedron" scale={1.2} />
      <FloatingGeometry position={[-6, 6, -4]} color="#ff0080" type="dodecahedron" scale={0.9} />
      <FloatingGeometry position={[10, 0, -8]} color="#8000ff" type="icosahedron" scale={1.1} />
      <FloatingGeometry position={[-10, -2, -6]} color="#ff00ff" type="sphere" scale={1.3} />
      
      {/* Second layer - more shapes */}
      <FloatingGeometry position={[4, 8, -7]} color="#ff0080" type="box" scale={0.8} />
      <FloatingGeometry position={[-2, -8, -9]} color="#c000ff" type="torus" scale={1.0} />
      <FloatingGeometry position={[12, -4, -5]} color="#ff00ff" type="octahedron" scale={1.1} />
      <FloatingGeometry position={[-12, 3, -7]} color="#8000ff" type="tetrahedron" scale={0.9} />
      <FloatingGeometry position={[7, -7, -4]} color="#ff0040" type="sphere" scale={1.0} />
      <FloatingGeometry position={[-7, 7, -8]} color="#ff0080" type="dodecahedron" scale={1.2} />
      
      {/* Third layer - background shapes */}
      <FloatingGeometry position={[15, 2, -12]} color="#8000ff" type="icosahedron" scale={0.7} />
      <FloatingGeometry position={[-15, -3, -11]} color="#ff00ff" type="box" scale={0.8} />
      <FloatingGeometry position={[3, 12, -10]} color="#c000ff" type="torus" scale={0.9} />
      <FloatingGeometry position={[-5, -12, -8]} color="#ff0080" type="sphere" scale={0.6} />
      <FloatingGeometry position={[14, 6, -9]} color="#ff0040" type="octahedron" scale={0.8} />
      <FloatingGeometry position={[-14, -6, -10]} color="#8000ff" type="tetrahedron" scale={0.7} />
      
      {/* Fourth layer - distant shapes */}
      <FloatingGeometry position={[9, 15, -15]} color="#ff00ff" type="dodecahedron" scale={0.5} />
      <FloatingGeometry position={[-9, -15, -14]} color="#c000ff" type="icosahedron" scale={0.6} />
      <FloatingGeometry position={[18, 0, -16]} color="#ff0080" type="sphere" scale={0.4} />
      <FloatingGeometry position={[-18, 8, -15]} color="#8000ff" type="box" scale={0.5} />
      <FloatingGeometry position={[11, -11, -13]} color="#ff0040" type="torus" scale={0.7} />
      <FloatingGeometry position={[-11, 11, -12]} color="#ff00ff" type="octahedron" scale={0.6} />
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 75 }}
        onCreated={({ gl }) => {
          gl.setClearColor('#1a0b2e', 1);
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
