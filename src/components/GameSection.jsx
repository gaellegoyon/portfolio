import '../styles/GameSection.css'
import { motion } from 'framer-motion'
import { useState } from 'react'

function GameSection() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="game-section">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Interactive 3D Game
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="game-content"
      >
        <p className="game-description">
          Experience my custom 3D game built with React Three Fiber and GLSL shaders.
          Navigate through an immersive environment and discover interactive elements.
        </p>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="game-preview"
        >
          {isLoading && (
            <div className="game-placeholder">
              <p>Loading Game Preview...</p>
              <div className="loading-spinner"></div>
            </div>
          )}
          <iframe 
            src="https://r3fgame-gaellegoyon.netlify.app/?preview=true" 
            title="Game Preview"
            className="game-iframe"
            onLoad={() => setIsLoading(false)}
            sandbox="allow-scripts allow-same-origin"
          />
        </motion.div>
        
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="play-button"
          href="https://r3fgame-gaellegoyon.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Launch Full Game Experience
        </motion.a>
      </motion.div>
    </div>
  )
}

export default GameSection