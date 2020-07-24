import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import BackgroundImage from './../../images/background-home.jpg';

const Background = styled.main `
  background-image: url(${props => props.BackgroundImage});
  height: 94vh;
  background-size: cover;
  box-sizing: border-box;
  color: #fff;
  align-items: center;
`;

const ContainerListUser = styled.div `
  height: 80vh;
  width: 70vw;
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: auto;
  padding: 10px 50px;
  
`;

const Overlay = styled.div `
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.65);
`;

const ButtonApply = styled.button `
    height: 30px;
    margin-left: 50px;
    margin-top: 30px;
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


const ContainerTrip = styled.div `
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  padding: 10px 0;
`;

const TripSingle = styled.div `
  width: 85%;
`;

const TitleTrip = styled.h3 `
  font-size: 20px;
`;

const InfoTrip = styled.p `
  font-size: 16px;
`;

const ButtonDetailTrip = styled.button `
    height: 30px;
    margin-left: 50px;
    margin-top: 30px;
    background-color: rgba(0, 0, 0, 1);
    border: 1px solid #000;
    font-family: 'Roboto';
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    width: 90px;
    align-self: center;
    cursor: pointer;
    transition: 200ms;
      :hover {
        background-color: #ffe647;
        color: #000;
        box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
      }
`;


function FormPage(props) {
  const history = useHistory();
  
  const [listTrips, setListTrips] = useState([]);
  
    useEffect(() => {
      axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/hyago-turing/trips')
      .then((response) => {
        setListTrips(response.data.trips)
      }).catch((error) => {
        console.log(error.message)
      })
    }, [])

  console.log(listTrips)

  const goToApply = (tripId, tripName) => {
    history.push(`/formulario-inscricao/${tripId}/${tripName}`)
  }

  const goToHome = () => {
    history.push("/")
  }
  return (
    <Background BackgroundImage={BackgroundImage}>
      <Overlay>
        <ButtonApply onClick={goToHome}>Voltar</ButtonApply>
        <ContainerListUser>
          <h2>Viagens vigentes</h2>
          {listTrips.map(trip => {
          return (
            <ContainerTrip key={trip.id}>
              <TripSingle>
                <TitleTrip>{trip.name}</TitleTrip>
                <InfoTrip><strong>Planeta:</strong> {trip.planet}</InfoTrip>
                <InfoTrip><strong>Data de partida:</strong> {trip.date}</InfoTrip>
                <InfoTrip><strong>Duração da viagem:</strong> {trip.durationInDays} dias</InfoTrip>
                <InfoTrip><strong>{trip.description}</strong></InfoTrip>
              </TripSingle>
              <ButtonDetailTrip onClick={() => goToApply(trip.id, trip.name)}>Inscreva-se</ButtonDetailTrip>
            </ContainerTrip>
          );
        })}
        </ContainerListUser>
      </Overlay>
    </Background>
  );
}

export default FormPage;
