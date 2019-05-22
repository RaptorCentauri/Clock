import * as React from 'react';
import './Clock.scss'

import Hand from '../Hand/Hand';


const Clock = () =>
  <clockface>
    <Hand handType="Second" />
    <Hand handType="Minute" />
    <Hand handType="Hour" />
  </clockface>



export default Clock;
