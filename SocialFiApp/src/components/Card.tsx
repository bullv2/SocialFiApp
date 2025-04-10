import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '../theme/theme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'elevated' | 'outlined' | 'filled';
}

export const Card: React.FC<CardProps> = ({ children, style, variant = 'elevated' }) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'elevated':
        return {
          backgroundColor: theme.colors.surface,
          ...theme.shadow.medium,
        };
      case 'outlined':
        return {
          backgroundColor: theme.colors.surface,
          borderWidth: 1,
          borderColor: theme.colors.border,
        };
      case 'filled':
        return {
          backgroundColor: theme.colors.background,
        };
      default:
        return {};
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          padding: theme.spacing.md,
          borderRadius: theme.borderRadius.md,
        },
        getVariantStyle(),
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  } as ViewStyle,
}); 