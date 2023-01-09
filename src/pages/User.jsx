import React, { useContext } from 'react';
import { SubmitButton } from '../components/SubmitButton';
import { AppContext } from '../context/AppContext';

export const User = () => {
  const { removeAuth } = useContext(AppContext);

  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  );
};
