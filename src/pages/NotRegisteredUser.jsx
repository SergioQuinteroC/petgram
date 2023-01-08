import React, { useContext } from 'react';
import { UserForm } from '../components/UserForm';
import { useLoginMutation } from '../containers/LoginMutation';
import { useRegisterMutation } from '../containers/RegisterMutation';
import { AppContext } from '../context/AppContext';

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext);

  const { registerMutation, registerLoading, registerError } =
    useRegisterMutation();

  const { loginMutation, loginLoading, loginError } = useLoginMutation();

  const errorMsgRegister =
    registerError && 'El usuario ya existe o hay algún problema';

  const errorMsgLogin =
    loginError && 'La contraseña es incorrecta o el usuario no existe';

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    registerMutation({ variables: variable }).then(({ data }) => {
      const { signup } = data;
      activateAuth(signup);
    });
  };

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    loginMutation({ variables: variable }).then(({ data }) => {
      const { login } = data;
      activateAuth(login);
    });
  };

  return (
    <>
      <UserForm
        error={errorMsgRegister}
        disabled={registerLoading}
        onSubmit={onSubmitRegister}
        title="Registrarse"
      />
      <UserForm
        error={errorMsgLogin}
        disabled={loginLoading}
        onSubmit={onSubmitLogin}
        title="Iniciar Sesion"
      />
    </>
  );
};
