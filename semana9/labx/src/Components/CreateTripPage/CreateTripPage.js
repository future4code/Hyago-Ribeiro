import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import useProtect from './../hooks/useProtect';
import styled from 'styled-components';
import axios from 'axios';

import useForm from './../hooks/useForm';
import Country from './../SelectCountry/SelectCountry';

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
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.65);
`;

const ContainerCreateTrip = styled.div `
  height: 80vh;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 10px 50px;
  
`;

const ButtonBack = styled.button `
    width: 150px;
    align-self: start;
    margin: 15px 0 0 50px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0);
    color: #fff;
    border: 1px solid #fff;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: 200ms;
      :hover {
        background-color: #ffe647;
        border: 1px solid #000;
        color: #000;
        box-shadow: 0px 0px 5px 0px rgba(255,255,255, 0.3);
      }
`;

const ContainerForm = styled.form `
    display:flex;
    flex-direction: column;
    width: 300px;
    height: 700px;
    justify-content: space-between;
`;

const ButtonApply = styled.button `
    height: 35px;
    background-color: #fff;
    border: 1px solid #000;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 16px;
    width: 60%;
    align-self: center;
    cursor: pointer;
    transition: 200ms;
      :hover {
        background-color: #000;
        color: #fff;
        box-shadow: 0px 0px 5px 0px rgba(255,255,255, 0.3);
      }
`;

const TitleForm = styled.p `
  font-size: 20px;
  margin: 0;
`;

const InputQuestion = styled.input `
  height: 30px;
  margin-top: 8px;
`;

const QuestionSingle = styled.label `
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

const TextareaDescription = styled.textarea `
  height: 120px;
  margin-top: 8px;
  resize: none;
`;

const SelectQuestion = styled.select `
  height: 30px;
  margin-top: 5px;
`;

function CreateTripPage(props) {
  
  const history = useHistory();
  
  const listTrips = useProtect(
    'https://us-central1-labenu-apis.cloudfunctions.net/labeX/hyago-turing/trips',
    [], 'trips');
  
    const today = new Date().toISOString().split("T")[0];
    
    
    const { form, onChange } = useForm({
      name: "",
      planet: "",
      date: "",
      description: "",
      durationInDays: "",
    })
    
    const handleInputChange = event => {
      const { name, value } = event.target;
      
      onChange(name, value)
    }

    const handleForm = event => {
      const token = window.localStorage.getItem("token");
      const [year, month, day] = form.date.split("-")
      event.preventDefault();
      const body = {
        name: form.name,
        planet: form.planet,
        date: `${day}/${month}/${year.substring(2,4)}`,
        description: form.description,
        durationInDays: form.durationInDays
      }
  
      axios.post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/hyago-turing/trips`,
        body, {
          headers: {
            auth: token
          }
          })
        .then(response => {
          console.log("Criada nova viagem")
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
        <ButtonBack onClick={goToBack}>Lista de viagens</ButtonBack>
        <ContainerCreateTrip>
          <h2>Criar nova viagem</h2>
          <ContainerForm onSubmit={handleForm}>
        <TitleForm>Preencha o formulário com os dados da viagem</TitleForm>
        <QuestionSingle>
          1. Nome da viagem (min. 5 caracteres)
          <InputQuestion required pattern={"^.{5,}"} name="name" type="text" value={form.name} onChange={handleInputChange} placeholder="Escreva o nome da viagem" />
        </QuestionSingle>
        <QuestionSingle>
          2. Planeta destino
          <SelectQuestion
          required
          name="planet"
          type="text"
          value={form.planet}
          onChange={handleInputChange}
          >
            <option value="">Selecione um planeta</option>
            <option value="Mercúrio">Mercúrio</option>
            <option value="Vênus">Vênus</option>
            <option value="Marte">Marte</option>
            <option value="Júpiter">Júpiter</option>
            <option value="Saturno">Saturno</option>
            <option value="Urano">Urano</option>
            <option value="Netuno">Netuno</option>
            <option value="Plutão">Plutão</option>
          </SelectQuestion>
        </QuestionSingle>
        <QuestionSingle>
          3. Data de partida
          <InputQuestion required min={today} name="date" type="date" value={form.date} onChange={handleInputChange} placeholder="Data da partida" />
        </QuestionSingle>
        <QuestionSingle>
          4. Descrição da viagem (min. 30 caracteres)
          <TextareaDescription required pattern={"^.{30,}"} name="description" value={form.description} onChange={handleInputChange} placeholder="Breve descrição da viagem" />
        </QuestionSingle>
        <QuestionSingle>
          5. Duração da viagem (min. 50 dias)
          <InputQuestion required min="50" name="durationInDays" type="number" value={form.durationInDays} onChange={handleInputChange} placeholder="Dias que duraram a viagem" />
        </QuestionSingle>
        <ButtonApply>Enviar</ButtonApply>
    </ContainerForm>
          
        </ContainerCreateTrip>
      </Overlay>
    </Background>
  );
}

export default CreateTripPage;
