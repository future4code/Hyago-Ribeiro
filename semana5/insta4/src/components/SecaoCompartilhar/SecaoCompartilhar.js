import React, {Component} from 'react'
import facebook from '../../img/facebook.svg'
import twitter from '../../img/twitter.svg'
import whatsapp from '../../img/whatsapp.svg'
import { Icone } from '../Icone/Icone'
import styled from 'styled-components'

const ContainerShare = styled.div `
	display: flex;
	flex-direction: column;
	padding: 5px;

`;

const SocialShare = styled.div `
	display:flex;
	justify-content: space-around;
	margin-top: 7px;
`;

const InputShare = styled.input `
	width: 97%;
	height: 30px;
	margin-right: 5px;
`;

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
		return <ContainerShare>
					<InputShare
						className={'input-share'}
						placeholder={'Mensagem'}
						value={this.state.valorMensagem}
						onChange={this.onChangeMensagem}
					/>
					<SocialShare>
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
					</SocialShare>
		</ContainerShare>
	}
}
