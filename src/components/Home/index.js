import React from 'react';
import styled from 'styled-components';

import backgroundImage from '../../assets/background-image.jpg';

const Wrapper = styled.article`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`
const Header = styled.header`
  background: 
  linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ),
  url(${backgroundImage});
  background-size: cover;
  height: 100vh;
  display: flex;
  place-contents: center;
`

const TitleText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  font-size: 32px;
  font-weight: 300;
  width; 95%;
  max-width: 500px;
`

const MainContent = styled.div`
  h2 {
    text-align: center; 
  }
`

const StepDivider = styled.div`
  display: grid;
  gap: 30px;
  justify-content: center;
  padding: 30px;
  padding-bottom: 50px;
  max-width: 1200px;
  margin: auto;
  font-family: 'Lato', sans-serif;
  
  @media(min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr; 
    justify-content: start;
    gap: 50px;
    padding: 50px;
  }
`
const Steps = styled.div`
  text-align: justify;

  @media(max-width: 768px) {
    text-align: justify;
  }
`

const ComingSoon = styled.div`
  display: inline-block;
  margin-right: 3px;
  background: #8D130C;
  color: white;
  border-radius: 5px;
  padding: 3px 8px;
  font-size: 10px;
  font-weight: 300;
`

const LandingPage = () => {
  return (
    <Wrapper>
      <Header>
        <TitleText>
         <h1>Countries Finder</h1>
         <span>Find your favorite Countries with just a click</span>
        </TitleText>
      </Header>
      <MainContent>
        <h2>How it Works!</h2>
        <StepDivider>
          <Steps>
            Click on countries in the navigation bar to get a list of countries, the continent they belong to and other exciting information
          </Steps>
          <Steps>
           Visit a country from the country list, to get specific information about the country such as the currency, the language they speak and the country's emoji.
          </Steps>
          <Steps>
           Search for a country in the search bar. 
           <ComingSoon>
             coming soon
            </ComingSoon>
          </Steps> 
        </StepDivider>
      </MainContent>
    </Wrapper>
  )
}

export default LandingPage;
