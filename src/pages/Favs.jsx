import React from 'react';
import { ListOfFavs } from '../components/ListOfFavs';
import { useGetFavorites } from '../containers/GetFavorites';

export const Favs = () => {
  const { data, loading, error } = useGetFavorites();

  if (loading) return 'loading...';
  if (error) return 'error';

  return (
    <>
      <h1>Favs</h1>
      <ListOfFavs favs={data.favs} />
    </>
  );
};
