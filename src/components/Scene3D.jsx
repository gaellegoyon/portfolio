import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import * as THREE from 'three'

function Scene3D({ currentSection }) {
  const groupRef = useRef()
  
  const cameraPositions = {
    hero: [0, 0, 10],
    projects: [5, 2, 10],
    game: [-3, -2, 8],
    contact: [0, -5, 12]
  }
  
  const { cameraPos } = useSpring({
    cameraPos: cameraPositions[currentSection] || [0, 0, 10],
    config: { mass: 1, tension: 120, friction: 14 }
  })
  
  function Particles({ count = 500 }) {
    const mesh = useRef()
    const particles = useRef([])
    
    useEffect(() => {
      particles.current = Array.from({ length: count }, () => ({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ],
        speed: Math.random() * 0.05
      }))
    }, [count])
    
    useFrame(() => {
      const positions = mesh.current.geometry.attributes.position.array
      
      particles.current.forEach((particle, i) => {
        const i3 = i * 3
        
        positions[i3 + 2] += particle.speed
        
        if (positions[i3 + 2] > 10) {
          positions[i3 + 2] = -10
        }
      })
      
      mesh.current.geometry.attributes.position.needsUpdate = true
    })
    
    return (
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={new Float32Array(count * 3)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.6} />
      </points>
    )
  }
  
  function AnimatedShapes() {
    const torusRef = useRef()
    const sphereRef = useRef()
    const cubeRef = useRef()
    
    useFrame(({ clock }) => {
      const t = clock.getElapsedTime()
      
      if (torusRef.current) {
        torusRef.current.rotation.x = t * 0.5
        torusRef.current.rotation.y = t * 0.2
      }
      
      if (sphereRef.current) {
        sphereRef.current.position.y = Math.sin(t) * 0.5
        sphereRef.current.rotation.y = t * 0.3
      }
      
      if (cubeRef.current) {
        cubeRef.current.rotation.x = t * 0.3
        cubeRef.current.rotation.z = t * 0.2
      }
    })
    
    const torusSpring = useSpring({
      position: currentSection === 'hero' 
        ? [2, 0, 0] 
        : currentSection === 'projects' 
          ? [4, 2, -2] 
          : [-3, -1, -2],
      scale: currentSection === 'game' ? 1.5 : 1,
      rotation: [0, 0, currentSection === 'contact' ? Math.PI : 0],
      config: { mass: 2, tension: 170, friction: 26 }
    })
    
    const sphereSpring = useSpring({
      position: currentSection === 'hero' 
        ? [-2, -1, 1] 
        : currentSection === 'contact' 
          ? [0, -3, 0] 
          : [3, 0, -1],
      scale: currentSection === 'projects' ? 1.3 : 1,
      config: { mass: 1, tension: 150, friction: 20 }
    })
    
    const cubeSpring = useSpring({
      position: currentSection === 'hero' 
        ? [0, 2, -1] 
        : currentSection === 'game' 
          ? [-2, -2, 0] 
          : [2, 3, -2],
      scale: currentSection === 'contact' ? 1.4 : 1,
      rotation: [0, currentSection === 'projects' ? Math.PI / 4 : 0, 0],
      config: { mass: 1.5, tension: 200, friction: 22 }
    })
    
    return (
      <>
        <animated.mesh
          ref={torusRef}
          position={torusSpring.position}
          rotation={torusSpring.rotation}
          scale={torusSpring.scale}
        >
          <torusGeometry args={[1, 0.4, 16, 32]} />
          <meshStandardMaterial color="#4285f4" metalness={0.5} roughness={0.2} wireframe />
        </animated.mesh>
        
        <animated.mesh
          ref={sphereRef}
          position={sphereSpring.position}
          scale={sphereSpring.scale}
        >
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color="#0F9D58" metalness={0.3} roughness={0.4} />
        </animated.mesh>
        
        <animated.mesh
          ref={cubeRef}
          position={cubeSpring.position}
          rotation={cubeSpring.rotation}
          scale={cubeSpring.scale}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#DB4437" metalness={0.4} roughness={0.3} />
        </animated.mesh>
      </>
    )
  }
  
  return (
    <animated.group ref={groupRef} position={cameraPos}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} />
      
      <AnimatedShapes />
      <Particles />
    </animated.group>
  )
}

export default Scene3D