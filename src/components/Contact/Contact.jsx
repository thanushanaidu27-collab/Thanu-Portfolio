import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Contact.css';

const initialForm = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim()) next.subject = 'Please enter a subject.';
    if (!form.message.trim()) next.message = 'Please write a message.';
    else if (form.message.trim().length < 10) next.message = 'Message should be at least 10 characters.';
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 3500);
    }, 1100);
  };

  const infoItems = [
    { icon: <FiPhone />, label: 'Phone', value: personalInfo.phone },
    { icon: <FiMail />, label: 'Email', value: personalInfo.email },
    { icon: <FiMapPin />, label: 'Location', value: personalInfo.location },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">08 / Contact</span>
          <h2 className="section-title">
            Let&apos;s <span className="text-gradient">build something together</span>
          </h2>
          <p className="section-subtitle">
            Have a role, project, or idea in mind? My inbox is open — I usually reply within a day.
          </p>
        </div>

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact__info-title">Contact Information</h3>
            <div className="contact__info-list">
              {infoItems.map((item) => (
                <div key={item.label} className="contact__info-item">
                  <span className="contact__info-icon">{item.icon}</span>
                  <div>
                    <p className="contact__info-label">{item.label}</p>
                    <p className="contact__info-value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__socials">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hero__social-icon">
                <FiGithub />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hero__social-icon">
                <FiLinkedin />
              </a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="hero__social-icon">
                <FiMail />
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact__form card-surface"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? 'contact__input--error' : ''}
                  placeholder="Jane Doe"
                />
                {errors.name && <span className="contact__error">{errors.name}</span>}
              </div>

              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? 'contact__input--error' : ''}
                  placeholder="jane@example.com"
                />
                {errors.email && <span className="contact__error">{errors.email}</span>}
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                className={errors.subject ? 'contact__input--error' : ''}
                placeholder="Let's collaborate"
              />
              {errors.subject && <span className="contact__error">{errors.subject}</span>}
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className={errors.message ? 'contact__input--error' : ''}
                placeholder="Tell me a bit about what you have in mind…"
              />
              {errors.message && <span className="contact__error">{errors.message}</span>}
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary contact__submit"
              disabled={status === 'submitting'}
              whileTap={{ scale: 0.96 }}
            >
              {status === 'success' ? (
                <>
                  <FiCheckCircle /> Message Sent
                </>
              ) : status === 'submitting' ? (
                'Sending…'
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
