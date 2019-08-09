# react-directional

This is a simple directional controller, using an SVG, for react.

## usage

```sh
npm i react-directional
```

Now, you can use it in your code:

```js
import React from 'react'
import Directional from 'react-directional'

export default () => {
  const onDirection = (direction, pressed) => {
    console.log(direction, pressed)
  }
  return <Directional onDirection={onDirection} />
}

```

There are a few ways to customize the output.

If you make an SVG with the correct classes/tags on some buttons, it will work:

```js
import React from 'react'
import Directional from 'react-directional'

export default () => {
  const onDirection = (direction, pressed) => {
    console.log(direction, pressed)
  }
  return(
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
}
```

In this case, the buttons are `path` tags and I set the classes.

You can also use standard SVG css-styling, as I did in the [demo](./src/index.html)