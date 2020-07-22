import React from 'react';
import styled from 'styled-components';

import Question from './../QuestionForm/QuestionForm';

const ContainerForm = styled.div `
    display:flex;
    flex-direction: column;
    width: 300px;
    height: 800px;
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

const Question3 = styled.textarea `
  width: 100%;
  height: 80px;
  margin-top: 5px;
`;

const Question6 = styled.div `
  display: flex;
  flex-direction: column;
`;

const SelectQuestion = styled.select `
  height: 30px;
  margin-top: 5px;
`;

function Form() {
  return (
    <ContainerForm>
        <h2>Preencha o formulário com seus dados</h2>
        <Question type={"text"} id={"name"} pergunta={"1. Qual o seu nome completo?"} placeholder={"Nome"} />
        <Question type={"number"} id={"age"} pergunta={"2. Digite a sua idade"} placeholder={"Idade"} />
        <div>
        <label>3. Por que você merece viajar?</label>
        <Question3 />
        </div>
        <Question type={"text"} id={"profession"} pergunta={"4. Sua profissão?"} placeholder={"Profissão"} />
        <Question type={"text"} id={"country"} pergunta={"5. País onde você mora?"} placeholder={"País"} />
        <Question6>
          <label>6. Selecione uma viagem</label>
          <SelectQuestion>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </SelectQuestion>
        </Question6>
        <ButtonApply>Enviar</ButtonApply>
    </ContainerForm>

  );
}

export default Form;
