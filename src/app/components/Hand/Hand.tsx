import * as React from 'react';
import './Hand.scss';

const Hand = (props) =>{

React.useEffect(()=>{console.log(`${props.handStyle} Effect`)});

const rotateStyle = {
  transform: `rotate(${props.rotate}deg)`
};

return(
  <handRing style={rotateStyle}>
    <hand id={props.handStyle}></hand>
  </handRing>
)
}

export default Hand
