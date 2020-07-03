import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const ButtonForUsers = styled.button `

`;

const ContainerUsers = styled.div `
    margin: 0 auto;
`;

class Info extends React.Component {
  state = {
      listaUsers: this.props.infoUsers
  }


  rendenizarInfo = () => {
      return console.log("chamooou")
  }
 

  render(){
      console.log(this.state.listaUsers)
    return (
        <ContainerUsers>
           <button onClick={this.props.voltarInfo}>Voltar</button>
           {this.state.listaUsers.map(user => {
               return <p>{user.name}</p>
           })}
           {this.rendenizarInfo}
        </ContainerUsers>
        
    );
  }
}

export default Info;
