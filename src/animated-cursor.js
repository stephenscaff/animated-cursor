import lerp from './utils/lerp'
import hasExitedViewport from './utils/has-exited-viewport'
import hexToRGB from './utils/hex-to-rgb'
import setStyles from './utils/set-styles'

'use strict'

const defaultOptions = {
  cursorInnerSelector: '#cursor-inner',
  cursorOuterSelector: '#cursor-outer',
  hasRequiredStyles: true,
  color: '#D3245C',
  outerAlpha: 0.3,
  size: { 
    inner: 8, 
    outer: 40 
  },
  hoverScale: {
    inner: 0.75,
    outer: 1.5
  },
  clickScale: {
    inner: 1.5,
    outer: 0.13
  },
  trailingSpeed: 0.2,
  clickables: [
    'a',
    'input[type="text"]',
    'input[type="email"]',
    'input[type="number"]',
    'input[type="submit"]',
    'input[type="image"]',
    'label[for]',
    'select',
    'textarea',
    'button',
    '.link'
  ]
}

/**
 * Animated Cursor
 * Creates a custom animated cursor consisting of an outer and inner circles/dots.
 * Outer dot has trailing animation effect.
 * Dots scale when hovering on clickables, or clicking.
 *
 * @param {Object} options 
 * @returns 
 */
