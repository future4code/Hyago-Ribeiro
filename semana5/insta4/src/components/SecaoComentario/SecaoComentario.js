import React, {Component} from 'react'
import styled from 'styled-components'

const ContainerComentario = styled.div `
	display: flex;
	justify-content: center;
	padding: 5px;
`;

const InputCometario = styled.input `
	width: 100%;
	margin-right: 5px;
`;

export class SecaoComentario extends Component {
	state = {
		valorNome: ''

	}

	onChangeComentario = (event) => {
		this.setState({valorNome: event.target.value})
	}

	render() {
		return <ContainerComentario>
			<InputCometario
				placeholder={'Comentário'}
				value={this.state.valorNome}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</ContainerComentario>
	}
}
