import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, MainTabParamList, AuthStackParamList } from '../types/navigation';
import { useAuth } from '../services/AuthContext';
import { LoginScreen } from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/main/HomeScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import WalletScreen from '../screens/main/WalletScreen';
import { PictureScreen } from '../screens/main/PictureScreen';
import { theme } from '../theme/theme';
import { Icon } from '@rneui/themed';
import { TextStyle } from 'react-native';

// Create navigators
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

// Placeholder screens
const RegisterScreen = () => null;
const ForgotPasswordScreen = () => null;

const headerTitleStyle = {
  fontSize: theme.typography.h3.fontSize,
  fontWeight: '700' as const,
};

// Main Tab Navigator
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text.secondary,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
          paddingBottom: theme.spacing.sm,
          paddingTop: theme.spacing.xs,
          height: theme.spacing.xxl + theme.spacing.lg,
        },
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.text.primary,
        headerTitleStyle,
        headerShadowVisible: false,
        tabBarLabelStyle: {
          marginBottom: theme.spacing.xs,
          fontSize: theme.typography.caption.fontSize,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pictures"
        component={PictureScreen}
        options={{
          title: 'Picture Chains',
          headerTitle: 'Picture Chains',
          tabBarIcon: ({ color, size }) => (
            <Icon name="image" type="material" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-balance-wallet" type="material" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Auth Stack Navigator
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.surface,
        },
        headerTintColor: theme.colors.text.primary,
        headerTitleStyle,
        headerShadowVisible: false,
      }}
    >
      <AuthStack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{
          headerShown: false
        }}
      />
      <AuthStack.Screen 
        name="Register" 
        component={RegisterScreen}
        options={{
          title: 'Create Account'
        }}
      />
      <AuthStack.Screen 
        name="ForgotPassword" 
        component={ForgotPasswordScreen}
        options={{
          title: 'Reset Password'
        }}
      />
    </AuthStack.Navigator>
  );
};

// Root Navigator
const AppNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="Main" component={MainTabs} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 