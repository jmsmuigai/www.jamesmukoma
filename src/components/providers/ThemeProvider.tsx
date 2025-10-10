import React from 'react'
import { ThemeProvider as ThemeProviderComponent } from '../../hooks/useTheme'

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProviderComponent>
      {children}
    </ThemeProviderComponent>
  )
}