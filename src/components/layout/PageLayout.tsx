
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import Navbar from './Navbar';
import ParticlesBackground from '../3d/ParticlesBackground';
import { useLocation } from 'react-router-dom';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smooth page transition
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="gradient-blur-bg"></div>

      {/* Interactive particle background */}
      <div className="fixed inset-0 -z-10">
        <ParticlesBackground />
      </div>

      {/* Hero glow */}
      <div className="fixed w-full h-full opacity-30 pointer-events-none -z-10">
        <div className="absolute top-[20%] left-[50%] w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-hero-glow"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main content with page transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="min-h-[calc(100vh-80px)] relative z-10 pt-20 pb-10 px-4 sm:px-6 lg:px-8"
        >
          {!isLoading && children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default PageLayout;
