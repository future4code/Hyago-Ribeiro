import React, { useState, useEffect } from 'react';

import axios from 'axios';

import ButtonsMatch from './../ButtonsMatch/ButtonsMatch';

import Loader from './../Loader/Loader';
import {ContainerProfileSingle, ImagemProfileSingle, TextProfileSingle, NameAndAge, Name, Age, BioText, ContainerImg} from "./styles";


function InitialMatch(props) {
  const [profileSingle, setProfileSingle] = useState({})

  const getProfile = async () => {
    try {
    const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hyago/person`)
      setProfileSingle(response.data.profile)
      console.log(profileSingle)

    } catch(error) {
      console.log(error.response)
    }
  }

  const choosePerson = async (idPerson, like) => {
    const body = {
      "id": `${idPerson}`,
      "choice": like
    }
    try {
      const response = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hyago/choose-person`, body)
        console.log(like)
        console.log(idPerson)
        getProfile()
    } catch(error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    getProfile();
  },[])

  const onClickLike = (like, profileId) => {
      choosePerson(profileId, like);
    
  }

  const onClickDislike = (like, profileId) => {
    if(profileId){
      choosePerson(profileId, like);
    }
  }

  return (
    <>
      {profileSingle ? <ContainerProfileSingle>
        <ContainerImg photo={profileSingle.photo} />
          <ImagemProfileSingle src={profileSingle.photo} alt={profileSingle.name} />
          <TextProfileSingle>
            <NameAndAge>
            {profileSingle.name && <Name>{profileSingle.name},</Name>}
            <Age>{profileSingle.age}</Age>
            </NameAndAge>
            <BioText>{profileSingle.bio}</BioText>
          </TextProfileSingle>
      </ContainerProfileSingle> : <Loader />}
      <ButtonsMatch singleProfile={profileSingle} buttonDislike={onClickDislike} buttonLike={onClickLike} />
    </>
  );
}

export default InitialMatch;
