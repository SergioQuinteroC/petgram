import React from 'react';
import { useQuery } from '@apollo/client';

export function GraphqlContainer(WrappedComponent, query, variables) {
  return function GraphqlContainerWithQuery() {
    const useQueryResult = useQuery(query, {
      variables: { ...variables },
    });

    return (
      <>
        <WrappedComponent {...useQueryResult} />
      </>
    );
  };
}


