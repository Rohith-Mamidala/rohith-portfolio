import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { label: 'Home',      href: '#home' },
  { label: 'About',     href: '#about' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [isOpen,   setIsOpen]     = useState(false);
  const [active,   setActive]     = useState('home');
  const { theme, toggle }         = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map(l => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= 120 && bottom > 120) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 glass shadow-[0_4px_32px_rgba(0,0,0,0.4)] border-b border-white/[0.06]'
            : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            className="group flex items-center gap-2.5 select-none"
          >
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold font-display text-sm shadow-glow group-hover:shadow-glow-lg transition-shadow duration-300">
              RM
            </span>
            <span className="hidden sm:block font-display font-semibold text-slate-300 group-hover:text-white transition-colors duration-200 text-sm tracking-tight">
              Rohith Mamidala
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-white/[0.07] border border-white/[0.09]"
                      transition={{ type: 'spring', bounce: 0.18, duration: 0.45 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Theme toggle + Hire Me + hamburger */}
          <div className="flex items-center gap-2">
            {/* Light / dark toggle */}
            <motion.button
              onClick={toggle}
              whileTap={{ scale: 0.88 }}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-9 h-9 flex items-center justify-center rounded-lg glass border border-white/[0.08] text-slate-400 hover:text-white transition-colors duration-200"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.span
                    key="moon"
                    initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{   opacity: 0, rotate:  30, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={16} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="sun"
                    initial={{ opacity: 0, rotate: 30, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{   opacity: 0, rotate: -30, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <button
              onClick={() => scrollTo('#contact')}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-sm font-medium hover:bg-indigo-500/18 hover:border-indigo-400/45 hover:text-indigo-300 transition-all duration-200"
            >
              Hire Me
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg glass border border-white/[0.08] text-slate-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{  opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-[60px] z-40 glass border-b border-white/[0.06] px-5 py-5 md:hidden animate-slide-down"
          >
            <nav className="flex flex-col gap-1 max-w-sm mx-auto">
              {NAV_LINKS.map((link, i) => {
                const isActive = active === link.href.slice(1);
                return (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055 }}
                    onClick={() => scrollTo(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20'
                        : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
              <button
                onClick={() => scrollTo('#contact')}
                className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold hover:from-indigo-500 hover:to-violet-500 transition-all duration-200"
              >
                Hire Me
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
