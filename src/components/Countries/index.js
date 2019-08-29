import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Loader from 'react-loader-spinner'

import {CountriesCard} from '../card';

const GET_ALL_COUNTRIES = gql`
{ 
  countries {
    name,
    currency,
    code,
    emoji,
    languages {
      name,
      native
    }
    continent {
      name
    }
  }
}
`


const Wrapper = styled.article`
  min-height: 100%;
  display: grid;
  margin-top: 60px;
  overflow-hidden;
`

const CardWrapper = styled.div`
  display: grid;
  gap: 30px;
  justify-content: center;
  padding: 30px;
  padding-bottom: 30px;
  max-width: 1500px;

  @media(min-width: 768px) {
    grid-auto-rows: 50px;
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    justify-content: center;
    gap: 50px;
  }
`

const Countries = () => {
  return (
    <Wrapper>
      <CardWrapper>
      <Query query={GET_ALL_COUNTRIES}>
        {({data, loading}) => {
          const { countries } = data;
          if(loading) {
            return <Loader
            type="Puff"
            color="#8D130C"
            height={100}
            width={100}
            />
          }
         return countries.map((country) => 
            <CountriesCard {...country} key={country.code} />
         )
        }}
      </Query>
      </CardWrapper>
    </Wrapper>
  )
}

export default Countries;
