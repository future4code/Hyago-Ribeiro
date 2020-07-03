import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const ContainerForm = styled.div `
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  
`;

const FormData = styled.div `
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    padding: 50px;
`;

const LabelUser = styled.label `
`;

const InputUser = styled.input `
    border-radius: 8px;
    border: 1px solid #000;
    margin: 10px 0;
    padding: 0 8px;
`;

const ButtonSaveUser = styled.button `
    margin-top: 10px;
    width: 80px;
    padding: 8px;
    align-self: center;
    border: 1px solid #000;
    color: #fff;
    background-color: #000;
    border-radius: 8px;
    transition: 300ms;
        &:hover {
            color: #000;
            background-color: #fff;
        }
        &:focus {
            outline: none;
        }
`;

class Form extends React.Component {
  state = {
    valorInputName: "",
    valorInputEmail: ""
  }

  onChangeUserName = (e) => {
    this.setState({valorInputName: e.target.value})
  }

  onChangeUserEmail = (e) => {
    this.setState({valorInputEmail: e.target.value})
  }

  onClickCreateUser = () => {
    const body = {
      name: this.state.valorInputName,
      email: this.state.valorInputEmail
    };

    Axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
        body,
        {
          headers: {
            Authorization: "hyago-ribeiro-turing"
          }
        }
      )
      .then(response => {
        alert(`Um novo usuário foi criado`)
        this.setState({valorInputName: ""});
      }).catch(error => {
        console.log(error.data);
      });
  };

  render(){
    return (
      <>
        <ContainerForm>
          <FormData>
            <LabelUser for="name">Nome:</LabelUser>
            <InputUser placeholder="Nome do usuário" onChange={this.onChangeUserName} type="text" name="name" id="name" />

            <LabelUser for="email">Email:</LabelUser>
            <InputUser placeholder="Email do usuário" onChange={this.onChangeUserEmail} type="text" name="email" id="email" />
            <ButtonSaveUser onClick={this.onClickCreateUser}>Salvar</ButtonSaveUser>
          </FormData>
        </ContainerForm>
      </>
    );
  }
}

export default Form;
