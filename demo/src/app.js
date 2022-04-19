'use strict'

// import AnimatedCursor from '../../src'
//const AnimatedCursor = require('../../dist')

// Default Cursor
if (document.querySelector('#cursor')) {
  const cursor = AnimatedCursor()

  cursor.init()
}


// Donut Cursor
if (document.querySelector('#cursor-donut')) {
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

