import React from "react";
import styled from "styled-components";
import Pergunta from "./Pergunta";
import PerguntaOption from "./PerguntaOption";

const Titulo = styled.h1 `
`;

class SegundaPagina extends React.Component {


    render() {
        return (
            <>
                <Titulo>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Titulo>
                <Pergunta pergunta={"5. Qual curso?"} tipo={"text"} />
                <Pergunta pergunta={"6. Qual a unidade de ensino?"} tipo={"text"} />
            </>
        );
    }

}

export default SegundaPagina;