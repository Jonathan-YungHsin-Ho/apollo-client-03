import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const HELLO_NAME = gql`
  query HelloName($name: String) {
    hello(name: $name)
  }
`;

export default function Hello({ name }) {
  const { loading, error, data } = useQuery(HELLO_NAME, {
    variables: { name },
  });

  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error}</p>;

  return <h2>{data && data.hello}</h2>;
}
