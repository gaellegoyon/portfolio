import '../styles/Contact.css'
import { motion } from 'framer-motion'
import cvPdf from '/assets/CV-Gaelle-Goyon.pdf'

function Contact() {
  const socialLinks = [
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/gaellegoyon',
      icon: '📁'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ga%C3%ABlle-goyon-0514a2251/',
      icon: '💼'
    },
     {
      id: 'cv',
      name: 'Download CV',
      url: cvPdf,
      download: 'CV-Gaelle-Goyon.pdf',
      icon: '📄',
      onClick: (e) => {
        e.preventDefault()
        const link = document.createElement('a')
        link.href = cvPdf
        link.download = 'CV-Gaelle-Goyon.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)


      }
    }
  ]

  return (
    <div className="contact-section">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Contact
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="contact-content"
      >
        <div className="contact-info">
          <p>
            Interested in working together or have a question?
            Feel free to reach out to me through any of the channels below.
          </p>
          <p className="email-address">
            <span>📧</span> gaellegoyon.dev@gmail.com
          </p>
        </div>
        
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="social-link"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              download={link.download || false}
              onClick={link.onClick}
            >
              <span className="link-icon">{link.icon}</span>
              <span className="link-name">{link.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Contact