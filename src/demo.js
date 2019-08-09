import React from 'react'
import { render } from 'react-dom'

import Directional from './index'

const Demo = () => <Directional onDirection={console.log} />

render(<Demo />, document.getElementById('root'))
