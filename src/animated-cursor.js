import lerp from './utils/lerp'
import hasExitedViewport from './utils/has-exited-viewport'
import hexToRGB from './utils/hex-to-rgb'
import clickables from './utils/clickables'
// const lerp = (a, b, n) => (1 - n) * a + n * b

export default class AnimatedCursor {
  constructor(options) {
    
    const defaults = {
      cursorEl:'#cursor',
      cursorInnerSelector: '#cursor-inner',
      cursorOuterSelector: '#cursor-outer',
      cursorSize: { inner: 8, outer: 40 },
      trailingSpeed: 0.2,
      color: '#D3245C',
      clickables: clickables
    }
    //options = options || {}
    let self = this
    Object.assign(self, defaults, options)

    // config
    this.cursorEl = document.querySelector(self.cursorEl)
    this.cursorInner = document.querySelector(self.cursorInnerSelector)
    this.cursorOuter = document.querySelector(self.cursorOuterSelector)
    this.targetPos = { x: 0.5, y: 0.5 } // mouse position
    this.cursorPos = { x: 0.5, y: 0.5 } // cursor position
    this.endX = window.innerWidth / 2
    this.endY = window.innerHeight / 2
    this.trailingSpeed = self.trailingSpeed
    this.color = self.color
    this.cursorSize = self.cursorSize
    this.cursorVisible = true
    this.isScaled = false
    this.isClicking = false


    this.init()
  }

  init() {
    this.bindAll()
    this.bindEvents()
    this.startCursor()
    this.setCursorColor()
    this.setCursorSize()
  }

  bindAll() {
    // eslint-disable-line
    ;['onMouseMove', 'animateOuterCursor'].forEach(
      (fn) => (this[fn] = this[fn].bind(this))
    )
  }

  bindEvents() {
    window.addEventListener('mousemove', this.onMouseMove)
    this.raf = requestAnimationFrame(this.animateOuterCursor)

    document
      .querySelectorAll(clickables)
      .forEach((el) => this.onClickableHover(el))

    document.addEventListener('mousedown', () => {
      this.isClicking = true
      this.setScale()
      // this.cursorInner.style.transform = 'translate(-50%, -50%) scale(1.5)'
      // this.cursorOuter.style.transform = 'translate(-50%, -50%) scale(0.13)'
    })

    document.addEventListener('mouseup', () => {
      this.isScaled = false
      this.isClicking = false
      this.setScale()
    })

    document.addEventListener('mouseleave', (e) => {
      if (hasExitedViewport(e)) {
        this.isVisible = false
        this.toggleVisibility()
      }
    })
  }

  styleCursorVar(cursorInner, cursorOuter) {
    const color = hexToRGB(this.cursorColor)
    const colorWithOpacity = rgba(this.cursorColor, 0.4)
    cursorInner.style.setProperty('--cursor-color', color)
    cursorOuter.style.setProperty('--cursor-color', colorWithOpacity)
  }

  styleCursor() {
    const colorInner = hexToRGB(this.color)
    const colorOuter = hexToRGB(this.color, 0.4)
    this.cursorInner.style.backgroundColor = colorInner
    this.cursorOuter.style.backgroundColor = colorOuter
  }

  setCursorColor() {
    const colorInner = hexToRGB(this.color)
    const colorOuter = hexToRGB(this.color, 0.4)
    this.cursorInner.style.setProperty('background-color', colorInner)
    this.cursorOuter.style.setProperty('background-color', colorOuter)
  }

  setCursorSize() {
    this.cursorInner.style.setProperty('width', `${this.cursorSize.inner}px`)
    this.cursorInner.style.setProperty('height', `${this.cursorSize.inner}px`)
    this.cursorOuter.style.setProperty('width', `${this.cursorSize.outer}px`)
    this.cursorOuter.style.setProperty('height', `${this.cursorSize.outer}px`)
  }

  startCursor() {
    this.isVisible = false
    this.toggleVisibility()
  }

  onMouseMove(e) {
    this.isVisible = true
    this.toggleVisibility()
    //get normalized mouse coordinates [0, 1]
    this.targetPos.x = e.clientX
    this.targetPos.y = e.clientY

    this.animateInnerCursor(e.clientY, e.clientX)
    // trigger loop if no loop is active
    if (!this.raf) this.raf = requestAnimationFrame(this.animateOuterCursor)
  }

  animateInnerCursor(y, x) {
    this.cursorInner.style.top = `${y}px`
    this.cursorInner.style.left = `${x}px`
  }

  animateOuterCursor() {
    //calculate lerped values
    this.cursorPos.x = lerp(
      this.cursorPos.x,
      this.targetPos.x,
      this.trailingSpeed
    )
    this.cursorPos.y = lerp(
      this.cursorPos.y,
      this.targetPos.y,
      this.trailingSpeed
    )
    this.cursorOuter.style.top = `${this.cursorPos.y}px`
    this.cursorOuter.style.left = `${this.cursorPos.x}px`

    //cancel loop if mouse stops moving
    const delta = Math.sqrt(
      Math.pow(this.targetPos.x - this.cursorPos.x, 2) +
        Math.pow(this.targetPos.y - this.cursorPos.y, 2)
    )
    if (delta < 0.001) {
      window.cancelAnimationFrame(this.raf)
      this.raf = null
      return
    }
    //or continue looping if mouse is moving
    this.raf = requestAnimationFrame(this.animateOuterCursor)
  }

  onClickableHover(el) {
    el.style.cursor = 'none'

    el.addEventListener('mouseover', () => {
      this.isScaled = true
      this.setScale()
    })
    el.addEventListener('mouseout', () => {
      this.isScaled = false
      this.setScale()
    })
  }

  setScale() {
    if (this.isClicking) {
      this.cursorInner.style.transform = 'translate(-50%, -50%) scale(1.5)'
      this.cursorOuter.style.transform = 'translate(-50%, -50%) scale(0.13)'
    } else if (this.isScaled) {
      this.cursorInner.style.transform = 'translate(-50%, -50%) scale(0.75)'
      this.cursorOuter.style.transform = 'translate(-50%, -50%) scale(1.5)'
    } else {
      this.cursorInner.style.transform = 'translate(-50%, -50%) scale(1)'
      this.cursorOuter.style.transform = 'translate(-50%, -50%) scale(1)'
    }
  }

  toggleVisibility() {
    if (this.isVisible) {
      this.cursorInner.style.opacity = 1
      this.cursorOuter.style.opacity = 1
    } else {
      this.cursorInner.style.opacity = 0
      this.cursorOuter.style.opacity = 0
    }
  }
}
