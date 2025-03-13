import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center pt-16"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="text-secondary mb-4">Hello, my name is</p>
              <h1 className="text-4xl md:text-6xl font-bold text-light mb-4">
                Kharifi Oussama
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-tertiary mb-6">
              I'm a Big Data and Cloud Computing Engineer.              </h2>
              <p className="text-tertiary max-w-lg mb-8">
              I specialize in building data-driven solutions and cloud computing systems, leveraging big data technologies to optimize performance and scalability. My work focuses on designing, developing, and deploying intelligent applications for real-world challenges.
              </p>
              <div className="flex space-x-4">
                <Link to="/projects" className="btn-primary flex items-center">
                  View My Work <FaArrowRight className="ml-2" />
                </Link>
                <Link to="/contact" className="btn-primary">
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary"
            >
              {/* Replace with your image */}
              <div className="w-full h-full bg-tertiary/30 flex items-center justify-center text-light">
              <img src="/images/photo.jpg" alt="Photo" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;