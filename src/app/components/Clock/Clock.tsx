import * as React from 'react';
import './Clock.scss'

import Hand from '../Hand/Hand';



const Numeral = ({number}) => {
  const numeralAngleStyle = {
    transform: `rotate(${number*30}deg)`
  };

  const innerNumeralAngleStyle = {
    transform: `rotate(-${number*30}deg)`
  };


  return(
    <clocknumber style={numeralAngleStyle} class='numeral'>
      <subnum style={innerNumeralAngleStyle}>{number}</subnum>
    </clocknumber>
  )
}



const Clock = () =>{
  const [numerals, setNumerals] = React.useState([1,2,3,4,5,6,7,8,9,10,11,12])



return(
  <clockface>
    {numerals.map((num) => <Numeral number={num}/>)}
    <Hand handType="Second" />
    <Hand handType="Minute" />
    <Hand handType="Hour" />
  </clockface>
)}

export default Clock;
