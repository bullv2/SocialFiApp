import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
  walletAddress?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  connectWallet: (address: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // TODO: Implement actual login logic
    console.log('Login attempt:', email);
    // Mock successful login
    setUser({
      id: '1',
      username: 'testuser',
      email: email,
    });
  };

  const register = async (username: string, email: string, password: string) => {
    // TODO: Implement actual registration logic
    console.log('Register attempt:', username, email);
    // Mock successful registration
    setUser({
      id: '1',
      username,
      email,
    });
  };

  const logout = async () => {
    // TODO: Implement actual logout logic
    setUser(null);
  };

  const connectWallet = async (address: string) => {
    if (!user) return;
    // TODO: Implement actual wallet connection logic
    setUser({
      ...user,
      walletAddress: address,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        connectWallet,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 