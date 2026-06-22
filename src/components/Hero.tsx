import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Mail, MapPin } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { personalInfo, contactInfo } from '../data/portfolioData';

const TECH_STACK = [
  'Java', 'Spring Boot', 'Microservices', 'React.js', 'React Native',
  'TypeScript', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'AWS', 'Android',
  'Node.js', 'Express.js', 'Flutter', 'OpenAI API', 'RAG Model', 'LLM / Ollama',
];

/* Framer-motion v12: ease must be a named string, not a raw number[] */
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 22 },
  animate:    { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: 'easeOut' as const },
});

const Hero = () => {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full bg-indigo-600/[0.08] blur-[140px] animate-glow pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full bg-violet-600/[0.08] blur-[140px] animate-glow pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-cyan-500/[0.04] blur-[180px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: text ── */}
          <div className="order-2 lg:order-1">

            {/* Status badge */}
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 text-xs text-slate-400 mb-7 font-medium"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for collaboration
              <span className="w-px h-3 bg-white/10" />
              <MapPin size={11} className="text-slate-500" />
              <span className="text-slate-500">India</span>
            </motion.div>

            {/* Greeting */}
            <motion.p {...fadeUp(0.08)} className="font-display text-slate-400 font-medium text-lg mb-1">
              Hi, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.15)}
              className="font-display font-extrabold text-5xl sm:text-6xl lg:text-[4.25rem] text-white leading-[1.08] mb-4 tracking-tight"
            >
              {personalInfo.name.split(' ')[0]}{' '}
              <span className="text-gradient">{personalInfo.name.split(' ')[1]}</span>
            </motion.h1>

            {/* Role — character-by-character reveal with blinking cursor */}
            <motion.p
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="font-display font-semibold text-xl sm:text-2xl text-slate-300 mb-5"
            >
              {personalInfo.role.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 + i * 0.038, duration: 0 }}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                className="inline-block w-[2px] h-[1.1em] bg-indigo-400 ml-0.5 align-middle rounded-sm"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
              />
            </motion.p>

            {/* Bio */}
            <motion.p {...fadeUp(0.28)} className="text-slate-400 text-base leading-relaxed mb-9 max-w-[480px]">
              Building scalable, secure, high-performance applications with Java, Spring Boot,
              React and cloud technologies. 4+ years of enterprise experience.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.34)} className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => scrollTo('#projects')}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-glow hover:shadow-glow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                View My Work
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail size={15} />
                Get In Touch
              </button>
            </motion.div>

            {/* Social */}
            <motion.div {...fadeUp(0.4)} className="flex items-center gap-2">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] border border-transparent hover:border-white/[0.08] transition-all duration-200 text-sm font-medium"
              >
                <FaLinkedin size={15} className="text-indigo-400" />
                LinkedIn
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] border border-transparent hover:border-white/[0.08] transition-all duration-200 text-sm font-medium"
              >
                <Mail size={15} className="text-violet-400" />
                Email
              </a>
            </motion.div>
          </div>

          {/* ── Right: photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.8, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative select-none">
              {/* Spinning outer ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-500/20 via-violet-500/15 to-cyan-500/20 blur-lg animate-spin-slow" />
              {/* Static ring */}
              <div className="absolute -inset-1.5 rounded-full border border-indigo-500/20" />

              {/* Photo */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-[310px] lg:h-[310px] rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_80px_rgba(99,102,241,0.18)] animate-float">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Rohith Mamidala"
                  className="w-full h-full object-cover object-top"
                />
                <div className="hero-photo-overlay absolute inset-0 bg-gradient-to-t from-[#020817]/30 via-transparent to-transparent" />
              </div>

              {/* Floating badges — 6 around the photo */}

              {/* Top right: Spring Boot */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-3 sm:-right-8 glass rounded-xl px-3 py-2 text-xs font-semibold text-indigo-300 border border-indigo-500/25 shadow-glow whitespace-nowrap"
              >
                Spring Boot
              </motion.div>

              {/* Bottom left: React.js */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-2 -left-4 sm:-left-10 glass rounded-xl px-3 py-2 text-xs font-semibold text-violet-300 border border-violet-500/25 shadow-glow-violet whitespace-nowrap"
              >
                React.js
              </motion.div>

              {/* Left center: PostgreSQL */}
              <motion.div
                animate={{ x: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -left-10 sm:-left-16 -translate-y-1/2 glass rounded-xl px-3 py-2 text-xs font-semibold text-cyan-300 border border-cyan-500/25 shadow-glow-cyan whitespace-nowrap"
              >
                PostgreSQL
              </motion.div>

              {/* Top left: Java */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute -top-2 -left-4 sm:-left-10 glass rounded-xl px-3 py-2 text-xs font-semibold text-amber-300 border border-amber-500/25 whitespace-nowrap"
              >
                Java
              </motion.div>

              {/* Right center: Node.js */}
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute top-1/2 -right-8 sm:-right-12 -translate-y-1/2 glass rounded-xl px-3 py-2 text-xs font-semibold text-emerald-300 border border-emerald-500/25 whitespace-nowrap"
              >
                Node.js
              </motion.div>

              {/* Bottom right: TypeScript */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}
                className="absolute -bottom-2 -right-3 sm:-right-8 glass rounded-xl px-3 py-2 text-xs font-semibold text-blue-300 border border-blue-500/25 whitespace-nowrap"
              >
                TypeScript
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Tech marquee ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-20 border-t border-white/[0.05] pt-8"
        >
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em] text-center mb-5 font-medium">
            Tech Stack
          </p>
          <div className="relative overflow-hidden">
            <div className="marquee-fade-l absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#020817] to-transparent z-10 pointer-events-none" />
            <div className="marquee-fade-r absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#020817] to-transparent z-10 pointer-events-none" />
            <div className="flex gap-3 animate-marquee whitespace-nowrap w-max">
              {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                <span
                  key={i}
                  className="tech-pill inline-flex items-center px-4 py-2 rounded-full glass border border-white/[0.07] text-slate-400 text-xs font-medium hover:text-slate-200 hover:border-indigo-500/25 transition-colors duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.button
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors duration-200"
      >
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={22} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
