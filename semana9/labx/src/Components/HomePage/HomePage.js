import React from 'react';
import styled from 'styled-components';

import Form from './../Form/Form';
import BackgroundImage from './../../images/background-home.jpg';

const Background = styled.main `
  background-image: url(${props => props.BackgroundImage});
  height: 94vh;
  background-size: cover;
  box-sizing: border-box;
  color: #fff;
`;

const ContainerHome = styled.div `
  width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  
`;

const Overlay = styled.div `
  height: 94vh;
  background-color: rgba(0, 0, 0, 0.95);
`;

const TextGroup = styled.div `
  text-align:center;
`;

function HomePage(props) {
  return (
    <Background BackgroundImage={BackgroundImage}>
      <Overlay>
        <ContainerHome>
          <TextGroup>
            <h1>Bem vindo a LabeX</h1>
            <p>Inscreva-se para a viagem interplanetária dos seus sonhos.</p>
            <p>Para participar siga os passos abaixo.</p>
          </TextGroup>
          <Form />
        </ContainerHome>
      </Overlay>
    </Background>
  );
}

export default HomePage;
