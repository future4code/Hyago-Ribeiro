import React from 'react';

class CriarPlaylist extends React.Component {

  render() {
    return (
        <div>
            <label for="playlist">Crie sua playlist</label>
            <input onChange={this.props.onChangePlaylist} type="text" name="playlist" id="playlist" placeholder="Nome da sua playlist"  />
            <button onClick={this.props.clickCreatePlaylist}>Criar</button>
        </div>
    );

  }

}

export default CriarPlaylist;
