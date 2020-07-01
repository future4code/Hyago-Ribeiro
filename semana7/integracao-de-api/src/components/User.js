import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';
// import Info from './Info';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const axiosConfig = {
    headers: {
        Authorization: "hyago-ribeiro-turing"
    }
};

const ButtonForUsers = styled.button `

`;

const ContainerUsers = styled.div `
    margin: 0 auto;
`;

const UserLine = styled.p `
    display: inline-block;
`;

const ButtonDeleteUser = styled.span `
    cursor: pointer;
    color: red;
    font-weight: bold;
`;

class User extends React.Component {
  state = {
      listaUsers: [],
      detailUser: [],
      componentInfo: true,
      containerUsers: true
  }

  componentDidMount = () => {
      this.showAllUsers();
  };

  deleteUser = (userId) => {
      Axios
        .delete(`${baseUrl}/${userId}`, axiosConfig)
        .then(() => {
            this.showAllUsers();
            alert("Usuário deletado com sucesso.");
            
        }).catch(error => {
            console.log(error.data);
            alert("Não foi possível deletar o usuário");
        });
        
  }
  

  showAllUsers = () => {
      Axios
        .get(baseUrl, axiosConfig)
        .then(response => {
            this.setState({ listaUsers: response.data});
        }).catch(error => {
            console.log(error.data);
        });
  };

  showInfoUser = (userId) => {
      Axios
        .get(`${baseUrl}/${userId}`, axiosConfig)
        .then(response => {
            this.setState({detailUser: response.data});
        }).catch(error => {
            console.log(error.data);
        });
  };


    infoUser = () => {
        this.setState({componentInfo: !this.state.componentInfo})
        this.setState({containerUsers: !this.state.containerUsers})
    }

    rendenizaInfo = () => {
        return <p>{this.state.detailUser.name}</p>
    }

  render(){
    console.log(this.state.detailUser)
    return (
        <>
        {this.state.containerUsers && <ContainerUsers>
            {this.state.listaUsers.map(user => {
                return <><UserLine onClick={() => {this.showInfoUser(user.id)}}>{user.name}</UserLine><ButtonDeleteUser onClick={() => {if(window.confirm('Quer deletar esse usuário?')) {this.deleteUser(user.id)}}}> X</ButtonDeleteUser><br/></>
            })}
        </ContainerUsers>}
        {/* {this.state.componentInfo && <Info infoUsers={this.state.detailUser} voltarInfo={this.infoUser} />} */}
        {this.rendenizaInfo()}
        </>
    );
  }
}

export default User;
