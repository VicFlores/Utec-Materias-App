import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    return sessionStorage.getItem('token');
  });

  const value = {
    auth,
    activeAuth: (token) => {
      setAuth(token);
      sessionStorage.setItem('token', token);
    },
    removeAuth: () => {
      setAuth(false);
      sessionStorage.removeItem('token');
    },
  };

  return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>;
};
