import React, {Component} from 'react'
import './SecaoCompartilhar.css'
import facebook from '../../img/facebook.svg'
import twitter from '../../img/twitter.svg'
import whatsapp from '../../img/whatsapp.svg'
import { Icone } from '../Icone/Icone'

export class SecaoCompartilhar extends Component {
	state = {
		valorMensagem: ''

	}

	onChangeMensagem = (event) => {
		this.setState({valorMensagem: event.target.value})
	}


	onClickFacebook = () => {

		console.log(`Foi compartilhado no Facebook com a mensagem: ${this.state.valorMensagem}`)
		
	}

	onClickTwitter = () => {

		console.log(`Foi compartilhado no Twitter com a mensagem: ${this.state.valorMensagem}`)
		
	}

	onClickWhatsapp = () => {

		console.log(`Foi compartilhado no Whatsapp com a mensagem: ${this.state.valorMensagem}`)
		
	}

	render() {
		return <div className={'share-container'}>
					<input
						className={'input-share'}
						placeholder={'Mensagem'}
						value={this.state.valorMensagem}
						onChange={this.onChangeMensagem}
					/>
					<div className={'social-share'}>
						<Icone
							icone={facebook}
							onClickIcone={this.onClickFacebook}
						/>

						<Icone
							icone={twitter}
							onClickIcone={this.onClickTwitter}
						/>

						<Icone
							icone={whatsapp}
							onClickIcone={this.onClickWhatsapp}
						/>
					</div>
		</div>
	}
}
