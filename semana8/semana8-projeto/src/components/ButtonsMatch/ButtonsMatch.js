import React, { useState, useEffect } from 'react';

import {ContainerButtons, ButtonDislike, ButtonLike} from "./styles";


function ButtonsMatch(props) {
    const [choiceSwipeGreen, setChoiceSwipeGreen] = useState(true)
    const [choiceSwipeRed, setChoiceSwipeRed] = useState(false)



  return (
    <ContainerButtons>
      {props.singleProfile ? <ButtonDislike onClick={() => props.buttonDislike(choiceSwipeRed, props.singleProfile.id)}>X</ButtonDislike> :
      <ButtonDislike>X</ButtonDislike>}
      {props.singleProfile ? <ButtonLike onClick={() => props.buttonLike(choiceSwipeGreen, props.singleProfile.id)}>♥️</ButtonLike> : 
      <ButtonLike>♥️</ButtonLike>}
    </ContainerButtons>
  );
}

export default ButtonsMatch;
