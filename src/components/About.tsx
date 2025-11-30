import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Smartphone, Cloud, GitBranch, Layout } from 'lucide-react';
import { personalInfo, skills } from '../data/portfolioData';
import '../styles/About.scss';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const iconMap: { [key: string]: typeof Code2 } = {
    Backend: Code2,
    Frontend: Layout,
    Mobile: Smartphone,
    Database: Database,
    Tools: GitBranch,
    'Cloud & DevOps': Cloud,
    Architecture: Code2,
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="about">
      <div className="about-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="about-description"
        >
          <p>{personalInfo.about}</p>
          <div className="about-highlight">
            <span className="highlight-badge">Available for Freelancing</span>
            <p className="highlight-text">
              Open to exciting projects and collaboration opportunities
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="skills-grid"
        >
          {skills.map((skillGroup) => {
            const Icon = iconMap[skillGroup.category] || Code2;
            return (
              <motion.div key={skillGroup.category} variants={item} className="skill-card">
                <div className="skill-icon">
                  <Icon size={28} />
                </div>
                <h3 className="skill-category">{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
