import React, { useState, ReactNode, useEffect } from 'react';
import { fakeAuthService } from '../services/fakeAuthService';
import { AuthContextType, STORAGE_KEY } from './authTypes';
import { AuthContext } from './useAuth';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthContextType['user']>(null);
  const [loading, setLoading] = useState(true); 
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem(STORAGE_KEY);
    if (token) {
      setUser({ username: 'Jhon Doe', role: 'ADMIN' }); 
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    setLoading(true);
    try {
      const response = await fakeAuthService(username, password);
      setUser(response.data.user);
      setIsAuthenticated(true);
      sessionStorage.setItem(STORAGE_KEY, response.data.token);
      return response;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    sessionStorage.removeItem(STORAGE_KEY);
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
