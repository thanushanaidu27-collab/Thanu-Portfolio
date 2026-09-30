import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { aboutInfo } from '../../data/portfolioData';
import './About.css';

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="about__stat-value">
      {display}
      {suffix}
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">01 / About Me</span>
          <h2 className="section-title">
            The developer <span className="text-gradient">behind the code</span>
          </h2>
        </div>

        <div className="about__grid">
          <motion.div
            className="about__image-wrap"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.div
              className="about__image-border"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <div className="about__image">
              <span>thanu</span>
            </div>
          </motion.div>

          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h3 className="about__heading">
              Building software that solves real problems, one clean commit at a time.
            </h3>
            <ul className="about__points">
              {aboutInfo.points.map((point) => (
                <li key={point}>
                  <FiCheckCircle className="about__point-icon" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="about__stats">
          {aboutInfo.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="about__stat-card card-surface"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="about__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
