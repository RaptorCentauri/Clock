import * as React from 'react';
import './Hand.scss';

const Hand = ({handType}) =>{

  //Set up a state for the angle of the hand.
  const [angle, setAngle] = React.useState(0);

  React.useEffect(()=>{
    //Get the current time of the handType passed to the component
    let date = new Date();
    let currentTime = date[`get${handType}s`]();

    //The calculation of the hand angle is dependent on the hand type. Second and Minute hands move 6 degrees per minute. The hour hand moves 0.5 degrees per minute;
    switch(handType){
      case 'Second':
      case 'Minute':
          setAngle(6*currentTime);
      break;

      case 'Hour':
          setAngle(0.5*(60*currentTime+date.getMinutes()));
      break;
    }

});

  //Set the starting angle of the hand.
  const initialAngle = {
    transform: `rotate(${angle}deg)`
  };

  //The handring element is used to setup the startring rotation of the hand. When its not used, the rotation animation will default to 0 degrees for the start position after one complete cycle.
  return(
    <hand-ring style={initialAngle}>
      <clock-hand id={`${handType.toLowerCase()}-hand`}></clock-hand>
    </hand-ring>
  )
}

export default Hand
