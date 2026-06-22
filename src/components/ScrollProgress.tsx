import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const RADIUS        = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  /* Spring-smoothed progress for a fluid feel */
  const smooth = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });

  /* Map 0→1 progress to full→0 dash-offset (ring fills clockwise) */
  const dashOffset = useTransform(smooth, [0, 1], [CIRCUMFERENCE, 0]);

  const [visible, setVisible] = useState(false);

  useEffect(() =>
    smooth.on('change', (v) => setVisible(v > 0.04)),
  [smooth]);

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed bottom-8 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full cursor-pointer group"
      style={{ background: 'rgba(13,20,36,0.88)', backdropFilter: 'blur(14px)' }}
      aria-label="Scroll to top"
    >
      {/* Rotating SVG ring */}
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        className="absolute inset-0 -rotate-90"
      >
        {/* Track */}
        <circle
          cx="28" cy="28" r={RADIUS}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="2.5"
        />
        {/* Filled arc */}
        <motion.circle
          cx="28" cy="28" r={RADIUS}
          fill="none"
          stroke="url(#scroll-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          style={{ strokeDashoffset: dashOffset }}
        />
        <defs>
          <linearGradient id="scroll-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Arrow icon */}
      <ArrowUp
        size={15}
        className="relative z-10 text-slate-400 group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-200"
      />
    </motion.button>
  );
};

export default ScrollProgress;
