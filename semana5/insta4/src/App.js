import React from 'react';
import Post from './components/Post/Post';
import styled from 'styled-components';

const AppContainer = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 20px auto;
`;
const VisualInput = styled.input`
    margin-bottom: 8px;
    height: 25px;

`;

const VisualButton = styled.button`
    font-weight: bold;
    color: #fff;
    background-color: #000;
    width 150px;
    height: 25px;
    margin: 0 auto;
    border: solid 1px #000;
    border-radius: 15px;
    transition: 300ms;
    &:hover {
      background-color: #fff;
      color: #000;
    } 

`;

class App extends React.Component {

  state = {

    arrayPost: [
      {
        nomeUsuario: "Severo",
        fotoUsuario: "https://ca.slack-edge.com/TLAVDH7C2-UM45WMAVB-a405c5a6111f-512",
        fotoPost: "https://picsum.photos/200/150?random=1"
      },
      {
        nomeUsuario: "Soter",
        fotoUsuario: "https://ca.slack-edge.com/TLAVDH7C2-ULV6PQGCF-453a00e08a1f-512",
        fotoPost: "https://picsum.photos/200/150?random=3"
      },
      {
        nomeUsuario: "Caio",
        fotoUsuario: "https://ca.slack-edge.com/TLAVDH7C2-U01048UJVFD-d5ddc01fbba1-512",
        fotoPost: "https://picsum.photos/200/150?random=2"
      }
    ],

    valorInputNome: "",
    valorInputFoto: "",
    valorInputPost: ""
  };

  adicionarPost = () => {

    const novoPost = {

      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputPost

    };

    const novosPosts = [novoPost, ...this.state.arrayPost];

    this.setState({arrayPost: novosPosts});

    const novoInput = "";
    this.setState({valorInputNome: novoInput});
    this.setState({valorInputFoto: novoInput});
    this.setState({valorInputPost: novoInput});

  };

  

  onChangeInputNome = event => {

    this.setState({valorInputNome: event.target.value});

  };

  onChangeInputFoto = event => {

    this.setState({valorInputFoto: event.target.value});

  };

  onChangeInputPost = event => {

    this.setState({valorInputPost: event.target.value});

  };


  render() {

    const listaDePosts = this.state.arrayPost.map(post => {
      return (
        <AppContainer>
          <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
          />
        </AppContainer>
      );

    });

    return (
      <>
        <ContainerInput>
          <VisualInput
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome do usuário"}
          />
          <VisualInput
            value={this.state.valorInputFoto}
            onChange={this.onChangeInputFoto}
            placeholder={"Link foto perfil"}
          />
          <VisualInput
            value={this.state.valorInputPost}
            onChange={this.onChangeInputPost}
            placeholder={"Link foto publicação"}
          />
          <VisualButton onClick={this.adicionarPost}>Postar</VisualButton>
        </ContainerInput>
       {listaDePosts}
      </>
    );
  }
}

export default App;
