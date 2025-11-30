import { Heart, Mail, Phone, Linkedin } from 'lucide-react';
import { contactInfo, personalInfo } from '../data/portfolioData';
import '../styles/Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo" onClick={handleScrollToTop}>
              {personalInfo.name}
            </h3>
            <p className="footer-tagline">{personalInfo.role}</p>
            <p className="footer-description">
              Building scalable, secure, and high-performance applications
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <nav className="footer-nav">
              <a href="#home" className="footer-link">
                Home
              </a>
              <a href="#about" className="footer-link">
                About
              </a>
              <a href="#projects" className="footer-link">
                Projects
              </a>
              <a href="#education" className="footer-link">
                Education
              </a>
              <a href="#contact" className="footer-link">
                Contact
              </a>
            </nav>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Get In Touch</h4>
            <div className="footer-contact-items">
              <a href={`mailto:${contactInfo.email}`} className="footer-contact-item">
                <Mail size={16} />
                {contactInfo.email}
              </a>
              <a href={`tel:${contactInfo.phone}`} className="footer-contact-item">
                <Phone size={16} />
                {contactInfo.phone}
              </a>
            </div>
            <div className="footer-social">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            {currentYear} {personalInfo.name}. Built with <Heart size={14} className="heart-icon" /> using React, TypeScript & SCSS
          </p>
          {/* <p className="footer-availability">Available for Freelance Projects</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
