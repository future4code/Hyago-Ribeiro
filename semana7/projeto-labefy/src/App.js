import React from 'react';
import CriarPlaylist from './components/CriarPlaylist';
import MostrarPlaylist from './components/MostrarPlaylist';
import Axios from 'axios';
import DetalhesPlaylist from './components/DetalhesPlaylist';
import styled from 'styled-components';
import Header from './components/Header';

const ContainerApp = styled.main `
  background-color: #21232B;
  min-height: 90vh;
  min-width: 100vw;
  display: flex;
  flex-direction:column;
  align-items: center;
`;

const ButtonLibrary = styled.button `
    margin-bottom: 8px;
    border-radius: 8px;
    padding: 5px 8px;
    background-color: #21232B;
    border: 1px solid #e53981;
    color: #fff;
    cursor: pointer;
      &:focus {
        outline:none;
      }
`;

class App extends React.Component {
  state = {
    valorInputCriarPlaylist: "",
    componentDetalhesPlaylist: false,
    showComponentPlaylist: false,
    song: "",
    author: "",
    url: "",
    playlistSelecionada: "",
    playlist: [],
    musicList: []
  }

  componentDidMount() {
    this.showPlaylist();
  }
  
  showMusics = async (musicId) => {
    this.setState(
      {componentDetalhesPlaylist: !this.state.componentDetalhesPlaylist, playlistSelecionada: musicId}, 
      function() {
        console.log(this.state.playlistSelecionada);
      }
    );

    try {
      const response = await Axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${musicId}/tracks`, {
        headers: {
          Authorization: 'hyago-ribeiro-turing'
        }
      })
        this.setState({musicList: response.data.result.tracks})
    } catch(error) {
      console.log(error.response)
    }

  }


  showPlaylist = async () => {
    try {
      const response = await Axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
        headers: {
          Authorization: 'hyago-ribeiro-turing'
        }
      })
        this.setState({playlist: response.data.result.list})
    } catch(error) {
      console.log(error.response)
    }
  }

  deletarPlaylist = async userId => {
      try {
        const response = await Axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${userId}`, {
          headers: {
            Authorization: 'hyago-ribeiro-turing'
          }
        })
        this.showPlaylist();
        alert("Playlist foi apagada com sucesso");
      } catch(error) {
        console.log(error.response)
      }
  };

  onChangeAddMusic = async (e) => {
    const target = e.target;
    this.setState({[target.name]: target.value})
    console.log(this.state.song)
  }

  onChangePlaylist = (e) => {
    this.setState({valorInputCriarPlaylist: e.target.value})
  };

  onClickAddMusic = async () => {
    const body = {
      name: this.state.song,
      artist: this.state.author,
      url: this.state.url
    }
    try {
      const response = await Axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistSelecionada}/tracks`, body, {
        headers: {
          Authorization: 'hyago-ribeiro-turing'
        }
      })
      this.showMusics();
      alert('Música adicionada com sucesso')
    } catch(error) {
      console.log(error.response)
    }
  };

  onClickShowAllPlaylists = () => {
    this.setState({showComponentPlaylist: !this.state.showComponentPlaylist})
  }

  clickCreatePlaylist = async () => {
    
    const body = {
      name: this.state.valorInputCriarPlaylist
    }
    try {
      const response = await Axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
        headers: {
          Authorization: 'hyago-ribeiro-turing'
        }
      })
      this.showPlaylist();
      alert('Playlist criada com sucesso')
    } catch(error) {
      console.log(error.response)
    }
};



  render() {
    return (
      <>
        <Header />
        <ContainerApp>
          <CriarPlaylist onChangePlaylist={this.onChangePlaylist} clickCreatePlaylist={this.clickCreatePlaylist} />
          <ButtonLibrary onClick={this.onClickShowAllPlaylists}>Sua Biblioteca</ButtonLibrary>
          {this.state.showComponentPlaylist && <MostrarPlaylist deletarPlaylist={this.deletarPlaylist} showMusics={this.showMusics} playlist={this.state.playlist} />}
          {this.state.componentDetalhesPlaylist && <DetalhesPlaylist onClickAddMusic={this.onClickAddMusic} onChangeAddMusic={this.onChangeAddMusic} musicList={this.state.musicList} />}
        </ContainerApp>
      </>
    );

  }

}

export default App;
