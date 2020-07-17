import React from 'react';
import styled from 'styled-components';
import logo_labfy from '../images/logo_labfy.svg';

const HeaderLogo = styled.header `
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100vw;
  height: 10vh;
  background-color: #1E1E1E;
`;

const Logo = styled.img `
  width: 60px;
`;

const TituloLogo = styled.h1 `
  font-family: 'Roboto';
  margin-right: 12px;
  color: #fff;
`; 

function Header() {
    return (
        <HeaderLogo>
          <TituloLogo>Labefy</TituloLogo>
          <Logo src={logo_labfy} alt="logo" />
        </HeaderLogo>
    );
}

export default Header;