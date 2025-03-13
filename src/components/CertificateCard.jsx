import { motion } from 'framer-motion';

const CertificateCard = ({ certificate }) => {
  const { title, issuer, date, image, link } = certificate;

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
      <p className="text-tertiary mb-1">Issued by: {issuer}</p>
      <p className="text-tertiary mb-4">Date: {date}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:underline inline-block"
        >
          View Certificate
        </a>
      )}
    </motion.div>
  );
};

export default CertificateCard;