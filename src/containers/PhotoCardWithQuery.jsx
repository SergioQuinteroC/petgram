import React from 'react';
import { PhotoCard, PhotoCardSkeleton } from '../components/PhotoCard';
import { useGetPhotoWithQuery } from '../hooks/useGetPhotoWithQuery';

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useGetPhotoWithQuery(id);
  const { photo } = data || { photo: {} };

  return (
    <>
      <a href="/">BACK</a>
      {error && <div>Error</div>}
      {loading && <PhotoCardSkeleton />}
      <PhotoCard {...photo} />
    </>
  );
};
