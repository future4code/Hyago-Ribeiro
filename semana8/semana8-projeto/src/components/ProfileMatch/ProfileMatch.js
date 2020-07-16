import React from 'react';
import styled from 'styled-components';

const CardMatchSingle = styled.div `
    display: flex;
    align-items: center;
    padding: 5px 20px;
`;

const ImgMatchSingle = styled.img `
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const TextMatchSingle = styled.p `
    margin-left: 10px;
`;


function ProfileMatch(props) {
   
  
    return (
      <CardMatchSingle>
          <ImgMatchSingle src={props.photo} />
          <TextMatchSingle>{props.name}</TextMatchSingle>
      </CardMatchSingle>
    );
  }
  
  export default ProfileMatch;
  