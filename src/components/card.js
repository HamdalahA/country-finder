import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  box-shadow: 0 0 88px 0 rgba(0, 0, 0, 0.1607843137254902);
  
  @media(min-width: 768px) {
    overflow-y: auto;
    grid-row: span 5;
  }

  :hover {
    box-shadow: 0 0 88px 0 rgba(0, 0, 0, 0.3607843137254902);
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }
`

const SingleCard = styled.article`
  display: flex;
  flex-direction: column;
  width: 15rem;
  min-height: 10rem;
  padding: 0 1rem;
  background-color: whitesmoke;
  `
  
  const CardTextArea = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  min-height: 100%;
`

const CardHeader = styled.h3`
  font-weight:500;
  font-size:18px;
  place-self: flex-start;
`

const CardCode = styled.span`
  font-weight:800;
  color:#8D130C;
`

const CardParagraph = styled.p`
  font-size:14px;
  font-weight:600;
  text-transform:uppercase;
`

const CardContinent = styled.div`
  background: #8D130C;
  color: white;
  border-radius: 5px;
  padding: 3px 8px;
  font-size: 10px;
  font-weight: 300;
  width: 200px;
  text-align: center;
  text-transform: uppercase;
`


function CountriesCard({
  name,
  emoji,
  code,
  continent,
  languages
}) {
  return(
    <Card>
      <Link to={`/countries/${code}`} href={ `/countries/${code}`}>
      <CardTextArea>
        <CardHeader>{name} {emoji} </CardHeader>
        <CardCode>{code}</CardCode>
        <CardContinent>{continent.name}</CardContinent>
        <CardParagraph>Languages</CardParagraph>
        {languages = languages.map((language) => 
        <ul key={language.name}>
          <li>{language.name}</li> 
           <li>{language.native}</li>
        </ul>
        )}
      </CardTextArea>
      </Link>
    </Card>
  )
}

function CountryCard({
  name,
  emoji,
  currency,
  phone
}) {
  return(
    <SingleCard>
      <CardTextArea>
        <CardHeader>{name} {emoji} </CardHeader>
        <CardContinent>Currency: {currency}</CardContinent>
        <CardCode>+{phone}</CardCode>
      </CardTextArea>
    </SingleCard>
  )
}


export {CountriesCard, CountryCard};
