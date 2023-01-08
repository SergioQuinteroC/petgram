import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext);

  return (
    <form onSubmit={activateAuth}>
      <button>Iniciar sesión</button>
    </form>
  );
};
