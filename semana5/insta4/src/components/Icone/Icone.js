import React from 'react'
import './Icone.css'

export function Icone(props) {
	return <div className={'icon-container'}>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
	</div>
}
