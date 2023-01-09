import React from 'react';
import { Link } from 'react-router-dom';
import {
  ImgWrapper,
  Img,
  Article,
  ImgSkeleton,
  ButtonSkeleton,
} from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavButton } from '../FavButton';
import { LIKE_PHOTO } from '../../containers/ToggleLikeMutation';
import { useMutation } from '@apollo/client';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen();

  const [mutateFunction, { data, loading, error }] = useMutation(LIKE_PHOTO);

  const handleFavClick = () => {
    mutateFunction({ variables: { input: { id } } });
  };

  return (
    <Article ref={ref}>
      {show && (
        <>
          <Link to={`detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};

export const PhotoCardSkeleton = () => {
  return (
    <Article>
      <ImgWrapper>
        <ImgSkeleton />
      </ImgWrapper>
      <ButtonSkeleton />
    </Article>
  );
};
