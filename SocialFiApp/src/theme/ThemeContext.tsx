import React, { createContext, useContext, ReactNode } from 'react';
import { theme } from './theme';

export type Theme = typeof theme;

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType>({ theme });

interface ThemeProviderProps {
  children: ReactNode;
  theme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme: customTheme }) => {
  return (
    <ThemeContext.Provider value={{ theme: customTheme || theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context.theme;
}; 