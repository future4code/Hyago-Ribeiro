import React from 'react';
import './App.css';
import CriarPlaylist from './components/CriarPlaylist';
import MostrarPlaylist from './components/MostrarPlaylist';
import Axios from 'axios';
import DetalhesPlaylist from './components/DetalhesPlaylist';

class App extends React.Component {
  state = {
    valorInputCriarPlaylist: "",
    componentDetalhesPlaylist: false,
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
      <div>
        <MostrarPlaylist deletarPlaylist={this.deletarPlaylist} showMusics={this.showMusics} playlist={this.state.playlist} />
        <CriarPlaylist onChangePlaylist={this.onChangePlaylist} clickCreatePlaylist={this.clickCreatePlaylist} />
        {this.state.componentDetalhesPlaylist && <DetalhesPlaylist onClickAddMusic={this.onClickAddMusic} onChangeAddMusic={this.onChangeAddMusic} musicList={this.state.musicList} />}
      </div>
    );

  }

}

export default App;
