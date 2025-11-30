import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { education, certificates } from '../data/portfolioData';
import '../styles/Education.scss';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0 },
  };

  const certItem = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section id="education" className="education">
      <div className="education-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Education & Certifications</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="education-content">
          <div className="education-timeline">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="subsection-title"
            >
              <GraduationCap size={24} />
              Academic Background
            </motion.h3>

            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="timeline"
            >
              {education.map((edu, index) => (
                <motion.div key={index} variants={item} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">
                      <Calendar size={16} />
                      {edu.duration}
                    </div>
                    <h4 className="timeline-title">{edu.degree}</h4>
                    <p className="timeline-institution">{edu.institution}</p>
                    {edu.location && (
                      <p className="timeline-location">{edu.location}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="certifications">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="subsection-title"
            >
              <Award size={24} />
              Certifications & Achievements
            </motion.h3>

            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="cert-grid"
            >
              {certificates.map((cert, index) => (
                <motion.div key={index} variants={certItem} className="cert-card">
                  <div className="cert-icon">
                    <Award size={24} />
                  </div>
                  <div className="cert-content">
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-org">{cert.organization}</p>
                    {cert.id && <p className="cert-id">ID: {cert.id}</p>}
                    {cert.issued && <p className="cert-issued">Issued: {cert.issued}</p>}
                    {cert.skills && cert.skills.length > 0 && (
                        <p className="cert-skills">Skills: {cert.skills.join(', ')}</p>
                    )}
                    {cert.description && <p className="cert-description">{cert.description}</p>}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
