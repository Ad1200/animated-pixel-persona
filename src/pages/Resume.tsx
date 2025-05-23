
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DownloadCloud, GraduationCap, Briefcase } from 'lucide-react';
import { toast } from 'sonner';

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

type TimelineItemProps = {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'experience';
};

const TimelineItem = ({ year, title, organization, description, type }: TimelineItemProps) => {
  return (
    <motion.div variants={itemVariants} className="relative pl-10 pb-10 border-l border-muted last:border-0 last:pb-0">
      <div className="absolute left-[-8px] top-0">
        {type === 'education' ? (
          <div className="bg-accent/20 p-1 rounded-full">
            <GraduationCap className="h-5 w-5 text-accent" />
          </div>
        ) : (
          <div className="bg-primary/20 p-1 rounded-full">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
        )}
      </div>
      <span className="inline-block text-sm font-medium bg-muted text-muted-foreground px-3 py-1 rounded-full mb-2">
        {year}
      </span>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-primary font-medium mb-2">{organization}</p>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const Resume = () => {
  const educationData = [
    {
      year: '2018 - 2022',
      title: 'Master of Computer Science',
      organization: 'Stanford University',
      description: 'Specialized in Interactive Computer Graphics and Advanced Web Technologies with a focus on 3D graphics rendering and real-time web applications.',
    },
    {
      year: '2014 - 2018',
      title: 'Bachelor of Science in Computer Science',
      organization: 'MIT',
      description: 'Graduated with honors, focusing on software engineering and UI/UX design. Completed several award-winning projects in web development.',
    },
    {
      year: '2012 - 2014',
      title: 'Associate Degree in Web Development',
      organization: 'Community College of California',
      description: 'Developed strong foundations in HTML, CSS, JavaScript and responsive web design principles.',
    },
  ];

  const experienceData = [
    {
      year: '2022 - Present',
      title: 'Senior Frontend Developer',
      organization: 'TechVision Inc.',
      description: 'Leading the development of interactive web applications using React, Three.js and WebGL. Implemented performance optimizations resulting in 40% faster load times.',
    },
    {
      year: '2019 - 2022',
      title: 'UI/UX Developer',
      organization: 'Creative Digital Agency',
      description: 'Created animated user interfaces and interactive experiences for clients in entertainment, technology, and e-commerce sectors.',
    },
    {
      year: '2018 - 2019',
      title: 'Junior Web Developer',
      organization: 'StartUp Innovations',
      description: 'Developed responsive websites and implemented frontend features using modern JavaScript frameworks and CSS animations.',
    },
  ];

  const handleDownload = () => {
    toast.success('Resume download started', {
      description: 'Your document will be downloaded shortly.',
    });
    
    // In a real app, this would trigger an actual download
    console.log('Resume download triggered');
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          My educational background and professional journey
        </p>
        
        <Button 
          onClick={handleDownload} 
          size="lg" 
          className="glow-effect group"
        >
          <DownloadCloud className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          Download Resume (PDF)
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <Card className="p-6 border-muted hover:border-primary transition-all duration-300 h-full">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-accent" />
              Education
            </h2>
            <div className="mt-6">
              {educationData.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  organization={item.organization}
                  description={item.description}
                  type="education"
                />
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6 border-muted hover:border-primary transition-all duration-300 h-full">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Experience
            </h2>
            <div className="mt-6">
              {experienceData.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  organization={item.organization}
                  description={item.description}
                  type="experience"
                />
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
