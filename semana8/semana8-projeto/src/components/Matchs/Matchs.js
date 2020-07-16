import React, { useState, useEffect } from 'react';
import './Initial.css';
import axios from 'axios';
import ProfileMatch from '../ProfileMatch/ProfileMatch';
import styled from 'styled-components';

const ContainerMatches = styled.div `
  width: 398px;
  height: 589px;
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  overflow:auto;
  
`;

const ClearButton = styled.button `
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

const TitleMatch = styled.h2 `
  color: #762D93;
  text-align: center;
`;

function Matchs() {
  const [matchs, setMatchs] = useState([]);

  const getMatchs = async () => {
    try {
      const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hyago/matches")
        setMatchs(response.data.matches)
    } catch (error) {
      console.log(error.response)
    }
  }

  const clearMatchs = async () => {
    try {
      const response = await axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hyago/clear")
    } catch (error) {
      console.log(error.response)
    }
  }

  const onClickClearMatches = () => {
    clearMatchs();
  }



  useEffect(() => {
    getMatchs();
  },[onClickClearMatches])

  return (
    <ContainerMatches className="scrollbar-primary">
        <div>
          <TitleMatch>Seus Matchs</TitleMatch>
          {matchs.map((person) => {
            return <ProfileMatch photo={person.photo} name={person.name} />
          })}
        </div>
        <ClearButton onClick={onClickClearMatches}>Limpar Matches</ClearButton>
    </ContainerMatches>

  );
}

export default Matchs;
