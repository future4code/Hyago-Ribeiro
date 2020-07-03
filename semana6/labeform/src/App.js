import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pergunta from './Components/Pergunta.js';
import styled from "styled-components";
import PrimeiraPagina from './Components/PrimeiraPagina.js';
import SegundaPagina from './Components/SegundaPagina.js';
import TerceiraPagina from './Components/TerceiraPagina.js';
import QuartaPagina from './Components/QuartaPagina.js';



const ButtonEtapas = styled.button `
  margin-top: 50px;
  padding: 10px 50px;
  border-radius: 20px;
  border:none;
  font-weight: bold;
  background-color: #d65a31;
  color: #eeeeee;
  transition: 400ms;
      &:hover {
        background-color: #F55520;
      }
      &:focus {
        outline:none;
      }
`;

const ContainerFormulario = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Alinhamento = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  width: 100vw;
  height: 100vh;
  background-color: #222831;
  color: #eeeeee;
`;

class App extends React.Component {
  state = {
    etapa: 1
  };


  

  onClickEtapas = () => {  
    this.setState({etapa: this.state.etapa + 1});
  };

  render() {
    
    const renderFormPage = () => {
      switch (this.state.etapa) {
        case 1:
          return <PrimeiraPagina />;
        case 2:
          return <SegundaPagina />
        case 3:
          return <TerceiraPagina />
        case 4:
          return <QuartaPagina />
        default:
          return <p>Seja bem vindo ao formulário</p>
          
      }
    };


    return (
      <Alinhamento>
        <ContainerFormulario>
          {renderFormPage()}
          {this.state.etapa !== 4 ? <ButtonEtapas onClick={this.onClickEtapas}>Próxima etapa</ButtonEtapas> : ""}
        </ContainerFormulario>
      </Alinhamento>
    );
    
  }
}

export default App;
