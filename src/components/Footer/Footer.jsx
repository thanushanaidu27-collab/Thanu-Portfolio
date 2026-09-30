import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Footer.css';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="navbar__logo footer__logo">
            <span className="navbar__logo-bracket">{'<'}</span>
            Thanu<span className="text-gradient">.dev</span>
            <span className="navbar__logo-bracket">{'/>'}</span>
          </a>
          <p className="footer__tagline">Building thoughtful software, one project at a time.</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          {quickLinks.map((link) => (
            <a key={link.href} href={link.href} className="footer__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
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
      </div>

      <div className="footer__bottom">
        <p>© {year} {personalInfo.name}. All rights reserved.</p>
        <p className="footer__signature">{'// built with React + Framer Motion'}</p>
      </div>
    </footer>
  );
};

export default Footer;
