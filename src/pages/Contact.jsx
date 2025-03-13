import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'oussamakharifi2003@gmail.com',
      link: 'mailto:oussamakharifi2003@gmail.com',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+212 625917125',
      link: 'tel:+212625917125',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'Mohammedia, Morocco',
      link: null,
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      content: 'linkedin.com/in/oussama-kharifi-08455633b',
      link: 'https://www.linkedin.com/in/oussama-kharifi-08455633b/',
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      content: 'github.com/Poogast123',
      link: 'https://github.com/Poogast123',
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
        <h2 className="section-heading">Contact Me</h2>
        <p className="text-tertiary max-w-2xl mb-12">
          Feel free to reach out to me for job opportunities, collaborations, or just to say hello. I'll get back to you as soon as possible.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-light mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-secondary text-xl mt-1 mr-4" aria-label={info.title}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-light font-medium">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : ''}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-tertiary hover:text-secondary transition-colors duration-300"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-tertiary">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-light mb-6">Let's Connect!</h3>
            
            <p className="text-tertiary mb-6">
              If you'd like to get in touch, feel free to reach out via email, LinkedIn, or any of the platforms listed on the left. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            

          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;