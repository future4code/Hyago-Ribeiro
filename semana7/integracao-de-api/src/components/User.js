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


const ContainerUsers = styled.div `
`;

const PaginaUser = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

const UserLine = styled.p `
    display: inline-block;
`;

const ButtonDeleteUser = styled.span `
    cursor: pointer;
    color: red;
    font-weight: bold;
`;

const ContainerInfo = styled.div `
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

const ButtonVoltarInfo = styled.button `
    width: 60px;
    height: 30px;
`;

const InfoUser = styled.div `
`;

const InputPesquisa = styled.input `
    width: 100px;
    height:30px;
`;

const BotaoParaPesquisar = styled.button `
    width: 50px;
    height: 30px;
`;

class User extends React.Component {
  state = {
      listaUsers: [],
      detailUser: [],
      componentInfo: false,
      containerUsers: true,
      botaoExcluirInfo: true,
      showEdit: false,
      botaoEdit: true,
      botaoSalvar: false,
      valueInputName: "",
      valueInputEmail: "",
      valueInputPesquisa: ""
  }

  componentDidMount = () => {
      this.showAllUsers();
  };

  onChangeUserName = (e) => {
    this.setState({valueInputName: e.target.value})
  }

  onChangeUserEmail = (e) => {
    this.setState({valueInputEmail: e.target.value})
  }

  onChangePesquisa = (e) => {
    this.setState({valueInputPesquisa: e.target.value})
  }

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

  onClickEditUser = (userId) => {
    const body = {
      name: this.state.valueInputName,
      email: this.state.valueInputEmail
    };

    Axios
      .put(`${baseUrl}/${userId}`, body, axiosConfig)
      .then(response => {
        this.showAllUsers();
        this.setState({valorInputName: ""});
      }).catch(error => {
        console.log(error.data);
      });

      
      this.setState({botaoEdit: !this.state.botaoEdit})
      this.setState({botaoSalvar: !this.state.botaoSalvar})
  };

  showInfoUser = (userId) => {
      Axios
        .get(`${baseUrl}/${userId}`, axiosConfig)
        .then(response => {
            this.setState({detailUser: response.data});
        }).catch(error => {
            console.log(error.data);
        });
        
        this.setState({componentInfo: !this.state.componentInfo})
        this.setState({containerUsers: !this.state.containerUsers})

  };

  onClickPesquisa = (value) => {
      Axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${value}&email=`, axiosConfig)
        .then(response => {
            value !== "" ? this.setState({listaUsers: response.data}) : this.showAllUsers()
        }).catch(error => {
            console.log(error.data);
        })
  }

    fechaInfo = () => {
        this.setState({componentInfo: !this.state.componentInfo})
        this.setState({containerUsers: !this.state.containerUsers})
    }

    mostrarEdit = () => {
        this.setState({showEdit: !this.state.showEdit})
        this.setState({botaoEdit: !this.state.botaoEdit})
        this.setState({botaoSalvar: !this.state.botaoSalvar})


    }



    rendenizaInfo = () => {
        return (
        <ContainerInfo>
            <ButtonVoltarInfo onClick={this.fechaInfo}>Voltar</ButtonVoltarInfo>
            <InfoUser><p>Nome: {this.state.detailUser.name} <br/>Email: {this.state.detailUser.email}</p></InfoUser>
            {this.state.botaoExcluirInfo && <button onClick={() => {if(window.confirm('Quer deletar esse usuário?')) {this.deleteUser(this.state.detailUser.id)}}}>excluir</button>}
            {this.state.showEdit && <div>
                <label for="name">Nome:</label>
                <input placeholder="Nome do usuário" onChange={this.onChangeUserName} type="text" name="name" id="name" />
                <label for="email">Email:</label>
                <input placeholder="Email do usuário" onChange={this.onChangeUserEmail} type="text" name="email" id="email" />
            </div>}
            {this.state.botaoSalvar && <button onClick={() => {if(window.confirm('Quer mesmo editar esse usuário?')) {this.onClickEditUser(this.state.detailUser.id)}}}>Salvar</button>}
            {this.state.botaoEdit && <button onClick={this.mostrarEdit}>Editar</button>}
        </ContainerInfo>
        );
    }

  render(){
    return (
        <PaginaUser>
        <InputPesquisa placeholder="Pesquisa" onChange={this.onChangePesquisa} type="text" name="pesquisa" id="pesquisa"/>
        <BotaoParaPesquisar onClick={() => this.onClickPesquisa(this.state.valueInputPesquisa)}>Pesquisar</BotaoParaPesquisar>
         {this.state.containerUsers && <ContainerUsers>
            {this.state.listaUsers.map(user => {
                return <><UserLine onClick={() => {this.showInfoUser(user.id)}}>{user.name}</UserLine><ButtonDeleteUser onClick={() => {if(window.confirm('Quer deletar esse usuário?')) {this.deleteUser(user.id)}}}> X</ButtonDeleteUser><br/></>
            })}
        </ContainerUsers>}
         {this.state.componentInfo && this.rendenizaInfo()}
        </PaginaUser>
    );
  }
}

export default User;
