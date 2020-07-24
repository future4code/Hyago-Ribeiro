import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";


import Form from './../Form/Form';
import BackgroundImage from './../../images/background-home.jpg';

const Background = styled.main `
  background-image: url(${props => props.BackgroundImage});
  height: 94vh;
  background-size: cover;
  box-sizing: border-box;
  color: #fff;
  align-items: center;
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
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.65);
`;

const ButtonBackToHome = styled.button `
    height: 30px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #fff;
    font-family: 'Roboto';
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    width: 90px;
    align-self: center;
    cursor: pointer;
    transition: 200ms;
      :hover {
        background-color: #fff;
        color: #000;
        box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
      }
`;

function FormPage(props) {
  const history = useHistory();
  const [listTrips, setListTrips] = useState([]);
  const pathParams = useParams();
  console.log(pathParams)
  
    useEffect(() => {
      axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/hyago-turing/trips')
      .then((response) => {
        setListTrips(response.data.trips)
      }).catch((error) => {
        console.log(error.message)
      })
    }, [])

  const goToHome = () => {
    history.push("/viagens")
  }
  return (
    <Background BackgroundImage={BackgroundImage}>
      <Overlay>
        <ContainerHome>
          <ButtonBackToHome onClick={goToHome}>Voltar</ButtonBackToHome>
          <h2>{pathParams.tripName}</h2>
          <Form tripsList={listTrips} />
        </ContainerHome>
      </Overlay>
    </Background>
  );
}

export default FormPage;
