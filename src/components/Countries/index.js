import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Loader from 'react-loader-spinner'

import NavBar from '../navbar';
import Footer from '../footer';
import CountryCard from '../card';

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
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    justify-content: start;
    gap: 50px;
  }
`
const LoaderWrapper = styled.div`
    height: 100vh;
    width: 100%;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    display: grid;
    place-content: center;
    margin: auto;
`


const Countries = () => {
  return (
    <Wrapper>
      <NavBar />
      <CardWrapper>
      <Query query={GET_ALL_COUNTRIES}>
        {({data, loading}) => {
          const { countries } = data;
          if(loading) {
            return <LoaderWrapper>
             <Loader
              type="Puff"
              color="#8D130C"
              height={100}
              width={100}
              />
            </LoaderWrapper>
          }
         return countries.map((country) => 
            <CountryCard {...country} key={country.code} />
         )
        }}
      </Query>
      </CardWrapper>
    <Footer />
    </Wrapper>
  )
}

export default Countries;
