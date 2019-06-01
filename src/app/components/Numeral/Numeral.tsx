import * as React from 'react';
import './Numeral.scss'

const Numeral = ({number}) => {

  const numeralAngleStyle = {
    transform: `rotate(${number*30}deg)`
  };

  const innerNumeralAngleStyle = {
    transform: `rotate(-${number*30}deg)`
  };

  return(
//@ts-ignore
    <clock-number style={numeralAngleStyle} class='numeral'>
      <sub-num style={innerNumeralAngleStyle}>{number}</sub-num>
    </clock-number>
  )
}




export default Numeral;
