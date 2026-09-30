import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiLayout } from 'react-icons/fi';
import { services } from '../../data/portfolioData';
import './Services.css';

const iconMap = {
  code: <FiCode />,
  responsive: <FiSmartphone />,
  ui: <FiLayout />,
};

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">05 / Services</span>
          <h2 className="section-title">
            How I <span className="text-gradient">can help you</span>
          </h2>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="services__card card-surface"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -10 }}
            >
              <div className="services__icon">{iconMap[service.icon]}</div>
              <h3 className="services__title">{service.title}</h3>
              <p className="services__desc">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
