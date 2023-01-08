import React, { Fragment, useState, useEffect } from 'react';
import { Category, CategorySkeleton } from '../Category';
import { List, Item } from './styles';

function useCategoriesData() {
  const [categories, setCategroies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://petgram-server-sergioquinteroc.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategroies(response);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false);
  const { categories, loading } = useCategoriesData();

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading
        ? [1, 2, 3, 4, 5, 6].map((i) => (
            <Item key={i}>
              <CategorySkeleton />
            </Item>
          ))
        : categories.map((category) => (
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          ))}
    </List>
  );

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
};
