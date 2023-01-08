import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token');
  });

  const activateAuth = (token) => {
    setIsAuth(true);
    window.sessionStorage.setItem('token', token);
  };

  const value = {
    isAuth,
    activateAuth,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
