import { Mutation } from '@apollo/client/react/components';
import { gql, useMutation } from '@apollo/client';

export const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const useRegisterMutation = () => {
  const [
    registerMutation,
    { data, loading: registerLoading, error: registerError },
  ] = useMutation(REGISTER);

  return { registerMutation, registerLoading, registerError };
};

//Deprecated
export const RegisterMutation = ({ children }) => {
  return <Mutation mutation={REGISTER}>{children}</Mutation>;
};
