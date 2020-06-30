import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const ButtonForUsers = styled.button `

`;

class User extends React.Component {
  state = {
      listaUsers: []
  }

  componentDidMount = () => {
      this.showAllUsers();
  };

  deleteUser = (userId) => {
      Axios
        .delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
            {
                headers: {
                    Authorization: "hyago-ribeiro-turing"
                }
            }
        )
        .then(response => {
            this.showAllUsers();
            alert("Usuário deletado com sucesso.");
        }).catch(error => {
            console.log(error.data);
            alert("Não foi possível deletar o usuário");
        })
  }

  showAllUsers = () => {
      Axios
        .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
                headers: {
                    Authorization: "hyago-ribeiro-turing"
                }
            }
        )
        .then(response => {
            this.setState({ listaUsers: response.data});
        }).catch(error => {
            console.log(error.data);
        });
  };


  render(){
    return (
        <div>
            {this.state.listaUsers.map(user => {
                return <p>{user.name} <span onClick={() => this.deleteUser(user.id)}>X</span></p>;
            })}
        </div>
        
    );
  }
}

export default User;
