import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const ContainerHeader = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 6vh;
    background-color: #c4c4c4;
    font-weight: bold;

`;

const Logo = styled.div `
    margin-left: 15%;
    font-size: 30px;
`;

const ButtonLogin = styled.button `
    margin-right: 15%;
`;

function Header() {
  const [buttonHeader, setButtonHeader] = useState(true)
  const history = useHistory();

  const goToLogin = () => {
    history.push("/login");
  }

  return (
    <ContainerHeader>
        <Logo>LabX</Logo>
        <ButtonLogin onClick={goToLogin}>Login</ButtonLogin>
    </ContainerHeader>
  );
}

export default Header;
