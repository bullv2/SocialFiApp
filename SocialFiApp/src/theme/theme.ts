import { DefaultTheme } from '@react-navigation/native';

export const theme = {
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    accent: '#FFE66D',
    background: '#F7F7F7',
    surface: '#FFFFFF',
    error: '#FF5252',
    success: '#4CAF50',
    warning: '#FFC107',
    info: '#2196F3',
    text: {
      primary: '#2D3436',
      secondary: '#636E72',
      light: '#B2BEC3',
      onPrimary: '#FFFFFF',
      onSecondary: '#FFFFFF',
    },
    border: '#DFE6E9',
    disabled: '#B2BEC3',
    gradient: {
      primary: ['#FF6B6B', '#FF8E8E'],
      secondary: ['#4ECDC4', '#6ED7D0'],
      accent: ['#FFE66D', '#FFEE9D'],
    },
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
      lineHeight: 40,
    },
    h2: {
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 32,
    },
    h3: {
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 28,
    },
    h4: {
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 24,
    },
    body1: {
      fontSize: 16,
      lineHeight: 24,
    },
    body2: {
      fontSize: 14,
      lineHeight: 20,
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    round: 9999,
  },
  shadow: {
    small: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.2,
      shadowRadius: 12,
      elevation: 8,
    },
  },
  animation: {
    duration: {
      fast: 200,
      normal: 300,
      slow: 500,
    },
    easing: {
      default: 'ease-in-out',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },
  zIndex: {
    dropdown: 1000,
    modal: 1100,
    toast: 1200,
  },
}; 