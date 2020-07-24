import useProtect from './../hooks/useProtect';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { useParams } from "react-router";
import React from 'react';
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

const Overlay = styled.div `
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.85);
`;

const ContainerListAdm = styled.div `
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

const DetailInfoTrip = styled.div `
`;

const TitleInfoTrip = styled.h2 `

`;

const InfoTrip = styled.p `
  font-size: 18px;
`;

const CandidateGroup = styled.div `
  display: flex;
  flex-wrap: wrap;
`;

const CandidateSingle = styled.div `
  display: flex;
  flex-direction: column;
  border: solid 1px #000;
  margin-right: 15px;
  margin-bottom: 15px;
  padding: 15px;
  width: 20%;
`;

const TitleCandidates = styled.p `
  font-weight: 600;
  font-size: 20px;
  border-top: 1px solid #000;
  padding-top: 20px;
`;

const InfoCandidate = styled.p `
  margin: 5px 0;
`;

const ButtonsDecide = styled.div `
  margin: 8px auto 0;
`;

const LetterApproved = styled.div `
  color: green;
  font-weight:800;
`;

const ButtonApproved = styled.button `
    height: 30px;
    margin-left: 10px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid green;
    font-family: 'Roboto';
    color: green;
    font-weight: bold;
    font-size: 12px;
    width: 70px;
    align-self: center;
    cursor: pointer;
    transition: 200ms;
      :hover {
        background-color: green;
        color: #fff;
        box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
      }
`;

const ButtonReproved = styled.button `
    height: 30px;
    margin-left: 10px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid red;
    font-family: 'Roboto';
    color: red;
    font-weight: bold;
    font-size: 12px;
    width: 70px;
    align-self: center;
    cursor: pointer;
    transition: 200ms;
      :hover {
        background-color: red;
        color: #fff;
        box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
      }
`;


const ButtonBack = styled.button `
    margin-top: 20px;
    height: 30px;
    margin-left: 50px;
    background-color: rgba(0, 0, 0, 1);
    border: 1px solid #fff;
    font-family: 'Roboto';
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    width: 70px;
    align-self: center;
    cursor: pointer;
    transition: 200ms;
      :hover {
        background-color: #fff;
        color: #000;
        box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
      }
`;

function TripDetailPage() {
  const history = useHistory();
  const pathParams = useParams();

  const tripDetail = useProtect(
  `https://us-central1-labenu-apis.cloudfunctions.net/labeX/hyago-turing/trip/${pathParams.tripId}`,
    {}, 'trip');

  console.log(tripDetail.candidates)

  const approveOrReproved = (candidateId, trueOrFalse) => {
    const token = window.localStorage.getItem("token");
    const body = {
      approve: trueOrFalse
    }

    axios.put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/hyago-turing/trips/${pathParams.tripId}/candidates/${candidateId}/decide`,
      body, {
        headers: {
          auth: token
        }
        })
      .then(response => {
        trueOrFalse ? alert("Candidato aprovado") : 
        alert("Candidato reprovado");
        window.location.reload();
      }).catch(erro => {
        console.log(erro.message)
      })

  };


  const goToBack = () => {
      history.push("/listar-viagem")
  }

  
  return (
    <Background BackgroundImage={BackgroundImage}>
      <Overlay>
        <ButtonBack onClick={goToBack}>Voltar</ButtonBack>
        <ContainerListAdm>
          <DetailInfoTrip>
            <TitleInfoTrip>{tripDetail.name}</TitleInfoTrip>
            <InfoTrip>Planeta Destino: {tripDetail.planet}</InfoTrip>
            <InfoTrip>Data de partida: {tripDetail.date}</InfoTrip>
            <InfoTrip>Duração da viagem: {tripDetail.durationInDays}</InfoTrip>
            <InfoTrip>Descrição: {tripDetail.description}</InfoTrip>
          </DetailInfoTrip>
            <TitleCandidates>Avaliação pendente</TitleCandidates>
          <CandidateGroup>
            {tripDetail.candidates && tripDetail.candidates.map(candidate => {
              return (
                <CandidateSingle>
                  <h4>{candidate.name}</h4>
                  <InfoCandidate>{candidate.age} anos</InfoCandidate>
                  <InfoCandidate>{candidate.applicationText}</InfoCandidate>
                  <InfoCandidate>{candidate.country}</InfoCandidate>
                  <InfoCandidate>Profissão: {candidate.profession}</InfoCandidate>
                  <ButtonsDecide>
                    <ButtonApproved onClick={() => approveOrReproved(candidate.id, true)}>Aprovar</ButtonApproved>
                    <ButtonReproved onClick={() => approveOrReproved(candidate.id, false)}>Reprovar</ButtonReproved>
                  </ButtonsDecide>
                </CandidateSingle>
              );
            })}
          </CandidateGroup>
          <TitleCandidates>Aprovados</TitleCandidates>
          <CandidateGroup>
            {tripDetail.approved && tripDetail.approved.map(candidate => {
              return (
                <CandidateSingle>
                  <h4>{candidate.name}</h4>
                  <InfoCandidate>{candidate.age} anos</InfoCandidate>
                  <InfoCandidate>{candidate.applicationText}</InfoCandidate>
                  <InfoCandidate>{candidate.country}</InfoCandidate>
                  <InfoCandidate>Profissão: {candidate.profession}</InfoCandidate>
                  <LetterApproved>APROVADO!</LetterApproved>
                </CandidateSingle>
              );
            })}
          </CandidateGroup>
        </ContainerListAdm>
      </Overlay>
    </Background>
  );
}

export default TripDetailPage;
