import React from 'react'

import Look from './look.svg'

export default ({ onDirection }) => {
  const onMouseUp = e => {
    if (e.target.tagName === 'rect') {
      const c = [...e.target.classList]
      if (c.indexOf('look_svg__up') !== -1) {
        onDirection('up', false)
      }
      if (c.indexOf('look_svg__down') !== -1) {
        onDirection('down', false)
      }
      if (c.indexOf('look_svg__left') !== -1) {
        onDirection('left', false)
      }
      if (c.indexOf('look_svg__right') !== -1) {
        onDirection('right', false)
      }
    }
  }
  const onMouseDown = e => {
    if (e.target.tagName === 'rect') {
      const c = [...e.target.classList]
      if (c.indexOf('look_svg__up') !== -1) {
        onDirection('up', true)
      }
      if (c.indexOf('look_svg__down') !== -1) {
        onDirection('down', true)
      }
      if (c.indexOf('look_svg__left') !== -1) {
        onDirection('left', true)
      }
      if (c.indexOf('look_svg__right') !== -1) {
        onDirection('right', true)
      }
    }
  }
  return <div className='joystick'><Look onMouseUp={onMouseUp} onMouseDown={onMouseDown} /></div>
}
