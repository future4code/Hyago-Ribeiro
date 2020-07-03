import React from 'react';
import Axios from 'axios';

class MostrarPlaylist extends React.Component {  
  render() {
    return (
        <div>
            {this.props.playlist.map(elemento => {
                return <><span onClick={() => this.props.showMusics(elemento.id)}  key={elemento.name}>{elemento.name}</span> <span onClick={() => this.props.deletarPlaylist(elemento.id)}>X</span><br/></>
            })}
        </div>
    );

  }

}

export default MostrarPlaylist;
