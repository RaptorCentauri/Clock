import './Clock.scss'

import * as React from 'react';

import {Hand, Numeral} from '../../components'

const Clock = () =>{
const [numerals, setNumerals] = React.useState([1,2,3,4,5,6,7,8,9,10,11,12])

const [handTypes, setHandTypes] = React.useState([`Second`, `Minute`, `Hour`])

  return(
    <clock-face>
      {numerals.map((num) => <Numeral key={num} number={num}/>)}
      {handTypes.map((hand) => <Hand handType={hand} />)}
    </clock-face>
  )
}

export default Clock;
