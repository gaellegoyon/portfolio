import { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import GameSection from './components/GameSection'
import Scene3D from './components/Scene3D'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState('hero')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
          
          <div className="canvas-container">
            <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
              <Suspense fallback={null}>
                <Scene3D currentSection={currentSection} />
                <OrbitControls enableZoom={false} />
              </Suspense>
            </Canvas>
          </div>
          
          <div className="content-container">
            <AnimatePresence mode="wait">
              {currentSection === 'hero' && (
                <motion.div
                  key="hero"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Hero setCurrentSection={setCurrentSection} />
                </motion.div>
              )}
              
              {currentSection === 'projects' && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Projects />
                </motion.div>
              )}
              
              {currentSection === 'game' && (
                <motion.div
                  key="game"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <GameSection />
                </motion.div>
              )}
              
              {currentSection === 'contact' && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Contact />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </div>
  )
}

export default App