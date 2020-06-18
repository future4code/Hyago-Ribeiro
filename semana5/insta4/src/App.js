import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <>
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Severo'}
          fotoUsuario={'https://ca.slack-edge.com/TLAVDH7C2-UM45WMAVB-a405c5a6111f-512'}
          fotoPost={'https://picsum.photos/200/150?random=1'}
        />
      </div>

      <div className={'app-container'}>
        <Post
          nomeUsuario={'Caio'}
          fotoUsuario={'https://ca.slack-edge.com/TLAVDH7C2-U01048UJVFD-d5ddc01fbba1-512'}
          fotoPost={'https://picsum.photos/200/150?random=2'}
        />
      </div>
      <div className={'app-container'}>
      <Post
        nomeUsuario={'Soter'}
        fotoUsuario={'https://ca.slack-edge.com/TLAVDH7C2-ULV6PQGCF-453a00e08a1f-512'}
        fotoPost={'https://picsum.photos/200/150?random=3'}
      />
    </div>
    </>
    );
  }
}

export default App;
