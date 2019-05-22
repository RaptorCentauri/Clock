import * as React from 'react';
import {render} from 'react-dom';
import './index.scss'

import {Hand} from './components'

const App = () => {
  return(
    <clockFace>
      <Hand handStyle="second-hand"/>
      <Hand handStyle="minute-hand"/>
      <Hand handStyle="hour-hand"/>
    </clockFace>
  )
}


render(<App/>,window.document.getElementById('root'));
