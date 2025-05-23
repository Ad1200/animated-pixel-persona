
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 95 },
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'HTML & CSS', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Redux', level: 80 },
    ],
  },
  {
    title: 'Creative Development',
    skills: [
      { name: 'Three.js', level: 85 },
      { name: 'WebGL', level: 75 },
      { name: 'GSAP', level: 82 },
      { name: 'Framer Motion', level: 90 },
      { name: 'Canvas API', level: 78 },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 83 },
      { name: 'MongoDB', level: 80 },
      { name: 'Firebase', level: 87 },
      { name: 'RESTful APIs', level: 88 },
    ],
  },
  {
    title: 'Other Skills',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Responsive Design', level: 93 },
      { name: 'UI/UX Principles', level: 85 },
      { name: 'Performance Optimization', level: 82 },
      { name: 'Testing (Jest, RTL)', level: 78 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } }
};

const skillBarVariants = {
  hidden: { width: 0 },
  show: (level: number) => ({ 
    width: `${level}%`,
    transition: { 
      duration: 1.2, 
      ease: [0.215, 0.61, 0.355, 1],
      delay: 0.3
    }
  })
};

const Skills = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          An overview of my technical abilities and expertise across different development domains
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {skillCategories.map((category, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full overflow-hidden border-muted hover:border-primary/50 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        custom={skill.level}
                        variants={skillBarVariants}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
