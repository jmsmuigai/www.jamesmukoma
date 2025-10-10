import React from 'react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'white' | 'primary' | 'accent' | 'custom'
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'primary' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  const colorClasses = {
    white: 'border-white',
    primary: 'border-accent-orange',
    accent: 'border-accent-teal',
    custom: 'border-current'
  }

  return (
    <div 
      className={`inline-block animate-spin rounded-full border-4 border-solid border-r-transparent ${sizeClasses[size]} ${colorClasses[color]}`}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default LoadingSpinner