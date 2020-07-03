import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Axios from 'axios';
import styled from 'styled-components';

const AudioPlayer = styled.audio `
    height: 70px;
    width: 300px;
`;

class DetalhesPlaylist extends React.Component {  
  render() {
    return (
        <div>
            <div>
                {this.props.musicList.map(elemento => {
                    return (
                    <div key={elemento.id}>
                    <li>{elemento.name}</li>
                    <li>{elemento.artist}</li>
                    <br/>
                    <AudioPlayer src={elemento.url} controls>
                    </AudioPlayer>
                    </div>
                        );
                })}
            </div>
            <div>
            <label for="addmusic">Adicione uma música</label>
            <input onChange={this.props.onChangeAddMusic} name="song" type="text" placeholder="Nome da música"  />
            <input onChange={this.props.onChangeAddMusic} name="author" type="text" placeholder="Nome do artista/banda"  />
            <input onChange={this.props.onChangeAddMusic} name="url" placeholder="URL da música"  />
            <button onClick={this.props.onClickAddMusic}>Criar</button>
            </div>
        </div>
    );

  }

}

export default DetalhesPlaylist;
