import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import Question from './../QuestionForm/QuestionForm';
import useInput from './../hooks/useInput';

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
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerLogin = styled.div `
  width: 400px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ButtonLogin = styled.button `
    height: 30px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #fff;
    font-family: 'Roboto';
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    width: 140px;
    align-self: center;
    cursor: pointer;
    transition: 200ms;
      :hover {
        background-color: #ffe647;
        color: #000;
        border: 1px solid #000;
      }
`;

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/hyago-turing"

function LoginPage(props) {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const history = useHistory();

  const handleLoginPage = async () => {
    try {
      const body = {
        email: email,
        password: password
      };

      const response = await axios.post(`${baseUrl}/login`, body)
        window.localStorage.setItem("token", response.data.token);
        history.push("/listar-viagem");
    } catch(error) {
      console.log(error.response)
    }
  }

  return (
    <Background BackgroundImage={BackgroundImage}>
      <Overlay>
        <ContainerLogin>
          <h2>Login Administrador</h2>
          <Question value={email} onChange={setEmail} pergunta={"E-mail"} placeholder={"e-mail"} type={"text"} id={"email"} />
          <Question value={password} onChange={setPassword} pergunta={"Senha"} placeholder={"senha"} type={"password"} id={"senha"} />
          <ButtonLogin onClick={handleLoginPage}>Entrar</ButtonLogin>
        </ContainerLogin>
      </Overlay>
    </Background>
  );
}

export default LoginPage;
