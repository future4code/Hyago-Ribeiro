import styled from 'styled-components';

export const ContainerButtons = styled.div `
    width: 358px;
    display: flex;
    justify-content: space-evenly;
    padding: 15px 0;
`;

export const ButtonDislike = styled.button `
    background: #fff;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    font-size: 30px;
    transform: scale(0.8);
    border: 1px solid red;
    color: red;
    cursor: pointer;
    transition: 200ms;
        :hover {
            transform: scale(1);
            background: red;
            color: #fff;
        }
        :focus {
            outline:none;
        }
`;

export const ButtonLike = styled.button `
    background: #fff;
    font-size: 50px;
    width: 70px;
    height: 70px;
    transform: scale(0.8);
    border-radius: 50%;
    border: 1px solid green;
    color: green;
    cursor: pointer;
    transition: 200ms;
        :hover {
            transform: scale(1);
            background: green;
            color: #fff;
        }
        :focus {
            outline:none;
        }
`;