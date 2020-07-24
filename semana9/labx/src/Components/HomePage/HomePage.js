import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

import BackgroundImage from './../../images/background-home.jpg';

const Background = styled.main `
  background-image: url(${props => props.BackgroundImage});
  height: 94vh;
  background-size: cover;
  box-sizing: border-box;
  color: #fff;
  display: flex;
`;

const ContainerHome = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  
`;

const Overlay = styled.div `
  height: 94vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
`;

const TextGroup = styled.div `
  text-align:center;
`;

const ButtonGroup = styled.div `
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`;

const ButtonEnter = styled.button `
  width: 100px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0);
  border: solid 1px #fff;
  color: #fff;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 15px;
  transition: 300ms;
  cursor: pointer;
    :hover {
      color: #000;
      background-color: #fff;
      box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
    }
`;

function HomePage(props) {
  const [buttonForm, setButtonForm] = useState(false);
  const history = useHistory();

  const goToTrips = () => {
    history.push("/viagens")
  }


  return (
    <Background BackgroundImage={BackgroundImage}>
      <Overlay>
        <ContainerHome>
          <TextGroup>
            <h1>Faça a viagem interplanetária <br/>dos seus sonhos.</h1>
            <ButtonGroup>
              <ButtonEnter onClick={goToTrips}>Viagens</ButtonEnter>
            </ButtonGroup>
          </TextGroup>
        </ContainerHome>
      </Overlay>
    </Background>
  );
}

export default HomePage;
