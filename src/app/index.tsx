import * as React from 'react';
import {render} from 'react-dom';
import './index.scss'

import {Hand} from './components'

const App = () => {
  return(
    <clockFace>
      <Hand handStyle="second-hand" rotate="90"/>
      <Hand handStyle="minute-hand"/>
      <Hand handStyle="hour-hand" rotate="170"/>
    </clockFace>
  )
}


render(<App/>,window.document.getElementById('root'));
