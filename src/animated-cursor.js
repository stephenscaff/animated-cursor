import lerp from './utils/lerp'
import hasExitedViewport from './utils/has-exited-viewport'
import hexToRGB from './utils/hex-to-rgb'
import setStyles from './utils/set-styles'
import isTouchDevice from './utils/is-touch-device'
;('use strict')

const defaultOptions = {
  cursorInnerSelector: '#cursor-inner',
  cursorOuterSelector: '#cursor-outer',
  cursorInnerStyles: null,
  cursorOuterStyles: null,
  hasRequiredStyles: true,
  hideNativeCursor: true,
  color: '#D3245C',
  outerAlpha: 0.3,
  outerBorderSize: 0,
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
 * Replaces the browser's native cursor with a custom animated cursor.
 * Options enable creation of different cursor experiences.
 *
 * @param {Object} options
 * @returns {Object} - api reveals init method
 */
function AnimatedCursor(options) {
  // merge defaults with user options
  let opts = Object.assign({}, defaultOptions, options)

  let settings = {
    cursorInner: document.querySelector(opts.cursorInnerSelector),
    cursorOuter: document.querySelector(opts.cursorOuterSelector),
    cursorInnerStyles: opts.cursorInnerStyles,
    cursorOuterStyles: opts.cursorOuterStyles,
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
    // bail if Touch device
    if (isTouchDevice()) return
    bindEvents()
    startCursor()
    setCursorColor()
    setCursorSize()
    if (opts.hideNativeCursor) hideNativeCursor()
    if (opts.hasRequiredStyles) setCursorStyles()
    if (opts.outerBorderSize > 0) setOuterBorder()
  }

  /**
   * Binds main mouse and click events
   */
  function bindEvents() {
    document
      .querySelectorAll(opts.clickables.join(','))
      .forEach((el) => onClickableHover(el))

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseleave', (e) => onMouseLeave(e))
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
   * Handles mousedown event,
   * updating cursor scale
   */
  function onMouseDown() {
    settings.isClicking = true
    setScale()
  }

  /**
   * Handles mouseup event,
   * updating cursor scale
   */
  function onMouseUp() {
    settings.isScaled = false
    settings.isClicking = false
    setScale()
  }

  /**
   * Handles mouseleave event,
   * updating cursor visibility
   * @param {Event} e - mouseleave event
   */
  function onMouseLeave(e) {
    if (hasExitedViewport(e)) {
      settings.isVisible = false
      toggleVisibility()
    }
  }

  /**
   * Animates inner cursor by setting x, y coords on mousemove
   * @param {Number} y - y coords
   * @param {Number} x - x coords
   */
  function animateInnerCursor(y, x) {
    settings.cursorInner.style.setProperty('top', `${y}px`)
    settings.cursorInner.style.setProperty('left', `${x}px`)
  }

  /**
   * Animate Outer Cursor with a lerp-eased trailing animation.
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
    settings.cursorOuter.style.setProperty('top', `${settings.cursorPos.y}px`)
    settings.cursorOuter.style.setProperty('left', `${settings.cursorPos.x}px`)

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

  /**
   * When hovering over a clickable, handle scale animation
   * @param {HTMLelement} el
   */
  function onClickableHover(el) {
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
   * Toggle Cursor visibility
   */
  function toggleVisibility() {
    if (settings.isVisible) {
      settings.cursorInner.style.setProperty('opacity', 1)
      settings.cursorOuter.style.setProperty('opacity', 1)
    } else {
      settings.cursorInner.style.setProperty('opacity', 0)
      settings.cursorOuter.style.setProperty('opacity', 0)
    }
  }

  /**
   * Hide Browser's native cursor
   */
  function hideNativeCursor() {
    document.querySelector('body').style.setProperty('cursor', 'none')
    document.querySelector('html').style.setProperty('cursor', 'none')
  }

  /**
   * Set required Cursor styles
   */
  function setCursorStyles() {
    const styles = {
      'pointer-events': 'none',
      position: 'fixed',
      'border-radius': '50%',
      opacity: 0,
      transform: 'translate(-50%, -50%)',
      transition: 'opacity 0.25s ease-in-out, transform 0.25s ease-in-out'
    }
    setStyles(opts.cursorInnerSelector, styles)
    setStyles(opts.cursorOuterSelector, styles)
    setStyles(opts.cursorInnerSelector, opts.cursorInnerStyles)
    setStyles(opts.cursorOuterSelector, opts.cursorOuterStyles)
  }

  /**
   * Set Cursor's resting sizes
   */
  function setCursorSize() {
    settings.cursorInner.style.setProperty('width', `${opts.size.inner}px`)
    settings.cursorInner.style.setProperty('height', `${opts.size.inner}px`)
    settings.cursorOuter.style.setProperty('width', `${opts.size.outer}px`)
    settings.cursorOuter.style.setProperty('height', `${opts.size.outer}px`)
  }

  /**
   * Set Scale Effect
   */
  function setScale() {
    if (settings.isClicking) {
      settings.cursorInner.style.setProperty(
        'transform',
        `translate(-50%, -50%) scale(${opts.clickScale.inner})`
      )
      settings.cursorOuter.style.setProperty(
        'transform',
        `translate(-50%, -50%) scale(${opts.clickScale.outer})`
      )
    } else if (settings.isScaled) {
      settings.cursorInner.style.setProperty(
        'transform',
        `translate(-50%, -50%) scale(${opts.hoverScale.inner})`
      )
      settings.cursorOuter.style.setProperty(
        'transform',
        `translate(-50%, -50%) scale(${opts.hoverScale.outer})`
      )
    } else {
      settings.cursorInner.style.setProperty(
        'transform',
        `translate(-50%, -50%) scale(1)`
      )
      settings.cursorOuter.style.setProperty(
        'transform',
        `translate(-50%, -50%) scale(1)`
      )
    }
  }

  /**
   * Sets the Cursor                               x
   */
  function setCursorColor() {
    const colorInner = hexToRGB(opts.color)
    const colorOuter = hexToRGB(opts.color, opts.outerAlpha)
    settings.cursorInner.style.setProperty('background-color', colorInner)
    settings.cursorOuter.style.setProperty('background-color', colorOuter)
  }

  /**
   * Sets a border for Outer Cursor
   * to create a donut-style cursor
   * (if outerAlpha is or is close to 0)
   */
  function setOuterBorder() {
    settings.cursorOuter.style.setProperty(
      'border',
      `${opts.outerBorderSize}px solid ${opts.color}`
    )
  }

  /**
   * Set Outer Blend Mode
   * Adds blend mode exclusion effect to outer cursor
   */
  // function setOuterBlendMode() {
  //   const cursorEl = settings.cursorOuter.parentElement

  //   if (cursorEl) cursorEl.style.setProperty('mix-blend-mode', 'exclusion')
  // }

  // API
  return {
    init: init
  }
}

AnimatedCursor.options = defaultOptions

export default AnimatedCursor
