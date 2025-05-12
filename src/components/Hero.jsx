import '../styles/Hero.css'
import { motion } from 'framer-motion'


function Hero({ setCurrentSection }) {
  return (
    <div className="hero-section">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hero-title"
      >
        Gaëlle Goyon
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="hero-subtitle"
      >
        Cybersecurity Enthusiast & Developer
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="hero-description"
      >
        <p>
          Specialized in DevSecOps, web security, web and mobile development.
          Building powerful tools that combine security, automation, and cutting-edge interfaces.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="hero-cta"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button primary"
          onClick={() => setCurrentSection('game')}
        >
          Play My Game
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button secondary"
          onClick={() => setCurrentSection('projects')}
        >
          View Projects
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Hero