function AnimatedCursor(options) {
  // merge defaults with user options
  let opts = Object.assign({}, defaultOptions, options);

  let settings = {
    cursorInner: document.querySelector(opts.cursorInnerSelector),
    cursorOuter: document.querySelector(opts.cursorOuterSelector),
    hasRequiredStyles: opts.hasRequiredStyles,
    targetPos: { x: 0.5, y: 0.5 }, // mouse position
    cursorPos: { x: 0.5, y: 0.5 }, // cursor position
    endX: window.innerWidth / 2,
    endY: window.innerHeight / 2,
    raf: requestAnimationFrame(animateOuterCursor),
    cursorVisible: true,
    isScaled: false,
    isClicking: false
  }
  
  /**
   * Init 
   * Kicks off all the things
   * @public
   */
  function init() {
    bindEvents()
    startCursor()
    if (settings.hasRequiredStyles) setCursorStyles()
    setCursorColor()
    setCursorSize()
  }

  /**
   * Bind Main Events
   * Handles primary mouse and click events
   */
  function bindEvents() {

    window.addEventListener('mousemove', onMouseMove)
    
    document
      .querySelectorAll(opts.clickables.join(','))
      .forEach((el) => onClickableHover(el))

    document.addEventListener('mousedown', () => {
      settings.isClicking = true
      setScale()
    })

    document.addEventListener('mouseup', () => {
      settings.isScaled = false
      settings.isClicking = false
      setScale()
    })

    document.addEventListener('mouseleave', (e) => {
      if (hasExitedViewport(e)) {
        settings.isVisible = false
        toggleVisibility()
      }
    })
  }

  /**
   * Start Cursor
   * Begins cursor visibility state
   */
  function startCursor() {
    settings.isVisible = false
    toggleVisibility()
  }

  /**
   * on Mouse Move 
   * Handles the cursor mouse event, sending x,y coords to animation events.
   * Uses RAF loop for outer/trailing cursor animation.
   * @param {Event} e - mousemove event 
   */
  function onMouseMove(e) {
    settings.isVisible = true
    toggleVisibility()
    //get normalized mouse coordinates [0, 1]
    settings.targetPos.x = e.clientX
    settings.targetPos.y = e.clientY
    animateInnerCursor(e.clientY, e.clientX)
    // trigger loop if no loop is active
    if (!settings.raf) settings.raf = requestAnimationFrame(animateOuterCursor)
  }

  /**
   * Animate Inner Cursor 
   * @param {Number} y - y coords
   * @param {Number} x - x coords
   */
  function animateInnerCursor(y, x) {
    settings.cursorInner.style.top = `${y}px`
    settings.cursorInner.style.left = `${x}px`
  }

  /**
   * Animate Outer Cursor 
   * Outer cursor trailing animation. Uses lerp
   * @returns 
   */
  function animateOuterCursor() {
    //calculate lerped values
    settings.cursorPos.x = lerp(
      settings.cursorPos.x,
      settings.targetPos.x,
      opts.trailingSpeed
    )
    settings.cursorPos.y = lerp(
      settings.cursorPos.y,
      settings.targetPos.y,
      opts.trailingSpeed
    )
    settings.cursorOuter.style.top = `${settings.cursorPos.y}px`
    settings.cursorOuter.style.left = `${settings.cursorPos.x}px`

    //cancel loop if mouse stops moving
    const delta = Math.sqrt(
      Math.pow(settings.targetPos.x - settings.cursorPos.x, 2) +
        Math.pow(settings.targetPos.y - settings.cursorPos.y, 2)
    )
    if (delta < 0.001) {
      window.cancelAnimationFrame(settings.raf)
      settings.raf = null
      return
    }
    //or continue looping if mouse is moving
    settings.raf = requestAnimationFrame(animateOuterCursor)
  }

  function onClickableHover(el) {33
    el.style.cursor = 'none'

    el.addEventListener('mouseover', () => {
      settings.isScaled = true
      setScale()
    })

    el.addEventListener('mouseout', () => {
      settings.isScaled = false
      setScale()
    })
  }

  /**
   * Toggle Visibility 
   * 
   */
  function toggleVisibility() {
    if (settings.isVisible) {
      settings.cursorInner.style.opacity = 1
      settings.cursorOuter.style.opacity = 1
    } else {
      settings.cursorInner.style.opacity = 0
      settings.cursorOuter.style.opacity = 0
    }
  }

  /**
   * Set Required Cursor Styles
   */
  function setCursorStyles() {
    const styles = {
      'pointer-events': 'none',
      'position': 'fixed',
      'border-radius': '50%',
      'opacity': 0,
      'transform': 'translate(-50%, -50%)',
      'transition': 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
    }
    setStyles('#cursor-inner', styles);
    setStyles('#cursor-outer', styles);
  }

  /**
   * Set Scale Effect
   */
  function setScale() {
    if (settings.isClicking) {
      settings.cursorInner.style.transform = `translate(-50%, -50%) scale(${opts.clickScale.inner})`
      settings.cursorOuter.style.transform = `translate(-50%, -50%) scale(${opts.clickScale.outer})`
    } else if (settings.isScaled) {
      settings.cursorInner.style.transform = `translate(-50%, -50%) scale(${opts.hoverScale.inner})`
      settings.cursorOuter.style.transform = `translate(-50%, -50%) scale(${opts.hoverScale.outer})`
    } else {
      settings.cursorInner.style.transform = 'translate(-50%, -50%) scale(1)'
      settings.cursorOuter.style.transform = 'translate(-50%, -50%) scale(1)'
    }
  }

  /**
   * Set Cursor Color
   */
  function setCursorColor() {
    const colorInner = hexToRGB(opts.color)
    const colorOuter = hexToRGB(opts.color, opts.outerAlpha)
    settings.cursorInner.style.setProperty('background-color', colorInner)
    settings.cursorOuter.style.setProperty('background-color', colorOuter)
  }

  /**
   * Set Cursor Sizes
   */
  function setCursorSize() {
    settings.cursorInner.style.setProperty('width', `${opts.size.inner}px`)
    settings.cursorInner.style.setProperty('height', `${opts.size.inner}px`)
    settings.cursorOuter.style.setProperty('width', `${opts.size.outer}px`)
    settings.cursorOuter.style.setProperty('height', `${opts.size.outer}px`)
  }

  return {
    init: init
  }
}

AnimatedCursor.options = defaultOptions;

export default AnimatedCursor;
