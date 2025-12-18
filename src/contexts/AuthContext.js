import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';


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

  const login = (apiResponse) => {
    const { token, ...otherData } = apiResponse;

    try {
      const decodedToken = jwtDecode(token);

      const fullUserData = {
        ...otherData,
        email: decodedToken.email,
        exp: decodedToken.exp
      };

      Cookies.set('auth_token', token, { expires: 1 });
      Cookies.set('user_data', JSON.stringify(fullUserData), { expires: 1 });

      setUser(fullUserData);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Token inválido ou malformado", error);
    }
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
