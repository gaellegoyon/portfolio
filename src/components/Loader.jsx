import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/Loader.css'

function Loader() {
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 15
        return next > 100 ? 100 : next
      })
    }, 200)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loader">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="loader-content"
      >
        <div className="loader-logo">GG</div>
        <h1>Loading Experience</h1>
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <p>{Math.round(progress)}%</p>
      </motion.div>
    </div>
  )
}

export default Loader