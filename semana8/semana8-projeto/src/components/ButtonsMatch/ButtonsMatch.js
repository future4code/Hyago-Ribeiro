import React, { useState, useEffect } from 'react';
import {ContainerButtons, ButtonDislike, ButtonLike} from "./styles";


function ButtonsMatch(props) {
    const [choiceSwipeGreen, setChoiceSwipeGreen] = useState(true)
    const [choiceSwipeRed, setChoiceSwipeRed] = useState(false)



  return (
    <ContainerButtons>
      <ButtonDislike onClick={() => props.buttonDislike(choiceSwipeRed, props.singleProfile.id)}>X</ButtonDislike>
      <ButtonLike onClick={() => props.buttonLike(choiceSwipeGreen, props.singleProfile.id)}>♥️</ButtonLike>
    </ContainerButtons>
  );
}

export default ButtonsMatch;
