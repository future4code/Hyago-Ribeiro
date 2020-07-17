import styled from 'styled-components';

export const ContainerMatches = styled.div `
  width: 398px;
  height: 589px;
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  overflow:auto;
  
`;

export const ClearButton = styled.button `
  width: 150px;
  bottom: 0;
  align-self: center;
  margin-bottom: 10px;
  padding: 5px 0;
  border: 1px solid #51A89D;
  color: #762D93;
  font-weight: bold;
  background-color: #fff;
  transition: 200ms;
  cursor:pointer;
    :hover {
      background-color: #51A89D;
      color: #fff;
      transform: scale(1.03)
    }
    :focus {
      outline: none;
    }
`;

export const TitleMatch = styled.h2 `
  color: #762D93;
  text-align: center;
`;