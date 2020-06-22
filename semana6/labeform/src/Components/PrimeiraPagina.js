import React from "react";
import styled from "styled-components";
import Pergunta from "./Pergunta";
import PerguntaOption from "./PerguntaOption";

const ContainerForm = styled.div `
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Titulo = styled.h1 `
`;


class PrimeiraPagina extends React.Component {

    state = {

    }

    render() {

        return (

            <>
                <Titulo>ETAPA 1 - DADOS GERAIS</Titulo>
                <Pergunta pergunta={"1. Qual seu nome?"} tipo={"text"}/>
                <Pergunta pergunta={"2. Qual sua idade?"} tipo={"number"}/>
                <Pergunta pergunta={"3. Qual seu email?"} tipo={"text"}/>
                <PerguntaOption
                pergunta={"4. Qual sua escolaridade?"}
                item1={"Ensino médio incompleto"}
                item2={"Ensino médio completo"}
                item3={"Ensino superior incompleto"}
                item4={"Ensino superior completo"}
                />
            </>

        );

    }

}

export default PrimeiraPagina;