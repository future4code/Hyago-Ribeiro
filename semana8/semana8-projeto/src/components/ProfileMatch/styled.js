import styled from 'styled-components';

export const CardMatchSingle = styled.div `
    display: flex;
    align-items: center;
    padding: 5px 20px;
`;

export const ImgMatchSingle = styled.div `
    background-image: url(${props=>props.photo});
    background-size:cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const TextMatchSingle = styled.p `
    margin-left: 10px;
`;
