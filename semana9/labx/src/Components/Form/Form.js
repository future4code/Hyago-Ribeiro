import React from 'react';
import styled from 'styled-components';
import { useParams } from "react-router";
import axios from 'axios';

import { useHistory } from 'react-router-dom';
import useForm from './../hooks/useForm';
import Country from './../SelectCountry/SelectCountry';

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
        background-color: #ffe647;
        color: #000;
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

function Form(props) {

  const history = useHistory();

  const { form, onChange } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    trip: "",
  })

  const handleForm = event => {
    event.preventDefault();
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
    }

    axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/hyago-turing/trips/${pathParams.tripId}/apply`,
      body)
      .then(response => {
        alert("Sua candidatura foi efetuada com sucesso!");
        history.push("/viagens");
      }).catch(erro => {
        console.log(erro.message)
      })

  };

  const pathParams = useParams();

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value)
  }


  return (
    <ContainerForm onSubmit={handleForm}>
        <TitleForm>Preencha o formulário<br/>com seus dados</TitleForm>
        <QuestionSingle>
          1. Qual o seu nome completo?
          <InputQuestion
          required
          pattern={"[A-Za-z]{3,}"}
          name="name" type="text"
          value={form.name}
          onChange={handleInputChange}
          placeholder="Seu nome"
          />
        </QuestionSingle>
        <QuestionSingle>
          2. Digite sua idade?
          <InputQuestion
          required
          min="18"
          name="age"
          type="number"
          value={form.age}
          onChange={handleInputChange}
          placeholder="Sua idade"
          />
        </QuestionSingle>
        <QuestionSingle>
          3. Por que você merece viajar?
          <TextareaDescription
          required
          pattern={"[A-Za-z]{30,}"}
          name="applicationText"
          value={form.applicationText}
          onChange={handleInputChange}
          placeholder="Escreva por que você merece fazer essa viagem"
          />
        </QuestionSingle>
        <QuestionSingle>
          4. Qual a sua profissão?
          <InputQuestion
          required
          pattern={"[A-Za-z]{10,}"}
          name="profession"
          type="text"
          value={form.profession}
          onChange={handleInputChange}
          placeholder="Escreva a sua profissão"
          />
        </QuestionSingle>
        <QuestionSingle>
          5. Qual o país que você mora?
          <SelectQuestion
          required
          name="country"
          type="text"
          value={form.country}
          onChange={handleInputChange}
          >
            <option value="">Selecione um país</option>
            <Country />
          </SelectQuestion>
        </QuestionSingle>
        <ButtonApply>Enviar</ButtonApply>
    </ContainerForm>

  );
}

export default Form;
