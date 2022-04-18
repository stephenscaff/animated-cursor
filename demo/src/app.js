'use strict'

import AnimatedCursor from '../../src'

// let options = {
//   color: "220, 90, 90",
//   outerAlpha: 0.3,
//   innerSize: 8,
//   innerScale: 0.7,
//   outerSize: 18,
//   outerScale: 5,
//   trailingSpeed: 8,
// };
//
// const cc = new CustomCursor("js-cursor", options).init();

const options = {
  trailingSpeed: 0.2,
  cursorSize: { inner: 8, outer: 40 },
  hasRequiredStyles: true
}

const ac = AnimatedCursor(options)

ac.init()
