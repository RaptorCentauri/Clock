import * as React from 'react';
import './Hand.scss';

const Hand = (props) =>{

React.useEffect(()=>{console.log(`${props.handStyle} Effect`)});

return(
  <handRing>
    <hand id={props.handStyle}></hand>
  </handRing>
)
}

export default Hand
