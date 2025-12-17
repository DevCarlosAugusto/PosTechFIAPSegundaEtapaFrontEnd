import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get('auth_token');
    const savedUser = Cookies.get('user_data');

    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Erro ao ler dados do usuário", error);
      }
    }
    setLoading(false);
  }, []);

  const login = (data) => {
    const { token, ...userData } = data;

    Cookies.set('auth_token', token, { expires: 1, path: '/' });
    Cookies.set('user_data', JSON.stringify(userData), { expires: 1, path: '/' });

    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove('auth_token');
    Cookies.remove('user_data');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
