import React from 'react'

import Look from './look.svg'

export default ({ className = 'joystick', onDirection, children, buttonTag = 'rect', classes = { up: 'look_svg__up', down: 'look_svg__down', left: 'look_svg__left', right: 'look_svg__right' } }) => {
  const onMouseUp = e => {
    if (e.target.tagName === buttonTag) {
      const cl = [...e.target.classList]
      Object.keys(classes).forEach(c => {
        if (cl.indexOf(classes[c]) !== -1) {
          onDirection(c, false)
        }
      })
    }
  }
  const onMouseDown = e => {
    if (e.target.tagName === buttonTag) {
      const cl = [...e.target.classList]
      Object.keys(classes).forEach(c => {
        if (cl.indexOf(classes[c]) !== -1) {
          onDirection(c, true)
        }
      })
    }
  }
  return <div className={className} onMouseUp={onMouseUp} onMouseDown={onMouseDown}>{children || <Look />}</div>
}
