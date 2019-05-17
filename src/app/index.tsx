import * as React from 'react';
import {render} from 'react-dom';
import './index.scss'

import {SecondHand, MinuteHand, HourHand} from './components'

const App = () => {
  return(
    <div id="face">
      <SecondHand />
      <MinuteHand />
      <HourHand />
    </div>

  )
}


render(<App/>,window.document.getElementById('root'));
