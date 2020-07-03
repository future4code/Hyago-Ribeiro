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
    playlist: [],
    musicList: []
  }

  componentDidMount() {
    this.showPlaylist();
  }
  
  showMusics = async (musicId) => {
    this.setState({componentDetalhesPlaylist: !this.state.componentDetalhesPlaylist})

    try {
      const response = await Axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${musicId}/tracks`, {
        headers: {
          Authorization: 'hyago-ribeiro-turing'
        }
      })
        this.setState({musicList: response.data.result.tracks})
        console.log(this.state.musicList)
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

  onChangePlaylist = (e) => {
    this.setState({valorInputCriarPlaylist: e.target.value})
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
        {this.state.componentDetalhesPlaylist && <DetalhesPlaylist musicList={this.state.musicList} />}
      </div>
    );

  }

}

export default App;
