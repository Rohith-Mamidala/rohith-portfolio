import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, ExternalLink, Smartphone, Globe, Zap } from 'lucide-react';
import { projects } from '../data/portfolioData';
import '../styles/Projects.scss';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categoryIcons = {
    Mobile: Smartphone,
    Web: Globe,
    Automation: Zap,
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A showcase of my technical expertise across full-stack development
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="projects-grid"
        >
          {projects.map((project) => {
            const CategoryIcon = categoryIcons[project.category as keyof typeof categoryIcons] || Code;
            return (
              <motion.div key={project.id} variants={item} className="project-card">
                <div className="project-header">
                  <div className="project-icon">
                    <CategoryIcon size={24} />
                  </div>
                  {project.status && (
                    <span className="project-status">{project.status}</span>
                  )}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-highlights">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="highlight-item">
                      <ExternalLink size={14} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-category-badge">
                  {project.category}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
