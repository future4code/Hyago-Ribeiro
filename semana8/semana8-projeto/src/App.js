import React, { useState} from 'react';

import Matchs from './components/Matchs/Matchs';
import InitialMatch from './components/InitialMatch/InitialMatch';

import logo from './images/astromatch.png';
import chatIcon from './images/chat-matches.svg';
import matchIcon from './images/matches-icon.svg';
import { Body, ContainerMasterApp, ContainerHeader, Logo, DivButton, ButtonChat, ButtonMatch } from './AppStyled';

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
