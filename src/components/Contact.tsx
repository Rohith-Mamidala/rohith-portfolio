import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { contactInfo } from '../data/portfolioData';
import type { ContactFormData } from '../types';

const CONTACT_ITEMS = [
  {
    Icon:  Mail,
    label: 'Email',
    value: contactInfo.email,
    href:  `mailto:${contactInfo.email}`,
    color: 'text-indigo-400',
    bg:    'bg-indigo-500/10',
    border:'border-indigo-500/20',
  },
  {
    Icon:  Phone,
    label: 'Phone',
    value: contactInfo.phone,
    href:  `tel:${contactInfo.phone}`,
    color: 'text-violet-400',
    bg:    'bg-violet-500/10',
    border:'border-violet-500/20',
  },
  {
    Icon:  FaLinkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href:  contactInfo.linkedin,
    color: 'text-cyan-400',
    bg:    'bg-cyan-500/10',
    border:'border-cyan-500/20',
  },
] as const;

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  const [formData, setFormData] = useState<ContactFormData>({
    name: '', email: '', subject: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const link = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = link;
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-[0.18] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-violet-500/[0.06] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full bg-indigo-500/[0.05] blur-[130px] pointer-events-none" />

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
            04. Contact
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4 tracking-tight">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ── Left: info ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.55, ease: 'easeOut' }}
          >
            <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-md">
              I'm currently available for freelance work and exciting projects. Whether you need
              a full-stack developer for your team or want to discuss an idea, I'd love to hear
              from you.
            </p>

            <div className="space-y-4">
              {CONTACT_ITEMS.map(({ Icon, label, value, href, color, bg, border }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label === 'LinkedIn' ? '_blank' : undefined}
                  rel={label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -18 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.28 + i * 0.1, duration: 0.45, ease: 'easeOut' }}
                  className="group flex items-center gap-4 p-4 rounded-2xl card hover:-translate-y-0.5"
                >
                  <div className={`w-11 h-11 rounded-xl ${bg} border ${border} flex items-center justify-center shrink-0`}>
                    <Icon size={19} className={color} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors duration-200">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.26, duration: 0.55, ease: 'easeOut' }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl card space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="fl-group">
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleChange}
                    required placeholder=" "
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="fl-group">
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange}
                    required placeholder=" "
                  />
                  <label htmlFor="email">Email Address</label>
                </div>
              </div>

              <div className="fl-group">
                <input
                  type="text" id="subject" name="subject"
                  value={formData.subject} onChange={handleChange}
                  required placeholder=" "
                />
                <label htmlFor="subject">Subject</label>
              </div>

              <div className="fl-group">
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange}
                  required rows={5} placeholder=" "
                />
                <label htmlFor="message">Your Message</label>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-emerald-600 text-white cursor-default'
                    : 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0'
                }`}
              >
                {status === 'idle'    && <><Send         size={15} /> Send Message</>}
                {status === 'sending' && <><Loader2      size={15} className="animate-spin" /> Sending…</>}
                {status === 'success' && <><CheckCircle2 size={15} /> Message Sent!</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
