import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { title, description, technologies, image, githubLink, liveLink } = project;

  return (
    <motion.div
      className="card"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-video overflow-hidden rounded-md mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-semibold text-light mb-2">{title}</h3>
      <p className="text-tertiary mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-tertiary/20 text-secondary px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary hover:text-secondary transition-colors duration-300 flex items-center"
          >
            <FaGithub className="mr-1" /> Code
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary hover:text-secondary transition-colors duration-300 flex items-center"
          >
            <FaExternalLinkAlt className="mr-1" /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;