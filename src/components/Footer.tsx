import { Heart, Mail, ArrowUp } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { contactInfo, personalInfo } from '../data/portfolioData';

const NAV_LINKS = ['home', 'about', 'projects', 'education', 'contact'];

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.05] py-12 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.12] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollTop}
              className="group inline-flex items-center gap-2.5 mb-2"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold font-display text-xs">
                RM
              </span>
              <span className="font-display font-semibold text-white group-hover:text-indigo-400 transition-colors duration-200 text-sm">
                {personalInfo.name}
              </span>
            </button>
            <p className="text-slate-500 text-xs">{personalInfo.role}</p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-slate-500 hover:text-white text-sm capitalize transition-colors duration-200 hover:underline underline-offset-4"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Social + scroll top */}
          <div className="flex items-center gap-2">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-xl glass border border-white/[0.07] flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/30 transition-all duration-200"
            >
              <FaLinkedin size={15} />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              aria-label="Email"
              className="w-9 h-9 rounded-xl glass border border-white/[0.07] flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/30 transition-all duration-200"
            >
              <Mail size={15} />
            </a>
            <button
              onClick={scrollTop}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-xl glass border border-white/[0.07] flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/30 transition-all duration-200"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
          <p className="flex items-center gap-1.5">
            © {year} {personalInfo.name}. Built with
            <Heart size={11} className="text-rose-500 fill-rose-500" />
            using React, TypeScript &amp; Tailwind CSS
          </p>
          <p className="font-mono">v2.0</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
