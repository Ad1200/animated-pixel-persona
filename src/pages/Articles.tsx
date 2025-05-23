
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRightCircle, Clock } from 'lucide-react';

const articlesData = [
  {
    id: 1,
    title: 'Creating Immersive 3D Experiences with Three.js and React',
    excerpt: 'Learn how to build engaging 3D web experiences using Three.js integrated with React components.',
    date: 'May 15, 2023',
    readTime: '8 min read',
    category: 'Web Development',
    image: 'placeholder.svg',
  },
  {
    id: 2,
    title: 'Advanced Animation Techniques with Framer Motion',
    excerpt: 'Discover powerful animation patterns and performance optimization techniques for complex UI animations.',
    date: 'April 22, 2023',
    readTime: '12 min read',
    category: 'UI Animation',
    image: 'placeholder.svg',
  },
  {
    id: 3,
    title: 'Building a Custom SVG Animation Library from Scratch',
    excerpt: 'A step-by-step guide to creating your own lightweight SVG animation system for interactive websites.',
    date: 'March 10, 2023',
    readTime: '15 min read',
    category: 'Creative Coding',
    image: 'placeholder.svg',
  },
  {
    id: 4,
    title: 'Optimizing React Applications for Maximum Performance',
    excerpt: 'Strategies and best practices to make your React applications lightning fast and resource-efficient.',
    date: 'February 28, 2023',
    readTime: '10 min read',
    category: 'Performance',
    image: 'placeholder.svg',
  },
  {
    id: 5,
    title: 'Creating Accessible Animations: Inclusive Motion Design',
    excerpt: 'How to design and implement animations that are beautiful while respecting user accessibility needs.',
    date: 'January 15, 2023',
    readTime: '7 min read',
    category: 'Accessibility',
    image: 'placeholder.svg',
  },
  {
    id: 6,
    title: 'WebGL Fundamentals: Understanding the Core Concepts',
    excerpt: 'A deep dive into WebGL programming concepts essential for creative web development.',
    date: 'December 5, 2022',
    readTime: '14 min read',
    category: '3D Graphics',
    image: 'placeholder.svg',
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

const Articles = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Articles & Insights</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Thoughts, tutorials, and explorations on web development, design, and creative coding
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {articlesData.map((article) => (
          <motion.div key={article.id} variants={itemVariants} className="flex">
            <Card className="overflow-hidden flex flex-col hover:border-primary transition-all duration-300 h-full">
              <div className="overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold line-clamp-2">{article.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
              </CardContent>
              
              <CardFooter className="flex justify-between items-center pt-2">
                <span className="text-sm text-muted-foreground">{article.date}</span>
                <Button variant="ghost" size="sm" className="group text-primary">
                  Read More
                  <ArrowRightCircle className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Articles;
