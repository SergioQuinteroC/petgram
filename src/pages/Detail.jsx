import React from 'react'
import { useParams } from 'react-router-dom';
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'

export const Detail = () => {
  const params = useParams();
  return (
    <PhotoCardWithQuery id={params.detailId} />
  )
}