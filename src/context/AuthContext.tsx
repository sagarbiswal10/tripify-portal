import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // Dummy user data for demonstration
  const dummyUsers = [
    { id: '1', email: 'user@example.com', password: 'password123', name: 'John Doe' }
  ];

  const login = async (email: string, password: string) => {
    const user = dummyUsers.find(u => u.email === email && u.password === password);
    if (user) {
      const { password: _, ...userWithoutPassword } = user;
      setUser(userWithoutPassword);
      toast({
        title: "Success",
        description: "Successfully logged in!",
      });
      navigate('/');
    } else {
      toast({
        title: "Error",
        description: "Invalid credentials",
        variant: "destructive",
      });
    }
  };

  const logout = () => {
    setUser(null);
    toast({
      title: "Success",
      description: "Successfully logged out!",
    });
    navigate('/');
  };

  const register = async (email: string, password: string, name: string) => {
    if (dummyUsers.some(u => u.email === email)) {
      toast({
        title: "Error",
        description: "Email already exists",
        variant: "destructive",
      });
      return;
    }
    // In a real app, you would make an API call here
    toast({
      title: "Success",
      description: "Registration successful! Please login.",
    });
    navigate('/signin');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};