import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const ContainerForm = styled.div `
  max-width: 500px;
  margin: 0 auto;
`;

const FormData = styled.div `
`;

const LabelUser = styled.label `
`;

const InputUser = styled.input `
`;

const ButtonSaveUser = styled.button `
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
            <InputUser onChange={this.onChangeUserName} type="text" name="name" id="name" />

            <LabelUser for="email">Email:</LabelUser>
            <InputUser onChange={this.onChangeUserEmail} type="text" name="email" id="email" />
            <ButtonSaveUser onClick={this.onClickCreateUser}>Salvar</ButtonSaveUser>
          </FormData>
        </ContainerForm>
      </>
    );
  }
}

export default Form;
