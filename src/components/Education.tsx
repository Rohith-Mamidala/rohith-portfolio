import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar, Hash } from 'lucide-react';
import { education, certificates } from '../data/portfolioData';

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="education" className="relative py-28 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-[0.18] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[360px] h-[360px] rounded-full bg-indigo-500/[0.05] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

        {/* ── Header ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-16"
        >
          <p className="font-mono text-indigo-400 text-xs uppercase tracking-[0.18em] mb-3">
            03. Background
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4 tracking-tight">
            Education &{' '}
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ── Timeline ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.55, ease: 'easeOut' }}
          >
            {/* Sub-heading */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                <GraduationCap size={20} className="text-indigo-400" />
              </div>
              <h3 className="font-display font-semibold text-xl text-white">Academic Background</h3>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-4 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/25 to-transparent" />

              <div className="space-y-7">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -18 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.28 + i * 0.13, duration: 0.48, ease: 'easeOut' }}
                    className="relative pl-11"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-glow shrink-0">
                      <div className="w-2 h-2 rounded-full bg-white/90" />
                    </div>

                    <div className="p-5 rounded-2xl card hover:-translate-y-0.5">
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-2 font-mono">
                        <Calendar size={11} />
                        {edu.duration}
                      </div>
                      <h4 className="font-display font-semibold text-white text-sm mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-indigo-400 text-sm font-medium">{edu.institution}</p>
                      {edu.location && (
                        <p className="text-slate-500 text-xs mt-1">{edu.location}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Certs ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.26, duration: 0.55, ease: 'easeOut' }}
          >
            {/* Sub-heading */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <Award size={20} className="text-violet-400" />
              </div>
              <h3 className="font-display font-semibold text-xl text-white">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certificates.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.36 + i * 0.09, duration: 0.45, ease: 'easeOut' }}
                  className="group p-5 rounded-2xl card hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-3">
                    {/* Icon */}
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Award size={15} className="text-violet-400" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-semibold text-white text-sm mb-0.5 group-hover:text-violet-300 transition-colors duration-200 leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-indigo-400 text-xs font-semibold mb-2">{cert.organization}</p>

                      {/* Meta row */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2">
                        {cert.id && (
                          <span className="flex items-center gap-1 font-mono bg-white/[0.04] border border-white/[0.07] px-2 py-0.5 rounded">
                            <Hash size={9} />{cert.id}
                          </span>
                        )}
                        {cert.issued && (
                          <span className="flex items-center gap-1">
                            <Calendar size={10} />{cert.issued}
                          </span>
                        )}
                      </div>

                      {/* Skills */}
                      {cert.skills && cert.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((s) => (
                            <span
                              key={s}
                              className="text-xs px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Description */}
                      {cert.description && (
                        <p className="text-slate-500 text-xs mt-2 leading-relaxed">{cert.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
