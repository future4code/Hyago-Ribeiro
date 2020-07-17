import React, { useState} from 'react';
import Matchs from './components/Matchs/Matchs';
import InitialMatch from './components/InitialMatch/InitialMatch';
import logo from './images/astromatch.png';
import chatIcon from './images/chat-matches.svg';
import matchIcon from './images/matches-icon.svg';
import styled from 'styled-components';

const Body = styled.div `
  background-color: gray;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const ContainerMasterApp = styled.div `
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

const ContainerHeader = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  width: 398px;
  height: 60px;
`;

const Logo = styled.img `
  width: 160px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const DivButton = styled.div `
  margin: 15px;
`;

const ButtonChat = styled.img `
  width: 25px;
  cursor: pointer;
  transition: 100ms;
    :hover {
      transform: scale(0.95);
    }
`;

const ButtonMatch = styled.img `
  cursor: pointer;
  width: 25px;
  transition: 100ms;
    :hover {
      transform: scale(0.95);
    }
`;


function App() {
  const [startMatch, setInitialMatch] = useState(true);

  const onClickChange = () => {
    setInitialMatch(!startMatch)
  }

  return (
    <>
    <Body>
      <ContainerMasterApp>
        <ContainerHeader>
          <DivButton>
            {startMatch ? <></> : <ButtonMatch src={matchIcon} onClick={onClickChange} />}
          </DivButton>
          <Logo src={logo} />
          <DivButton>

          {startMatch ? <ButtonChat src={chatIcon} onClick={onClickChange} /> : <></>}
          </DivButton>
        </ContainerHeader>
          {startMatch ? <InitialMatch/> : <Matchs />}
      </ContainerMasterApp>
    </Body>
    </>
  );
}

export default App;
