import { Mutation } from '@apollo/client/react/components';
import { gql, useMutation } from '@apollo/client';

export const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const useLoginMutation = () => {
  const [loginMutation, { data, loading: loginLoading, error: loginError }] =
    useMutation(LOGIN);

  return { loginMutation, loginLoading, loginError };
};

//Deprecated
// export const LoginMutation = ({ children }) => {
//   return <Mutation mutation={REGISTER}>{children}</Mutation>;
// };
