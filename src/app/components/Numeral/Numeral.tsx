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
    <clocknumber style={numeralAngleStyle} className='numeral'>
      <subnum style={innerNumeralAngleStyle}>{number}</subnum>
    </clocknumber>
  )
}




export default Numeral;
