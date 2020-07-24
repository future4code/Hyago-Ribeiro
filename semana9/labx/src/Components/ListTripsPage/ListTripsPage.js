import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import useProtect from './../hooks/useProtect';
import BackgroundImage from './../../images/background-home.jpg';


const Background = styled.main `
  background-image: url(${props => props.BackgroundImage});
  height: 94vh;
  background-size: cover;
  box-sizing: border-box;
  color: #fff;
  align-items: center;
`;

const Overlay = styled.div `
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ContainerListAdm = styled.div `
  height: 80vh;
  width: 50vw;
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: auto;
  padding: 10px 50px;
  
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

const ButtonDeleteTrip = styled.button `
    height: 30px;
    margin-left: 5px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid red;
    font-family: 'Roboto';
    color: red;
    font-weight: bold;
    font-size: 12px;
    width: 90px;
    align-self: center;
    cursor: pointer;
    transition: 200ms;
      :hover {
        background-color: red;
        color: #fff;
        box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
      }
`;

const TitlePage = styled.h2 `
  display: inline-block;
  text-decoration: underline #000;
`;

const ButtonCreateTrip = styled.button `
    height: 30px;
    width: 120px;
    margin-left: 50px;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid #fff;
    font-family: 'Roboto';
    color: #000;
    font-weight: bold;
    font-size: 12px;
    align-self: center;
    cursor: pointer;
    transition: 200ms;
      :hover {
        background-color: #ffe647;
        border: 1px solid #ffe647;
        color: #000;
      }
`;

function ListTripsPage() {
  const history = useHistory();
  
  const listTrips = useProtect(
    'https://us-central1-labenu-apis.cloudfunctions.net/labeX/hyago-turing/trips',
    [], 'trips');

  const DeleteTrip = (tripId) => {

    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/hyago-turing/trips/${tripId}`)
      .then((response) => {
        alert("Viagem excluida com sucesso!")
        window.location.reload();
      }).catch((error) => {
        console.log(error.message)
      })
  }

    const goToTripDetail = (tripId) => {
      history.push(`/listar-viagem/detalhes-viagem/${tripId}`)
    }
  
    const goToCreateTrip = () => {
      history.push("/criar-viagem")
    }


  return (
    <Background BackgroundImage={BackgroundImage}>
      <Overlay>
        <ButtonCreateTrip onClick={goToCreateTrip}>Criar nova viagem</ButtonCreateTrip>
        <ContainerListAdm>
          <TitlePage>Viagens vigentes Lista</TitlePage>
          {listTrips.map(trip => {
          return (
            <ContainerTrip key={trip.id}>
              <TripSingle>
                <TitleTrip>{trip.name}</TitleTrip>
                <InfoTrip><strong>Planeta:</strong> {trip.planet}</InfoTrip>
                <InfoTrip><strong>Data de partida:</strong> {trip.date}</InfoTrip>
                <InfoTrip><strong>Duração da viagem:</strong> {trip.durationInDays} dias</InfoTrip>
                <InfoTrip><strong>Breve descrição:</strong> {trip.description}</InfoTrip>
              </TripSingle>
              <ButtonDetailTrip onClick={() => goToTripDetail(trip.id)}>Detalhes</ButtonDetailTrip>
              <ButtonDeleteTrip onClick={() => DeleteTrip(trip.id)}>Deletar</ButtonDeleteTrip>
            </ContainerTrip>
          );
        })} 
        </ContainerListAdm>
      </Overlay>
    </Background>
  );
}

export default ListTripsPage;
