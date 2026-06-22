import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Smartphone, Globe, Zap, CheckCircle2, ChevronRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

type Category = 'All' | 'Web' | 'Mobile' | 'Automation';

const CATEGORIES: Category[] = ['All', 'Web', 'Mobile', 'Automation'];

const CATEGORY_STYLE: Record<string, { text: string; bg: string; border: string }> = {
  Web:        { text: 'text-blue-400',   bg: 'bg-blue-500/10',   border: 'border-blue-500/20' },
  Mobile:     { text: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20' },
  Automation: { text: 'text-amber-400',  bg: 'bg-amber-500/10',  border: 'border-amber-500/20' },
};

const CATEGORY_ICON: Record<string, typeof Code2> = {
  Web:        Globe,
  Mobile:     Smartphone,
  Automation: Zap,
};

/* 3-D tilt helpers — pure CSS transform, no JS state needed */
const onTilt = (e: React.MouseEvent<HTMLElement>) => {
  const el = e.currentTarget;
  const { left, top, width, height } = el.getBoundingClientRect();
  const x = (e.clientX - left) / width  - 0.5;   // -0.5 → 0.5
  const y = (e.clientY - top)  / height - 0.5;
  el.style.transform = `perspective(900px) rotateX(${-y * 9}deg) rotateY(${x * 9}deg) translateZ(6px)`;
};
const offTilt = (e: React.MouseEvent<HTMLElement>) => {
  e.currentTarget.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
};

const Projects = () => {
  const [active, setActive] = useState<Category>('All');
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="relative py-28 overflow-hidden">

      {/* Ambient orb */}
      <div className="absolute top-1/3 right-0 w-[440px] h-[440px] rounded-full bg-cyan-500/[0.05] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

        {/* ── Header ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-12"
        >
          <p className="font-mono text-indigo-400 text-xs uppercase tracking-[0.18em] mb-3">
            02. Work
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 mb-5" />
          <p className="text-slate-400 text-base max-w-xl">
            A selection of projects I've built across full-stack development, mobile apps, and automation.
          </p>
        </motion.div>

        {/* ── Filter tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.18, duration: 0.45, ease: 'easeOut' }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                active === cat
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white glass border border-white/[0.07] hover:border-white/[0.12]'
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600"
                  transition={{ type: 'spring', bounce: 0.25, duration: 0.45 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
          <span className="ml-auto self-center text-slate-600 text-xs font-mono tabular-nums">
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </span>
        </motion.div>

        {/* ── Cards ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{   opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => {
              const Icon  = CATEGORY_ICON[project.category]  ?? Code2;
              const style = CATEGORY_STYLE[project.category] ?? {
                text: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20',
              };

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.48, ease: 'easeOut' }}
                  onMouseMove={onTilt}
                  onMouseLeave={offTilt}
                  style={{ transformStyle: 'preserve-3d', transition: 'transform 0.15s ease, box-shadow 0.3s ease' }}
                  className="group relative flex flex-col p-6 rounded-2xl card"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${style.bg} ${style.border}`}>
                      <Icon size={21} className={style.text} />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap justify-end">
                      {project.status && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          {project.status}
                        </span>
                      )}
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${style.bg} ${style.border} ${style.text}`}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Title + desc */}
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-indigo-300 transition-colors duration-200 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5 flex-1">
                    {project.highlights.slice(0, 3).map((h, hi) => (
                      <li key={hi} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-indigo-400 mt-0.5 shrink-0" />
                        <span className="text-slate-400 text-xs leading-relaxed">{h}</span>
                      </li>
                    ))}
                    {project.highlights.length > 3 && (
                      <li className="flex items-center gap-1 text-xs text-slate-600 pl-5">
                        <ChevronRight size={11} />
                        +{project.highlights.length - 3} more features
                      </li>
                    )}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded-md font-mono bg-white/[0.04] text-slate-500 border border-white/[0.06] group-hover:text-slate-400 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
