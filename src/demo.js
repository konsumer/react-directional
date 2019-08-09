import React from 'react'
import { render } from 'react-dom'

import Directional from './index'

const DirectionalStars = ({ onDirection }) => (
  <Directional className='starsjs' onDirection={onDirection} buttonTag='path' classes={{ up: 'up', down: 'down', left: 'left', right: 'right' }}>
    <svg version='1.1' viewBox='0 0 26.458 26.458' xmlns='http://www.w3.org/2000/svg'>
      <g transform='translate(0 -270.54)' strokeWidth='5.2'>
        <path className='up' d='m15.725 277.71-2.3934-1.163-2.3149 1.3123 0.3665-2.6356-1.9634-1.7961 2.6199-0.46589 1.1015-2.4223 1.2527 2.3477 2.6441 0.29901-1.8457 1.9168z' />
        <path className='down' d='m25.145 287.28-2.3934-1.163-2.3149 1.3123 0.3665-2.6356-1.9634-1.7961 2.6199-0.46589 1.1015-2.4223 1.2527 2.3477 2.6441 0.29902-1.8457 1.9168z' />
        <path className='left' d='m15.725 296.85-2.3934-1.163-2.3149 1.3123 0.3665-2.6356-1.9634-1.7961 2.6199-0.46588 1.1015-2.4223 1.2527 2.3477 2.6441 0.29901-1.8457 1.9168z' />
        <path className='right' d='m6.3051 287.28-2.3934-1.163-2.3149 1.3123 0.3665-2.6356-1.9634-1.7961 2.6199-0.46589 1.1015-2.4223 1.2527 2.3477 2.6441 0.29902-1.8457 1.9168z' />
      </g>
    </svg>
  </Directional>
)

const Demo = () => {
  const onDirection = (direction, pressed) => {
    console.log(direction, pressed)
  }
  const onDirectionStar = (direction, pressed) => {
    console.log('star', direction, pressed)
  }
  return (
    <div>
      <h1>react-directional</h1>
      <p>View the console to see the button handlers.</p>
      <h2>default</h2>
      <div style={{ width: 200, height: 200 }}>
        <Directional onDirection={onDirection} />
      </div>
      <h2>custom</h2>
      <div style={{ width: 200, height: 200 }}>
        <DirectionalStars onDirection={onDirectionStar} />
      </div>
    </div>
  )
}

render(<Demo />, document.getElementById('root'))
