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
    background-color: ${secondary}
`;

function Header() {
  const [buttonHeader, setButtonHeader] = useState(true)
  const history = useHistory();

  const goToLogin = () => {
    buttonHeader ? history.push("/login") : history.push("/");
    setButtonHeader(!buttonHeader);
  }

  return (
    <ContainerHeader>
        <Logo>LabX</Logo>
        {buttonHeader ? <ButtonLogin onClick={goToLogin}>Login</ButtonLogin> :
        <ButtonLogin onClick={goToLogin}>Logout</ButtonLogin>}
    </ContainerHeader>
  );
}

export default Header;
