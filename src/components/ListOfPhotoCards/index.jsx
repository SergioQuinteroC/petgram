import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { GraphqlContainer } from '../../containers/GraphqlContainer';
import { PhotoCard } from '../PhotoCard';

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

/* const ListOfPhotoCardComponent = ({ data, loading, error }) => {
  if (error) {
    console.log(error.message);
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};

export const ListOfPhotoCards = GraphqlContainer(
  ListOfPhotoCardComponent,
  GET_PHOTOS,
  {
    categoryId: 1,
  }
); */

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId },
  });

  if (error) {
    console.log(error.message);
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
