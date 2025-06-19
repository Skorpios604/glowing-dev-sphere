
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
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.015;
      meshRef.current.rotation.z += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 2;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.6 + position[2]) * 1.5;
      meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * 0.4 + position[1]) * 1;
    }
  });

  const getGeometry = () => {
    switch (type) {
      case 'box':
        return <boxGeometry args={[2 * scale, 2 * scale, 2 * scale]} />;
      case 'torus':
        return <torusGeometry args={[1.5 * scale, 0.6 * scale, 16, 32]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1.5 * scale]} />;
      case 'tetrahedron':
        return <tetrahedronGeometry args={[1.5 * scale]} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={[1.2 * scale]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[1.2 * scale]} />;
      default:
        return <sphereGeometry args={[1.5 * scale, 32, 32]} />;
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
        emissiveIntensity={0.8}
        wireframe={Math.random() > 0.5}
        roughness={0.1}
        metalness={0.7}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} color="#ff00ff" />
      <pointLight position={[10, 10, 10]} intensity={3} color="#ff0080" />
      <pointLight position={[-10, -10, -10]} intensity={2.5} color="#8000ff" />
      <pointLight position={[0, 10, -10]} intensity={3} color="#ff00ff" />
      <pointLight position={[10, -10, 0]} intensity={2.5} color="#ff0040" />
      <pointLight position={[-10, 10, 5]} intensity={2} color="#c000ff" />
      <pointLight position={[0, 0, 15]} intensity={2} color="#ff0080" />
      
      {/* Close layer - highly visible shapes */}
      <FloatingGeometry position={[-6, 2, -3]} color="#ff0080" type="sphere" scale={1.5} />
      <FloatingGeometry position={[6, -2, -3]} color="#8000ff" type="box" scale={1.3} />
      <FloatingGeometry position={[-3, -3, -5]} color="#ff00ff" type="torus" scale={1.4} />
      <FloatingGeometry position={[4, 4, -4]} color="#ff0040" type="octahedron" scale={1.2} />
      <FloatingGeometry position={[0, -5, -6]} color="#c000ff" type="tetrahedron" scale={1.3} />
      <FloatingGeometry position={[-5, 5, -2]} color="#ff0080" type="dodecahedron" scale={1.1} />
      <FloatingGeometry position={[7, 0, -5]} color="#8000ff" type="icosahedron" scale={1.2} />
      
      {/* Middle layer */}
      <FloatingGeometry position={[3, 7, -7]} color="#ff0080" type="box" scale={1.0} />
      <FloatingGeometry position={[-2, -7, -8]} color="#c000ff" type="torus" scale={1.1} />
      <FloatingGeometry position={[9, -3, -6]} color="#ff00ff" type="octahedron" scale={1.3} />
      <FloatingGeometry position={[-9, 3, -7]} color="#8000ff" type="tetrahedron" scale={1.0} />
      <FloatingGeometry position={[5, -6, -4]} color="#ff0040" type="sphere" scale={1.2} />
      <FloatingGeometry position={[-6, 6, -6]} color="#ff0080" type="dodecahedron" scale={1.4} />
      
      {/* Background layer */}
      <FloatingGeometry position={[12, 2, -10]} color="#8000ff" type="icosahedron" scale={0.9} />
      <FloatingGeometry position={[-12, -3, -9]} color="#ff00ff" type="box" scale={1.0} />
      <FloatingGeometry position={[2, 10, -8]} color="#c000ff" type="torus" scale={1.1} />
      <FloatingGeometry position={[-4, -10, -7]} color="#ff0080" type="sphere" scale={0.8} />
      <FloatingGeometry position={[11, 5, -8]} color="#ff0040" type="octahedron" scale={1.0} />
      <FloatingGeometry position={[-11, -5, -9]} color="#8000ff" type="tetrahedron" scale={0.9} />
      
      {/* Far background layer */}
      <FloatingGeometry position={[8, 12, -12]} color="#ff00ff" type="dodecahedron" scale={0.7} />
      <FloatingGeometry position={[-8, -12, -11]} color="#c000ff" type="icosahedron" scale={0.8} />
      <FloatingGeometry position={[15, 0, -13]} color="#ff0080" type="sphere" scale={0.6} />
      <FloatingGeometry position={[-15, 6, -12]} color="#8000ff" type="box" scale={0.7} />
      <FloatingGeometry position={[9, -9, -10]} color="#ff0040" type="torus" scale={0.9} />
      <FloatingGeometry position={[-9, 9, -10]} color="#ff00ff" type="octahedron" scale={0.8} />
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 12], fov: 60 }}
        onCreated={({ gl }) => {
          gl.setClearColor('#0a0015', 0);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.2;
        }}
      >
        <fog attach="fog" args={['#0a0015', 15, 25]} />
        <Scene />
      </Canvas>
    </div>
  );
}
