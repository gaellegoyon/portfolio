import '../styles/Header.css'
import { motion } from 'framer-motion'

function Header({ currentSection, setCurrentSection }) {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'game', label: 'Game' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">
        <motion.span 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentSection('hero')}
        >
          Gaëlle Goyon
        </motion.span>
      </div>
      
      <nav className="nav">
        <ul>
          {navItems.map((item) => (
            <motion.li 
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                className={currentSection === item.id ? 'active' : ''}
                onClick={() => setCurrentSection(item.id)}
              >
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header