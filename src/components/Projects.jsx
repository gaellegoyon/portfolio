import { useState } from 'react'
import '../styles/Projects.css'
import { motion } from 'framer-motion'

function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  
  const projects = [
    {
      id: 'phishing-bot',
      title: 'Slack Phishing Detection Bot',
      description: 'A Python-based bot deployed in Docker that monitors Slack messages for phishing attempts, using VirusTotal API with a 95% detection rate.',
      tech: ['Python', 'Docker', 'VirusTotal API', 'Slack API'],
      github: 'https://github.com/gaellegoyon/phishing-bot'
    },
    {
      id: 'security-scanner',
      title: 'CI/CD Security Scanner',
      description: 'CLI utility for GitLab CI/CD that integrates Trivy and CIS benchmarks to scan Docker images and identify CVEs, reducing audit time by 40%.',
      tech: ['Python', 'GitLab CI', 'Trivy', 'Docker'],
      github: 'https://github.com/gaellegoyon/devsecops-cli'
    },
    {
      id: 'siem-light',
      title: 'Lightweight SIEM',
      description: 'A Flask-based SIEM system orchestrated with Docker Compose that processes Syslog and pcap data to detect security threats.',
      tech: ['Python', 'Flask', 'Docker Compose', 'Elasticsearch', 'Kibana'],
      github: 'https://github.com/gaellegoyon/siem_light'
    },
    {
      id: 'hate-speech',
      title: 'My Hate Speech Detection',
      description: 'FastAPI service using multilingual BERT to detect hate speech with 92% precision and 89% recall.',
      tech: ['FastAPI', 'BERT', 'NLP', 'Machine Learning'],
      github: 'https://github.com/gaellegoyon/my_hate_speech_app'
    },
    {
      id: '3d-game',
      title: '3D Web Game',
      description: 'An immersive 3D game built with React-Three-Fiber and GLSL shaders featuring matrix transformations and collision algorithms.',
      tech: ['React', 'Three.js', 'GLSL', 'React-Three-Fiber'],
      github: 'https://github.com/gaellegoyon/r3f-game'
    }
  ]

  return (
    <div className="projects-section">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Projects
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="section-description"
      >
        Over the past twelve months, I've developed several personal projects showcasing my expertise 
        in cybersecurity, DevSecOps, IA, and 3D web development.
      </motion.p>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
            className={`project-card ${activeProject === project.id ? 'active' : ''}`}
            onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
          >
            <h3 className="project-title">{project.title}</h3>
            
            <div className="project-content">
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="project-link"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                View on GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects