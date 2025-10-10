import React from 'react'

interface ParticleBackgroundProps {
  enabled?: boolean
  className?: string
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  enabled = true,
  className = '',
}) => {
  if (!enabled) return null

  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-aura-dark via-aura-darker to-aura-dark">
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-aura-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-aura-teal/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-aura-blue/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
    </div>
  )
}

export default ParticleBackground
