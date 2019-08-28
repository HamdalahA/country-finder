import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  margin:30px;
  box-shadow: 0 0 88px 0 rgba(0, 0, 0, 0.1607843137254902);

  :hover {
    box-shadow: 0 0 88px 0 rgba(0, 0, 0, 0.3607843137254902);
  }
`

const CardTextArea = styled.div`
  display: flex;
  flex-direction: column; 
  height: 100%;
  background-color: whitesmoke;
  padding-top:5px;
  padding-bottom:10px;
  padding-left:35px;
`

const CardHeader = styled.h3`
  font-weight:500;
  font-size:18px;
  place-self: flex-start;
`

const CardCode = styled.span`
  padding-left: 80px;
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


function CountryCard({
  name,
  emoji,
  code,
  continent,
  languages
}) {
  return(
    <Card>
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
    </Card>
  )
}
export default CountryCard;
