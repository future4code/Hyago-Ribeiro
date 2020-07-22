import React from 'react';
import styled from 'styled-components';

import Question from './../QuestionForm/QuestionForm';

const ContainerForm = styled.div `
    display:flex;
    flex-direction: column;
    width: 300px;
    height: 400px;
    justify-content: space-between;
`;

function Form() {
  return (
    <ContainerForm>
        <Question type={"text"} id={"name"} pergunta={"1. Qual o seu nome completo?"} placeholder={"nome"} />
        <Question type={"number"} id={"age"} pergunta={"2. Digite a sua idade"} placeholder={"nome"} />
        <div>
        <label>3. Por que você merece viajar?</label>
        <textarea />
        </div>
        <Question type={"text"} id={"profession"} pergunta={"4. Sua profissão?"} placeholder={"nome"} />
        <Question type={"text"} id={"country"} pergunta={"5. País onde você mora?"} placeholder={"nome"} />
        <label>6. Qual país você mora?</label>
        <select>
            <optio>Brasil</optio>
        </select>
        <button>Enviar</button>
    </ContainerForm>

  );
}

export default Form;
