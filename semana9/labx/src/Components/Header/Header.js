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
    margin-left: 12%;
    font-size: 30px;
    cursor: pointer;
`;

const ButtonLogin = styled.button `
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

const ButtonTrips = styled.button `
    background-color: #fff;
    margin-right: 20px;
    height: 25px;
    width: 120px;
    border: 1px solid #000;
    font-family: 'Roboto';
    font-weight: 700;
    transition: 200ms;
    cursor: pointer;
      :hover {
        background-color: ${secondary};
      }
`;

const ButtonsGroup = styled.div `
  margin-right: 12%;
  display: flex;
  justify-content: space-between;
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
    window.location.reload();

  };

  const goToHome = () => {
    history.push("/")
  };

  const goToTrips = () => {
    history.push("/listar-viagem")
  };

  return (
    <ContainerHeader>
        <Logo onClick={goToHome}>LabX</Logo>
        <ButtonsGroup>
          {token !== null ? <ButtonTrips onClick={goToTrips}>Lista de viagens</ButtonTrips> : <></>}
          {token !== null ? <ButtonLogin onClick={goToLogout}>Logout</ButtonLogin> : 
          <ButtonLogin onClick={goToLogin}>Login</ButtonLogin>}
        </ButtonsGroup>
    </ContainerHeader>
  );
}

export default Header;
