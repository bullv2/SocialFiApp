import React, { createContext, useContext, ReactNode } from 'react';
import { theme } from './theme';

interface ThemeContextType {
  theme: typeof theme;
}

const ThemeContext = createContext<ThemeContextType>({ theme });

interface ThemeProviderProps {
  children: ReactNode;
  theme: typeof theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
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