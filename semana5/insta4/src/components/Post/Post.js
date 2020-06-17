import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import saveWhite from '../../img/save-white.svg'
import saveBlack from '../../img/save-black.svg'
import share from '../../img/share.svg'
import { Icone } from '../Icone/Icone'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvar: false,
    compartilhar: false
  }

  onClickSalvar = () =>{
    this.setState({
      salvar: !this.state.salvar
    })
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido

    })

    if(this.state.numeroCurtidas === 0){
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  
  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }
  
  onClickShare = () => {
    this.setState({
      compartilhar: !this.state.compartilhar
    })
  }



  render() {

    let iconeSave

    if(this.state.salvar) {
      iconeSave = saveBlack
    } else {
      iconeSave = saveWhite
    }

    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar

    if(this.state.compartilhar) {
      componenteCompartilhar = <SecaoCompartilhar />
    }

    return (
    <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <Icone
          icone={share}
          onClickIcone={this.onClickShare}
        />

        <Icone
          icone={iconeSave}
          onClickIcone={this.onClickSalvar}
        />

      </div>
      {componenteComentario}
      {componenteCompartilhar}
    </div>
  

    )

    
    
  }
}

export default Post