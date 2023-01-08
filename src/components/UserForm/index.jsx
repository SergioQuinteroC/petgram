import React, { useRef } from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Button, Error, Form, Input, Title } from './styles';

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const form = useRef(null);

  const email = useInputValue('');
  const password = useInputValue('');

  // const handleSubmit = () => {
  //   const formData = new FormData(form.current);
  //   const formEntries = Object.fromEntries(formData);
  //   console.log(formEntries);
  //   onSubmit()
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    //Seteando el estado auth
    onSubmit({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <>
      <Form disabled={disabled} ref={form} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          placeholder="Email"
          type="email"
          name="email"
          {...email}
        />
        <Input
          disabled={disabled}
          placeholder="Password"
          type="password"
          name="password"
          {...password}
        />
        <Button disabled={disabled} type="submit" onClick={() => console.log()}>
          {title}
        </Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
