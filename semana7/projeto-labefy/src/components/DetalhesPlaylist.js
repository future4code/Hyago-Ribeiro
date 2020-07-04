import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Axios from 'axios';
import styled from 'styled-components';


const ContainerDetailPlaylist = styled.section `
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 700px;
    color: #fff;
`;

const GroupInputAddMusic = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;

const LabelAddMusic = styled.label `
    align-self: center;
`;

const InputAddMusic = styled.input `
    margin-top: 7px;
    padding: 10px 5px;
    border-radius: 8px;
    border: 2px solid #fff;
    transition: 300ms;
        &:focus {
            border:2px solid #e53981;
            outline:none;
        }
`;

const ButtonAddMusic = styled.button `
    margin-top: 7px;
    margin-bottom: 10px;
    padding: 7px 0;
    width: 60%;
    border-radius: 8px;
    align-self: center;
    background-color: #e53981;
    color: #fff;
    border:none;
    font-weight: bold;
    transition: 400ms;
    cursor: pointer;
        &:hover {
            background-color: #ce0458;
        }
`;

const ContainerMusic = styled.div `
    display: flex;
    flex-direction: column;
`;

const ShowMusic = styled.div `
    display: flex;
    flex-direction: column;
    margin: 15px 0;
`;

const TituloDetailPlaylist = styled.h3 `
    color: #fff;
`;

const Line = styled.hr `
    width: 30%;
`;

const ButtonFormAddMusic = styled.button `
    padding: 7px 0;
    width: 10%;
    border-radius: 8px;
    align-self: center;
    background-color: #21232B;
    border: 1px solid #e53981;
    color: #fff;
    transition: 400ms;
    cursor: pointer;
      &:focus {
        outline:none;
      }
      &:hover {
        background-color: #e53981;
      }
`;

const NameMusic = styled.p `
    font-size: 20px;
    margin: 0;
    font-weight: bold;
`;

const NameArtistic = styled.p `
    font-size: 16px;
    margin: 0;
    margin-bottom: 10px;
`;

const AudioPlayer = styled.audio `
    height: 40px;
    width: 300px;
    display: block;

`;

class DetalhesPlaylist extends React.Component {  
    state = {
        showAddMusic: false,
    }
    
    onClickShowAddMusic = () => {
        this.setState({showAddMusic: !this.state.showAddMusic})
    }
    
    

  render() {
    return (
        <>
            <Line/>
            <TituloDetailPlaylist>Suas músicas</TituloDetailPlaylist>
            <ButtonFormAddMusic onClick={this.onClickShowAddMusic}>Adicionar música</ButtonFormAddMusic>
            <ContainerDetailPlaylist>
                {this.state.showAddMusic && <GroupInputAddMusic>
                    <LabelAddMusic for="addmusic">Adicione uma música</LabelAddMusic>
                    <InputAddMusic onChange={this.props.onChangeAddMusic} name="song" type="text" placeholder="Nome da música"  />
                    <InputAddMusic onChange={this.props.onChangeAddMusic} name="author" type="text" placeholder="Nome do artista/banda"  />
                    <InputAddMusic onChange={this.props.onChangeAddMusic} name="url" placeholder="URL da música"  />
                    <ButtonAddMusic onClick={this.props.onClickAddMusic}>Adicionar</ButtonAddMusic>
                </GroupInputAddMusic>}
                <ContainerMusic>
                    {this.props.musicList.map(elemento => {
                        return (
                        <ShowMusic key={elemento.id}>
                            <NameMusic>{elemento.name}</NameMusic>
                            <NameArtistic>{elemento.artist}</NameArtistic>
                        <AudioPlayer src={elemento.url} controls>
                        </AudioPlayer>
                        </ShowMusic>
                            );
                    })}
                </ContainerMusic>
            </ContainerDetailPlaylist>
        </>
    );

  }

}

export default DetalhesPlaylist;
