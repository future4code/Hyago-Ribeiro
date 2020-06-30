import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Form from './components/Form';
import User from './components/User';

const ButtonForUsers = styled.button `

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



  render(){
    return (
      <>
        <ButtonForUsers onClick={this.renderizaComponent}>Ir para página de lista</ButtonForUsers>
        {this.state.componentForm && <Form/>}
        {this.state.componentUser && <User/>}
        
      </>
    );
  }
}

export default App;
