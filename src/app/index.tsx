import * as React from 'react';
import {render} from 'react-dom';
import './index.scss'

import {Clock} from './components'

const App = () => <Clock />


render(<App/>,window.document.getElementById('root'));
