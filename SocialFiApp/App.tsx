import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/services/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider } from '@rneui/themed';
import { theme } from './src/theme/theme';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.background}
        />
        <AuthProvider>
          <AppNavigator />
        </AuthProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
} 