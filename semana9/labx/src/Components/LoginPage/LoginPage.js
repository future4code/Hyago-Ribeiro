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

const ContainerLogin = styled.form `
  width: 400px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const InsertLogin = styled.label `
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;

const InsertInfo = styled.input `
  width: 350px;
  margin-top: 10px;
  height: 30px;
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

  const handleLoginPage = async (event) => {
    event.preventDefault();
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
        <ContainerLogin onSubmit={handleLoginPage}>
          <h2>Login Administrador</h2>
          <InsertLogin>
            E-mail
          <InsertInfo  name="email" type="email" value={email} onChange={setEmail} placeholder="E-mail" />
        </InsertLogin>
        <InsertLogin>
            Senha
          <InsertInfo  name="password" type="password" value={password} onChange={setPassword} placeholder="Senha" />
        </InsertLogin>
          <ButtonLogin>Entrar</ButtonLogin>
        </ContainerLogin>
      </Overlay>
    </Background>
  );
}

export default LoginPage;
