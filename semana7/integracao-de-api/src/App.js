import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Form from './components/Form';
import User from './components/User';

const ButtonForUsers = styled.button `
  height: 20px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const ContainerMain = styled.div `
  display: flex;
`;

class App extends React.Component {
  state = {
    componentForm: true,
    componentUser: false
  }

  renderizaComponent = () => {
    this.setState({ componentForm: !this.state.componentForm })
    this.setState({ componentUser: !this.state.componentUser })
  }

  rendenizaBotao = () => {
    if (this.state.componentForm) {
      return <ButtonForUsers onClick={this.renderizaComponent}>Ir para página de lista</ButtonForUsers>
    } else {
      return <ButtonForUsers onClick={this.renderizaComponent}>Ir para página de cadastro</ButtonForUsers>
    }
  }

  render(){
    return (
      <ContainerMain>
        {this.rendenizaBotao()}
        {this.state.componentForm && <Form/>}
        {this.state.componentUser && <User/>}
        
      </ContainerMain>
    );
  }
}

export default App;
