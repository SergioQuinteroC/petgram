import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button } from './styles';

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={onClick}>
      <Icon color="red" size="32px" />
      {likes} likes!
    </Button>
  );
};
