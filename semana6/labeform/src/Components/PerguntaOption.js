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

const Select = styled.select `

`;

const InputPergunta = styled.input `
    width: 300px;
`;

class PerguntaOption extends React.Component {
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
                <Select>
                    <option>{this.props.item1}</option>
                    <option>{this.props.item2}</option>
                    <option>{this.props.item3}</option>
                    <option>{this.props.item4}</option>
                </Select>
            </ContainerPergunta>
    
        );

    }
}

export default PerguntaOption;