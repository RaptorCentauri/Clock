import './Clock.scss'

import * as React from 'react';

import {Hand, Numeral} from '../../components'


const Clock = () =>{
const [numerals, setNumerals] = React.useState([1,2,3,4,5,6,7,8,9,10,11,12])

  return(
    <clockface>
      {numerals.map((num) => <Numeral number={num}/>)}
      <Hand handType="Second" />
      <Hand handType="Minute" />
      <Hand handType="Hour" />
    </clockface>
  )
}

export default Clock;
