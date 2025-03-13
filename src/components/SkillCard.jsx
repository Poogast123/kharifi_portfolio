import { motion } from 'framer-motion';

const SkillCard = ({ skill }) => {
  const { name, icon, level } = skill;

  return (
    <motion.div
      className="card flex flex-col items-center"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-4xl mb-3 text-secondary">{icon}</div>
      <h3 className="text-lg font-medium text-light mb-2">{name}</h3>
      <div className="w-full bg-tertiary/20 rounded-full h-2.5 mt-2">
        <div
          className="bg-secondary h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <span className="text-xs text-tertiary mt-1">{level}%</span>
    </motion.div>
  );
};

export default SkillCard;