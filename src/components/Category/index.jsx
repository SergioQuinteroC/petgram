import React from 'react';
import {
  Link,
  Image,
  ContainerCategorySkeleton,
  CategoryImage,
  CategoryTitle,
} from './styles';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
);

export const CategorySkeleton = (props) => {
  return (
    <ContainerCategorySkeleton>
      <CategoryImage light={props.light} />
      <CategoryTitle light={props.light} />
    </ContainerCategorySkeleton>
  );
};
