import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../../data/portfolioData';
import './Projects.css';

const filters = ['All', 'React', 'Java', 'JavaScript'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section section-alt projects">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">04 / Projects</span>
          <h2 className="section-title">
            Things I&apos;ve <span className="text-gradient">built and shipped</span>
          </h2>
        </div>

        <div className="projects__filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`projects__filter-btn ${activeFilter === filter ? 'projects__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="projects__grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                className="projects__card card-surface"
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
              >
                <div className="projects__thumb">
                  <span className="projects__thumb-label">{project.title.slice(0, 2).toUpperCase()}</span>
                  <div className="projects__overlay">
                    <a href={project.live} target="_blank" rel="noreferrer" aria-label="View live demo">
                      <FiExternalLink /> Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="View GitHub repository">
                      <FiGithub /> GitHub
                    </a>
                  </div>
                </div>

                <div className="projects__body">
                  <h3 className="projects__title">{project.title}</h3>
                  <p className="projects__desc">{project.description}</p>
                  <div className="projects__tech">
                    {project.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
