import React from 'react';
import styled from 'styled-components';

const ContainerForm = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LabelPlaylist = styled.label `
    color: #fff;
    font-weight: 500;
    margin-bottom: 8px;
`;

const InputNomePlaylist = styled.input `
    width: 80%;
    margin-bottom: 8px;
    padding: 5px 5px;
    border-radius: 8px;
    border: #fff;
        &:focus {
            outline: none;
        }

`;

const ButtonCreatePlaylist = styled.button `
    width: 50%;
    margin-bottom: 8px;
    border-radius: 8px;
    padding: 5px 4px;
    background-color: #e53981;
    color: #fff;
    font-weight: bold;
    border: #fff;
    transition: 400ms;
    cursor: pointer;
        &:hover {
            background-color: #ce0458;
        }
`;

const TituloForm = styled.h3 `
    color: #fff;
`;

class CriarPlaylist extends React.Component {

  render() {
    return (
        <ContainerForm>
            <TituloForm>Seja Bem-Vindo(a) ao LabeFy</TituloForm>
            <LabelPlaylist for="playlist">Criar playlist</LabelPlaylist>
            <InputNomePlaylist onChange={this.props.onChangePlaylist} type="text" name="playlist" id="playlist" placeholder="Nome da sua playlist"  />
            <ButtonCreatePlaylist onClick={this.props.clickCreatePlaylist}>Criar</ButtonCreatePlaylist> 
        </ContainerForm>
    );

  }

}

export default CriarPlaylist;
