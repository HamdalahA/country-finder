import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Loader from 'react-loader-spinner'

import { CountryCard } from '../card';


const GET_COUNTRY = gql`
query Country($code : String) {
    country(code: $code) {
      name,
      currency,
      emoji,
      phone
  }
}
`

const Wrapper = styled.main`
  min-height: 100%;
  display: grid;
  place-content: center;
  margin-top: 60px;
`

const Country = (code) => {
  const codeId = code.match.params.id;
  const { data, loading, error } = useQuery(GET_COUNTRY, {
    variables: {code: codeId}
  });
  const { country } = data;
  if(loading) {
    return <Wrapper>
       <Loader 
        type="Puff"
        color="#8D130C"
        height={100}
        width={100}
      />
    </Wrapper>
  };
  if(error) return `Error! ${error}`;
  return (
    <Wrapper>
      <CountryCard 
        name={country.name} 
        currency={country.currency} 
        emoji={country.emoji} 
        phone={country.phone}
        />
    </Wrapper>
  );
}

export default Country;
