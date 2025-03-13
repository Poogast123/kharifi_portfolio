import { motion } from 'framer-motion';
import { FaCode, FaCloud, FaDatabase, FaChartLine, FaBrain, FaDocker, FaTools, FaNetworkWired } from 'react-icons/fa';
import SkillCard from '../components/SkillCard';

const About = () => {
  const skills = [
    { name: 'Programming and Scripting Languages', icon: <FaCode />, level: 90 },
    { name: 'Cloud Computing Platforms', icon: <FaCloud />, level: 85 },
    { name: 'Big Data Frameworks', icon: <FaDatabase />, level: 80 },
    { name: 'Data Management and Database Systems', icon: <FaDatabase />, level: 75 },
    { name: 'Data Analytics and Processing', icon: <FaChartLine />, level: 75 },
    { name: 'Machine Learning and AI', icon: <FaBrain />, level: 75 },
    { name: 'Containerization and Orchestration', icon: <FaDocker />, level: 75 },
    { name: 'DevOps and Automation', icon: <FaTools />, level: 75 },
    { name: 'Networking and Cloud Architecture', icon: <FaNetworkWired />, level: 75 },
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
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-light mb-4">My Story</h3>
            <div className="space-y-4 text-tertiary">
              <p>
              Hello! I'm Kharifi Oussama, a passionate second-year Big Data and Cloud Computing Engineering student at ENSET Mohammedia. I'm building a strong foundation in data analytics, cloud architecture, and distributed systems. My journey into technology began when I started my engineering studies, and since then, I've been excited to learn and grow in this dynamic field.              </p>
              <p>
              During my time at ENSET Mohammedia, I've gained knowledge in key areas like data management, cloud computing, and big data frameworks. I'm always eager to learn new concepts, experiment with emerging technologies, and deepen my understanding of how data-driven solutions can shape the future.              </p>
              <p>
              Although I'm still in the early stages of my studies, I have already worked on several projects that have allowed me to apply what I've learned in practical settings. I'm particularly interested in cloud infrastructure, machine learning, and data engineering, and I'm excited to continue developing my skills.              </p>
              <p>
              When I'm not coding or studying, you can find me graphic designing. I believe that maintaining a healthy balance between academics, work, and personal time is key to staying motivated and creative in my journey as an engineer.              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-light mb-4">My Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold text-light mt-8 mb-4">Education</h3>
            <div className="space-y-4">
              <div className="card">
                <h4 className="text-lg font-medium text-light">Engineering Student in Big Data and Cloud Computing</h4>
                <p className="text-tertiary">ENSET Mohammedia</p>
                <p className="text-tertiary">2023 - 2026</p>
              </div>
              
              <div className="card">
                <h4 className="text-lg font-medium text-light">CPGE Student – MP (Maths-Physics) Track</h4>
                <p className="text-tertiary">CPGE Taza</p>
                <p className="text-tertiary">2021 - 2023</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;