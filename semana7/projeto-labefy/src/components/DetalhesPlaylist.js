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
        <>
            {this.props.musicList.map(elemento => {
                return (
                <div>
                <li key={elemento.id}>{elemento.name}</li>
                <li key={elemento.id}>{elemento.artist}</li>
                <br/>
                <AudioPlayer src={elemento.url} controls>
                </AudioPlayer>
                </div>
                    );
            })}
        </>
    );

  }

}

export default DetalhesPlaylist;
