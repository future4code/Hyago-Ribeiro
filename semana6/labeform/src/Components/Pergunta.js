import React from "react";
import styled from "styled-components";

const ContainerPergunta = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TextoPergunta = styled.label `
    margin-bottom: 10px;
    margin-top: 15px;
    font-size: 18px;
`;

const InputPergunta = styled.input `
    width: 200px;
    padding: 5px 8px;
    border-radius: 14px;
    border: none;
        &:focus {
            border: solid 2px #d65a31;
            outline: none;
        }
`;

class Pergunta extends React.Component {
    state ={
        valorInputPergunta: ""
    };

    onChangeInputPergunta = event => {
        this.setState({ valorInputPergunta: event.target.value});
    };

    render() {

        return (
    
            <ContainerPergunta>
                <TextoPergunta>{this.props.pergunta}</TextoPergunta>
                <InputPergunta 
                onChange={this.onChangeInputPergunta}
                type={this.props.tipo} 
                />
            </ContainerPergunta>
    
        );

    }
}

export default Pergunta;