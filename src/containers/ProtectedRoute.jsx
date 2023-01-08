import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { NotRegisteredUser } from '../pages/NotRegisteredUser';

export const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AppContext);
  
  if (!isAuth) {
    return <NotRegisteredUser />;
  }

  return children;
};
