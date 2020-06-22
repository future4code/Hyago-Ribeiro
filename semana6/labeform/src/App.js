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
`;

const ContainerFormulario = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <ContainerFormulario>
        {renderFormPage()}
        {this.state.etapa !== 4 ? <ButtonEtapas onClick={this.onClickEtapas}>Próxima etapa</ButtonEtapas> : ""}
      </ContainerFormulario>
    );
    
  }
}

export default App;
