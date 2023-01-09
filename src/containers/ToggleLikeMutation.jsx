import { Mutation } from '@apollo/client/react/components';
import { gql } from '@apollo/client';

export const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

// likeAnonymousPhoto

export const ToggleLikeMutation = ({ children }) => {
  return <Mutation mutation={LIKE_PHOTO}>{children}</Mutation>;
};
