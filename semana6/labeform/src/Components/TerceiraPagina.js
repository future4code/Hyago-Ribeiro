import React from "react";
import styled from "styled-components";
import Pergunta from "./Pergunta";
import PerguntaOption from "./PerguntaOption";

const Titulo = styled.h1 `
`;

class TerceiraPagina extends React.Component {

    render() {
        return (
            <>
                <Titulo>ETAPA 3 -INFORMAÇÕES GERAIS DE ENSINO</Titulo>
                <Pergunta pergunta={"5. Por que você não terminou um curso de graduação?"} tipo={"text"} />
                <PerguntaOption pergunta={"6. Você fez algum curso complementar?"} item1={"Nenhum"} item2={"Curso técnico"} item3={"Curso de inglês"} item4={"Cursos digitais"} />
            </>
        );
    }
}

export default TerceiraPagina;