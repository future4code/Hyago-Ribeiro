import React from 'react';

import { CardMatchSingle, ImgMatchSingle, TextMatchSingle } from './styled';

function ProfileMatch(props) {
   
  
    return (
      <CardMatchSingle>
          <ImgMatchSingle photo={props.photo} />
          <TextMatchSingle>{props.name}</TextMatchSingle>
      </CardMatchSingle>
    );
  }
  
  export default ProfileMatch;
  