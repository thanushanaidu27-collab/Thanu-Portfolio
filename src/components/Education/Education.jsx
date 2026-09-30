import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';
import { education } from '../../data/portfolioData';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section section-alt education">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">06 / Education</span>
          <h2 className="section-title">
            Academic <span className="text-gradient">background</span>
          </h2>
        </div>

        <div className="education__timeline">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="education__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <div className="education__marker">
                <FiBookOpen />
              </div>
              <div className="education__card card-surface">
                <span className="tag">{edu.year}</span>
                <h3 className="education__degree">{edu.degree}</h3>
                <h4 className="education__college">{edu.college}</h4>
                <p className="education__achievement">{edu.achievement}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
