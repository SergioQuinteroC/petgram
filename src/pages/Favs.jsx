import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Layout } from '../components/Layout';
import { ListOfFavs } from '../components/ListOfFavs';
import { useGetFavorites } from '../containers/GetFavorites';

// export const Favs = () => {
export default () => {
  const { data, loading, error } = useGetFavorites();
  const { removeAuth } = useContext(AppContext);

  if (loading) return 'loading...';
  if (error) {
    removeAuth();
  }

  return (
    <Layout title="Favs" subtitle="Aquí puedes encontrar tus favoritos">
      <ListOfFavs favs={data.favs} />
    </Layout>
  );
};
