import { useState, useEffect, useContext, createContext, ReactNode } from 'react'

interface ParticlesContextType {
  particlesEnabled: boolean
  setParticlesEnabled: (enabled: boolean) => void
  particleConfig: ParticleConfig
  updateParticleConfig: (config: Partial<ParticleConfig>) => void
}

interface ParticleConfig {
  density: number
  speed: number
  size: number
  color: string
  opacity: number
  shape: 'circle' | 'square' | 'triangle' | 'star'
  movement: 'float' | 'swirl' | 'bounce' | 'drift'
  interactive: boolean
}

const ParticlesContext = createContext<ParticlesContextType | undefined>(undefined)

const defaultParticleConfig: ParticleConfig = {
  density: 50,
  speed: 1,
  size: 2,
  color: '#FF6B00',
  opacity: 0.7,
  shape: 'circle',
  movement: 'float',
  interactive: true,
}

export const ParticlesProvider = ({ children }: { children: ReactNode }) => {
  const [particlesEnabled, setParticlesEnabledState] = useState(true)
  const [particleConfig, setParticleConfigState] = useState<ParticleConfig>(defaultParticleConfig)

  // Update particles enabled state
  const setParticlesEnabled = (enabled: boolean) => {
    setParticlesEnabledState(enabled)
  }

  // Update particle configuration
  const updateParticleConfig = (config: Partial<ParticleConfig>) => {
    const newConfig = { ...particleConfig, ...config }
    setParticleConfigState(newConfig)
  }

  // Performance optimization: disable particles on low-end devices
  useEffect(() => {
    const checkPerformance = () => {
      // Check if device is likely low-end based on hardware concurrency
      if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        setParticlesEnabled(false)
        console.log('Particles disabled due to low-end device detection')
      }
    }

    checkPerformance()
  }, [])

  // Disable particles when page is not visible to save resources
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setParticlesEnabled(false)
      } else {
        setParticlesEnabled(true)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  const value: ParticlesContextType = {
    particlesEnabled,
    setParticlesEnabled,
    particleConfig,
    updateParticleConfig,
  }

  return (
    <ParticlesContext.Provider value={value}>
      {children}
    </ParticlesContext.Provider>
  )
}

export const useParticles = (): ParticlesContextType => {
  const context = useContext(ParticlesContext)
  if (context === undefined) {
    throw new Error('useParticles must be used within a ParticlesProvider')
  }
  return context
}