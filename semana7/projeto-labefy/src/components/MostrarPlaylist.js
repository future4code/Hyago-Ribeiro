import React from 'react';
import styled from 'styled-components';
import IconDelete from '../images/trash.svg';

const ContainerPlaylists = styled.section `
  color: #fff;
`;

const LinePlaylist = styled.p `

`;

const SpanDeletarPlaylist = styled.span `

`;

const IconTrash = styled.img `
    width: 15px;
`;

const PlaylistSingle = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TituloPlaylist = styled.h3 `

`;

const Line = styled.hr `
    width: 30%;
`;

class MostrarPlaylist extends React.Component {  
  render() {
    return (
        <>
        <Line/>
        <ContainerPlaylists>
            <TituloPlaylist>Suas Playlists</TituloPlaylist>
            {this.props.playlist.map(elemento => {
                return (
                    <PlaylistSingle>
                        <LinePlaylist onClick={() => this.props.showMusics(elemento.id)} key={elemento.name}>{elemento.name}</LinePlaylist>
                        <SpanDeletarPlaylist onClick={() => this.props.deletarPlaylist(elemento.id)}><IconTrash src={IconDelete} /></SpanDeletarPlaylist>
                    </PlaylistSingle>
                );
            })}
        </ContainerPlaylists>
        </>
    );

  }

}

export default MostrarPlaylist;
