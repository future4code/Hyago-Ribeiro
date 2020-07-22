import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    display: flex;
    flex-direction: column;
`;

function QuestionForm(props) {
    return (
        <Container>
            <label>{props.pergunta}</label>
            <input placeholder={props.placeholder} id={props.id} type={props.type} />
        </Container>
    );
}

export default QuestionForm;