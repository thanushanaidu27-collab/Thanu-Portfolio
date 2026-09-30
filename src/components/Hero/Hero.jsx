import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';

const useTypingEffect = (words, typingSpeed = 90, deletingSpeed = 45, pause = 1400) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === currentWord) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? currentWord.slice(0, prev.length - 1) : currentWord.slice(0, prev.length + 1),
          );
        },
        deleting ? deletingSpeed : typingSpeed,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
};

const socials = [
  { icon: <FiGithub />, href: personalInfo.github, label: 'GitHub' },
  { icon: <FiLinkedin />, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: <FiMail />, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

const Hero = () => {
  const typedRole = useTypingEffect(personalInfo.roles);

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__blob hero__blob--one" />
        <div className="hero__blob hero__blob--two" />
        <div className="hero__grid" />
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className={`hero__particle hero__particle--${i}`} />
        ))}
      </div>

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 31 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">Hello, I&apos;m</span>
          <h1 className="hero__name">{personalInfo.name}</h1>

          <div className="hero__role" aria-live="polite">
            <span className="hero__role-text">{typedRole}</span>
            <span className="hero__cursor" />
          </div>

          <p className="hero__intro">{personalInfo.intro}</p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href={personalInfo.resumeUrl} download className="btn btn-outline">
              <FiDownload /> Download Resume
            </a>
          </div>

          <div className="hero__socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="hero__social-icon"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          <motion.div
            className="hero__portrait-ring"
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="hero__portrait">
              <span className="hero__portrait-tag hero__portrait-tag--1">React</span>
              <span className="hero__portrait-tag hero__portrait-tag--2">Java</span>
              <span className="hero__portrait-tag hero__portrait-tag--3">Spring</span>
              <div className="hero__portrait-mark">Thanu</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll-cue"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FiArrowDown />
      </motion.a>
    </section>
  );
};

export default Hero;
