import React from 'react';
import { Layout } from '../components/Layout';
import { ListOfFavs } from '../components/ListOfFavs';
import { useGetFavorites } from '../containers/GetFavorites';

export const Favs = () => {
  const { data, loading, error } = useGetFavorites();

  if (loading) return 'loading...';
  if (error) return 'error';

  return (
    <Layout title="Favs" subtitle="Aquí puedes encontrar tus favoritos">
      <ListOfFavs favs={data.favs} />
    </Layout>
  );
};
