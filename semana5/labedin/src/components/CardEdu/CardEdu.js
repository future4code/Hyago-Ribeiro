import React from 'react';
import './CardEdu.css'

function CardEdu(props) {
    return (
        <div className="educard-container">
            <img src={ props.imagem } alt=""/>
            <div>
                <h4>{ props.nomeCurso }</h4>
                <h5>{ props.nomeInst }</h5>
                <p>{ props.descricao }</p>
                <p>Duração: {props.duracao}</p>
            </div>
        </div>
    )
}

export default CardEdu;