import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Smartphone, Cloud, GitBranch, Layout, Cpu, BrainCircuit } from 'lucide-react';
import { personalInfo, skills } from '../data/portfolioData';

/* Eased counter that animates from 0 → target when inView becomes true */
function useCounter(target: number, inView: boolean, duration = 1.6) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [inView, target, duration]);
  return count;
}

const STATS = [
  { target: 4,  suffix: '+', label: 'Years Experience' },
  { target: 10, suffix: '+', label: 'Projects Delivered' },
  { target: 20, suffix: '+', label: 'Technologies' },
  { target: 5,  suffix: '+', label: 'Happy Clients' },
];

const ICON_MAP: Record<string, typeof Code2> = {
  Backend:         Code2,
  Frontend:        Layout,
  Mobile:          Smartphone,
  Database:        Database,
  Tools:           GitBranch,
  'Cloud & DevOps': Cloud,
  Architecture:    Cpu,
  'AI / LLM':      BrainCircuit,
};

/* Each card owns its counter so hooks run unconditionally */
const StatCard = ({
  stat, inView, index,
}: {
  stat: typeof STATS[number];
  inView: boolean;
  index: number;
}) => {
  const count = useCounter(stat.target, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.09, duration: 0.48, ease: 'easeOut' }}
      className="group p-6 rounded-2xl card hover:-translate-y-1 cursor-default"
    >
      <div className="font-display font-extrabold text-4xl text-gradient mb-1 leading-none tabular-nums">
        {count}{stat.suffix}
      </div>
      <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
    </motion.div>
  );
};

const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const childFade = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.48, ease: 'easeOut' as const } },
};

const About = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.15, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1,  triggerOnce: true });

  return (
    <section id="about" className="relative py-28 overflow-hidden">

      {/* Ambient orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-500/[0.05] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full bg-indigo-500/[0.05] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

        {/* ── Section header ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-16"
        >
          <p className="font-mono text-indigo-400 text-xs uppercase tracking-[0.18em] mb-3">
            01. About
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4 tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
        </motion.div>

        {/* ── Bio + Stats ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-20">

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.55, ease: 'easeOut' }}
          >
            <p className="text-slate-300 text-base leading-relaxed mb-7">
              {personalInfo.about}
            </p>

            {/* Open-to-work pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl glass border border-emerald-500/20">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <p className="text-sm text-slate-300 font-medium">
                <span className="text-emerald-400 font-semibold">Open for collaboration</span>
                {' '}— available for exciting projects
              </p>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.26, duration: 0.55, ease: 'easeOut' }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} inView={headerInView} index={i} />
            ))}
          </motion.div>
        </div>

        {/* ── Skills grid ── */}
        <div ref={skillsRef}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-10"
          >
            <h3 className="font-display font-bold text-2xl text-white mb-1">Technical Skills</h3>
            <p className="text-slate-500 text-sm">Technologies and tools I work with</p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={skillsInView ? 'show' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {skills.map((group) => {
              const Icon = ICON_MAP[group.category] ?? Code2;
              return (
                <motion.div
                  key={group.category}
                  variants={childFade}
                  className="group p-5 rounded-2xl card hover:-translate-y-1 cursor-default"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={19} className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-200" />
                  </div>

                  <h4 className="font-display font-semibold text-white text-sm mb-3">
                    {group.category}
                  </h4>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-0.5 rounded-md bg-white/[0.05] text-slate-400 border border-white/[0.06] hover:text-slate-200 hover:border-indigo-500/25 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
