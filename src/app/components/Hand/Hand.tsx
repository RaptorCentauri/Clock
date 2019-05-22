import * as React from 'react';
import './Hand.scss';

const Hand = (props) =>{

React.useEffect(()=>{console.log(`${props.handStyle} Effect`)});

return(
  <hand id={props.handStyle}></hand>
)
}

export default Hand
