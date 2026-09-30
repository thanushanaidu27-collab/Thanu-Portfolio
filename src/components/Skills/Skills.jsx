import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaNodeJs, FaGitAlt, FaGithub, FaFigma,
} from 'react-icons/fa';
import { SiRedux, SiBootstrap, SiSpringboot, SiExpress, SiMysql, SiMongodb, SiPostman } from 'react-icons/si';
import { FiCode } from 'react-icons/fi';
import { skillCategories } from '../../data/portfolioData';
import './Skills.css';

const iconMap = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJs />,
  React: <FaReact />,
  Redux: <SiRedux />,
  Bootstrap: <SiBootstrap />,
  Java: <FaJava />,
  'Spring Boot': <SiSpringboot />,
  'Node.js': <FaNodeJs />,
  Express: <SiExpress />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  'VS Code': <FiCode />,
  Postman: <SiPostman />,
  Figma: <FaFigma />,
};

const Skills = () => {
  return (
    <section id="skills" className="section section-alt skills">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">02 / Skills</span>
          <h2 className="section-title">
            Tools I <span className="text-gradient">reach for daily</span>
          </h2>
          <p className="section-subtitle">
            A stack built for shipping full applications — interface to database — without losing sight of code quality.
          </p>
        </div>

        <div className="skills__categories">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="skills__category card-surface"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3 className="skills__category-title">{category.title}</h3>
              <div className="skills__list">
                {category.skills.map((skill, i) => (
                  <div key={skill.name} className="skills__item">
                    <div className="skills__item-head">
                      <span className="skills__item-icon">{iconMap[skill.name]}</span>
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-percent">{skill.level}%</span>
                    </div>
                    <div className="skills__bar-track">
                      <motion.div
                        className="skills__bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.15 + i * 0.08, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
