import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { certifications } from '../../data/portfolioData';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">07 / Certifications</span>
          <h2 className="section-title">
            Credentials <span className="text-gradient">that back it up</span>
          </h2>
        </div>

        <div className="certifications__grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              className="certifications__card card-surface"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className="certifications__icon">
                <FiAward />
              </div>
              <h3 className="certifications__name">{cert.name}</h3>
              <p className="certifications__org">{cert.org}</p>
              <span className="tag">{cert.year}</span>
              <a href={cert.url} target="_blank" rel="noreferrer" className="certifications__link">
                View Certificate <FiExternalLink />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
