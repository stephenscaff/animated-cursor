'use strict'

import AnimatedCursor from '../../src'

let acOptions = {
  color: '#0ff',
  outerAlpha: 0.1,
  outerBorderSize: 3,
  size: { 
    inner: 8, 
    outer: 38 
  },
  hoverScale: {
    inner: 0.5,
    outer: 1.4
  },
  clickScale: {
    inner: 1.4,
    outer: 0.1
  }
}

const cursor = AnimatedCursor(acOptions)

cursor.init()

