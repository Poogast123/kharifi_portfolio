import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  // Sample project data - replace with your own projects
  const projects = [
    {
      title: 'AI-Driven Irrigation Optimization',
      description: 'A machine learning-powered irrigation system that analyzes soil moisture, humidity, and weather data to predict when a water pump should run, optimizing water usage and irrigation efficiency.',
      technologies: ['Python'],
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
      githubLink: 'https://github.com/Poogast123/wateringapp',
      liveLink: '',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container mx-auto px-6">
        <h2 className="section-heading">My Projects</h2>
        <p className="text-tertiary max-w-2xl mb-12">
          Here are some of the projects I've worked on. Each project represents different skills and technologies I've mastered throughout my journey as a developer.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;