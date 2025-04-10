import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ViewStyle,
  TextStyle,
  ImageStyle,
  Animated,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../theme/theme';
import { LinearGradient } from 'expo-linear-gradient';
import type { LinearGradientProps } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { AuthStackParamList, RootStackParamList } from '../../types/navigation';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../../services/AuthContext';

type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList & RootStackParamList>;

export const LoginScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.95));
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: theme.animation.duration.normal,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      setIsLoading(true);
      await login(email, password);
      // Navigation will happen automatically due to isAuthenticated change in AppNavigator
    } catch (error) {
      Alert.alert('Error', 'Failed to login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: string) => {
    try {
      setIsLoading(true);
      // For demo purposes, we'll use the same login function
      await login(`${provider}@example.com`, 'password');
      // Navigation will happen automatically due to isAuthenticated change in AppNavigator
    } catch (error) {
      Alert.alert('Error', `Failed to login with ${provider}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleSignUp = () => {
    navigation.navigate('Register');
  };

  const gradientColors: readonly [string, string, ...string[]] = [theme.colors.primary, theme.colors.secondary];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Animated.View
            style={[
              styles.content,
              {
                opacity: fadeAnim,
                transform: [{ scale: scaleAnim }],
              },
            ]}
          >
            <View style={styles.header}>
              <LinearGradient
                colors={[theme.colors.primary, theme.colors.secondary]}
                style={styles.logoGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.logoText}>SocialFi</Text>
              </LinearGradient>
              <Text style={[styles.title, { color: theme.colors.text.primary }]}>
                Welcome Back!
              </Text>
              <Text style={[styles.subtitle, { color: theme.colors.text.secondary }]}>
                Sign in to continue your journey
              </Text>
            </View>

            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={24} color={theme.colors.text.secondary} style={styles.inputIcon} />
                <TextInput
                  style={[styles.input, { color: theme.colors.text.primary }]}
                  placeholder="Email"
                  placeholderTextColor={theme.colors.text.light}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={24} color={theme.colors.text.secondary} style={styles.inputIcon} />
                <TextInput
                  style={[styles.input, { color: theme.colors.text.primary }]}
                  placeholder="Password"
                  placeholderTextColor={theme.colors.text.light}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}
                >
                  <Ionicons
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={24}
                    color={theme.colors.text.secondary}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.forgotPassword}
                onPress={handleForgotPassword}
              >
                <Text style={[styles.forgotPasswordText, { color: theme.colors.primary }]}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={gradientColors}
                  style={StyleSheet.absoluteFill}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <View style={styles.loginButtonContent}>
                    <Text style={styles.loginButtonText}>Login</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>

              <View style={styles.divider}>
                <View style={[styles.dividerLine, { backgroundColor: theme.colors.border }]} />
                <Text style={[styles.dividerText, { color: theme.colors.text.secondary }]}>
                  OR
                </Text>
                <View style={[styles.dividerLine, { backgroundColor: theme.colors.border }]} />
              </View>

              <View style={styles.socialButtons}>
                <TouchableOpacity
                  style={[styles.socialButton, styles.googleButton]}
                  onPress={() => handleSocialLogin('google')}
                  activeOpacity={0.8}
                >
                  <Ionicons name="logo-google" size={24} color={theme.colors.text.primary} />
                  <Text style={styles.socialButtonText}>Continue with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.socialButton, styles.appleButton]}
                  onPress={() => handleSocialLogin('apple')}
                  activeOpacity={0.8}
                >
                  <Ionicons name="logo-apple" size={24} color={theme.colors.text.onPrimary} />
                  <Text style={[styles.socialButtonText, { color: theme.colors.text.onPrimary }]}>
                    Continue with Apple
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.footer}>
              <Text style={[styles.footerText, { color: theme.colors.text.secondary }]}>
                Don't have an account?{' '}
              </Text>
              <TouchableOpacity onPress={handleSignUp}>
                <Text style={[styles.signUpText, { color: theme.colors.primary }]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
  },
  content: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  logoGradient: {
    width: 120,
    height: 120,
    borderRadius: theme.borderRadius.round,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
    ...theme.shadow.large,
  },
  logoText: {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: '700' as const,
    color: theme.colors.text.onPrimary,
  },
  title: {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: '700' as const,
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontSize: theme.typography.body1.fontSize,
    textAlign: 'center',
  },
  form: {
    marginTop: theme.spacing.xl,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    height: 56,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  } as ViewStyle,
  inputIcon: {
    marginRight: 12,
  } as ViewStyle,
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  } as TextStyle,
  eyeIcon: {
    padding: 8,
  } as ViewStyle,
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  } as ViewStyle,
  forgotPasswordText: {
    fontSize: 14,
    fontWeight: '500',
  } as TextStyle,
  loginButton: {
    height: 56,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 24,
  } as ViewStyle,
  loginButtonContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  } as TextStyle,
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  } as ViewStyle,
  dividerLine: {
    flex: 1,
    height: 1,
  } as ViewStyle,
  dividerText: {
    marginHorizontal: 16,
    fontSize: 14,
  } as TextStyle,
  socialButtons: {
    gap: 12,
  } as ViewStyle,
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    borderRadius: 12,
    paddingHorizontal: 16,
  } as ViewStyle,
  googleButton: {
    backgroundColor: '#4285F4',
  } as ViewStyle,
  appleButton: {
    backgroundColor: '#000000',
  } as ViewStyle,
  socialButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 12,
  } as TextStyle,
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  } as ViewStyle,
  footerText: {
    fontSize: 14,
  } as TextStyle,
  signUpText: {
    fontSize: 14,
    fontWeight: '500',
  } as TextStyle,
}); 