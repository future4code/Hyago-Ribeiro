import styled from 'styled-components';

export const Body = styled.div `
  background-color: gray;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const ContainerMasterApp = styled.div `
  display:flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  width: 398px;
  height: 589px;
  border-radius: 10px;
`;

export const ContainerHeader = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  width: 398px;
  height: 60px;
`;

export const Logo = styled.img `
  width: 160px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const DivButton = styled.div `
  margin: 15px;
`;

export const ButtonChat = styled.img `
  width: 25px;
  cursor: pointer;
  transition: 100ms;
    :hover {
      transform: scale(0.95);
    }
`;

export const ButtonMatch = styled.img `
  cursor: pointer;
  width: 25px;
  transition: 100ms;
    :hover {
      transform: scale(0.95);
    }
`;