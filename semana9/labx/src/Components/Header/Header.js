import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { primary, secondary } from '../Color/style';

const ContainerHeader = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 6vh;
    background-color: ${primary};
    font-weight: bold;

`;

const Logo = styled.div `
    margin-left: 15%;
    font-size: 30px;
`;

const ButtonLogin = styled.button `
    margin-right: 15%;
    background-color: #fff;
    height: 25px;
    width: 70px;
    border: 1px solid #000;
    font-family: 'Roboto';
    font-weight: 700;
    transition: 200ms;
    cursor: pointer;
      :hover {
        background-color: ${secondary};
      }
`;

function Header() {
  const [buttonHeader, setButtonHeader] = useState(true)
  const history = useHistory();
  const token = window.localStorage.getItem("token");

  const goToLogin = () => {
    buttonHeader ? history.push("/login") : history.push("/");
    setButtonHeader(!buttonHeader);
  }

  const goToLogout = () => {
    window.localStorage.clear();
    history.push("/login")

  };

  return (
    <ContainerHeader>
        <Logo>LabX</Logo>
        {token ? <ButtonLogin onClick={goToLogout}>Logout</ButtonLogin> : 
        <ButtonLogin onClick={goToLogin}>Login</ButtonLogin>}
    </ContainerHeader>
  );
}

export default Header;
