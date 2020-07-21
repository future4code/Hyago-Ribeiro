import React from 'react';
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
  return (
    <ContainerHeader>
        <Logo>LabX</Logo>
        <ButtonLogin>Login</ButtonLogin>
    </ContainerHeader>
  );
}

export default Header;
