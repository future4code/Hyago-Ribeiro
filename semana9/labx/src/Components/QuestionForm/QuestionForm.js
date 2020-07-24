import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    display: flex;
    flex-direction: column;
`;

const TitleQuestion = styled.label `
    margin-bottom: 5px;
`;

const InputQuestion = styled.input `
    height: 30px;
`;

function QuestionForm(props) {
    return (
        <Container>
            <TitleQuestion>{props.pergunta}</TitleQuestion>
            <InputQuestion required name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} id={props.id} type={props.type} />
        </Container>
    );
}

export default QuestionForm;