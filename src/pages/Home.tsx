
import { motion } from 'framer-motion';
import { ArrowRightCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FloatingIcons from '@/components/3d/FloatingIcons';
import { Github, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

const socialMediaIcons = [
  { 
    icon: <Github className="text-primary hover:text-white transition-colors duration-300" />,
    url: "https://github.com",
    label: "GitHub"
  },
  { 
    icon: <Linkedin className="text-primary hover:text-white transition-colors duration-300" />,
    url: "https://linkedin.com",
    label: "LinkedIn"
  },
  { 
    icon: <Twitter className="text-primary hover:text-white transition-colors duration-300" />,
    url: "https://twitter.com",
    label: "Twitter"
  },
  { 
    icon: <Youtube className="text-primary hover:text-white transition-colors duration-300" />,
    url: "https://youtube.com",
    label: "YouTube"
  },
  { 
    icon: <Instagram className="text-primary hover:text-white transition-colors duration-300" />,
    url: "https://instagram.com",
    label: "Instagram"
  }
];

const Home = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] justify-center">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <motion.p
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="inline-block text-sm sm:text-base font-medium text-primary px-3 py-1 border border-primary/30 rounded-full"
              >
                Hello, I'm a Developer
              </motion.p>
              
              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
              >
                Creating digital <span className="text-primary animate-pulse-glow inline-block">experiences</span> that inspire
              </motion.h1>
              
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-lg text-muted-foreground max-w-xl leading-relaxed"
              >
                I'm a passionate developer specializing in creating immersive web experiences using modern technologies like React, Three.js, and Framer Motion.
              </motion.p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <Button asChild className="group glow-effect" size="lg">
                  <Link to="/contact">
                    Contact Me
                    <ArrowRightCircle className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <Button asChild variant="outline" size="lg">
                  <Link to="/projects">View Projects</Link>
                </Button>
              </motion.div>
            </div>
            
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-wrap gap-5 items-center pt-4"
            >
              {socialMediaIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted/50 hover:bg-muted p-2 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block relative h-96"
          >
            <FloatingIcons
              icons={[
                { icon: "⚛️", position: [-2, 1.5, 0] },
                { icon: "🖥️", position: [2, -1, 0] },
                { icon: "🔥", position: [-1, -2, 0] },
                { icon: "✨", position: [1, 2, 0] },
                { icon: "🌐", position: [0, 0, 0] },
              ]}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
