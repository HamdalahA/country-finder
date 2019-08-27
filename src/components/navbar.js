import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/logo.png';

const Nav = styled.nav`
  top: 0;
  height: 60px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  background: whitesmoke;
  position: fixed;
  width: 100%;
  z-index: 1;


  img {
    height: 65px;
    width: auto;
    margin-left: 32px;
    margin-top: -9px;
  }
`
const CountriesLink = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 32px;
  margin-top: 4px;

  a {
    background-color: #8D130C;
    color: white;
    height: 40px;
    line-height: 40px;
    text-decoration: none;
    width: 100px;
    text-align: center;
    border-radius: 2em;
  }

  a:hover {
    color: #A5C944;
  }
`
const NavBar = () => {
  return (
    <Nav>
      <img src={logo} alt="logo" />
      <CountriesLink>
        <Link to="/countries" href="/countries">Countries</Link>
      </CountriesLink>
    </Nav>
  )
}

export default NavBar;
