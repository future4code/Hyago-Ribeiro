import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div `
	display: flex;
`;

const IconImg = styled.img `
	margin-right: 5px;
`;

export function IconeComContador(props) {
	return <IconContainer>
		<IconImg alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</IconContainer>
}
