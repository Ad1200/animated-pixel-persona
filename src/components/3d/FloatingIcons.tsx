
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Preload } from '@react-three/drei';
import { Suspense } from 'react';
import { Html } from '@react-three/drei';

interface IconProps {
  position: [number, number, number];
  icon: React.ReactNode;
  rotationSpeed?: number;
}

const Icon = ({ position, icon, rotationSpeed = 0.01 }: IconProps) => {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={1}
      position={position}
    >
      <Html
        transform
        distanceFactor={10}
        position={[0, 0, 0]}
        style={{
          fontSize: '3rem',
          color: 'white',
          transition: 'all 0.3s',
        }}
      >
        <div className="text-5xl cursor-pointer transform transition-all duration-300 hover:scale-125">
          {icon}
        </div>
      </Html>
    </Float>
  );
};

interface FloatingIconsProps {
  icons: {
    icon: React.ReactNode;
    position: [number, number, number];
  }[];
}

const FloatingIcons = ({ icons }: FloatingIconsProps) => {
  return (
    <div className="w-full h-64 md:h-80">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          {icons.map((item, index) => (
            <Icon key={index} position={item.position} icon={item.icon} />
          ))}
          <OrbitControls 
            enableZoom={false} 
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2} 
            minPolarAngle={Math.PI / 2} 
          />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingIcons;
