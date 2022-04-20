'use strict'

import AnimatedCursor from '../../src'

// Default Cursor
if (document.querySelector('#cursor')) {
  const cursor = AnimatedCursor()

  cursor.init()
}


// Donut Cursor
if (document.querySelector('#donut-cursor')) {
  let donutOpts = {
    cursorInnerSelector: '#donut-cursor-inner',
    cursorOuterSelector: '#donut-cursor-outer',
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
  
  const donutCursor = AnimatedCursor(donutOpts)
  
  donutCursor.init()
}


if (document.querySelector('#blend-cursor ')) {
  let blendOpts = {
    cursorInnerSelector: '#blend-cursor-inner',
    cursorOuterSelector: '#blend-cursor-outer',
    hasOuterBlendMode: true,
    color: '#fff',
    outerAlpha: 1,
    size: { 
      inner: 8, 
      outer: 30 
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
  
  const blendCursor = AnimatedCursor(blendOpts)
  
  blendCursor.init()
}
