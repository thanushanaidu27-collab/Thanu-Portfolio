import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="loader-mark">
        <span className="loader-bracket">{'<'}</span>
        <motion.span
          className="loader-dot"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span className="loader-bracket">{'/>'}</span>
      </div>
      <p className="loader-text">booting portfolio…</p>
    </motion.div>
  );
};

export default Loader;
