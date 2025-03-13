import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/80 border-t border-tertiary/20 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-tertiary text-sm">
              &copy; {currentYear} Kharifi Ouusama. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/Poogast123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:text-secondary transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/oussama-kharifi-08455633b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:text-secondary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:oussamakharifi2003@gmail.com"
              className="text-tertiary hover:text-secondary transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;