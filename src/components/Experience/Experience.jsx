import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import { experiences } from '../../data/portfolioData';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">03 / Experience</span>
          <h2 className="section-title">
            Where I&apos;ve <span className="text-gradient">put in the work</span>
          </h2>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className={`experience__item ${i % 2 === 0 ? 'experience__item--left' : 'experience__item--right'}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="experience__marker">
                <FiBriefcase />
              </div>
              <div className="experience__card card-surface">
                <span className="tag">{exp.duration}</span>
                <h3 className="experience__role">{exp.role}</h3>
                <h4 className="experience__company">{exp.company}</h4>
                <ul className="experience__points">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
