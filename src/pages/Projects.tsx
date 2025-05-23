
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

// Sample project data
const projectsData = [
  {
    id: 1,
    title: 'Immersive 3D Portfolio',
    description: 'A fully interactive 3D portfolio website built with Three.js and React Three Fiber.',
    tags: ['React', 'Three.js', 'WebGL'],
    image: 'placeholder.svg',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'E-commerce Dashboard',
    description: 'A responsive admin dashboard with dark theme for managing online store operations.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: 'placeholder.svg',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
  {
    id: 3,
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered responses and interactive UI animations.',
    tags: ['React', 'WebSockets', 'AI API'],
    image: 'placeholder.svg',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    id: 4,
    title: 'Motion Graphics Editor',
    description: 'Browser-based animation and motion graphics editor with timeline controls.',
    tags: ['Canvas API', 'React', 'Framer Motion'],
    image: 'placeholder.svg',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Crypto Dashboard',
    description: 'Real-time cryptocurrency tracking dashboard with interactive charts and alerts.',
    tags: ['React', 'WebSockets', 'Recharts'],
    image: 'placeholder.svg',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking application with gamified workout routines.',
    tags: ['React Native', 'Firebase', 'Health API'],
    image: 'placeholder.svg',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } }
};

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : filter === 'featured' 
      ? projectsData.filter(p => p.featured) 
      : projectsData.filter(p => p.tags.includes(filter));

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore my latest work spanning web development, interactive design, and creative coding
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-2 justify-center mb-12"
      >
        {['all', 'featured', 'React', 'Three.js', 'TypeScript'].map(tag => (
          <Button
            key={tag}
            variant={filter === tag ? "default" : "outline"}
            onClick={() => setFilter(tag)}
            className="capitalize"
          >
            {tag}
          </Button>
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants} className="flex">
            <Card className="overflow-hidden flex flex-col hover:border-primary transition-all duration-300 h-full">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                <CardDescription className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              
              <CardFooter className="flex justify-between pt-2">
                <Button variant="ghost" size="sm" asChild>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="glow-effect">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
