/**
 * Has Exited Viewport
 * Detects when cursor has exited viewport
 * @param  {document#event:mouseout} event
 */
 export default function hexToRGB(hex, alpha) {
  // const r = parseInt(hex.slice(1, 3), 16)
  // const g = parseInt(hex.slice(3, 5), 16)
  // const b = parseInt(hex.slice(5, 7), 16)
  hex = hex.replace('#', '')
  const r = parseInt(
    hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2),
    16
  )
  const g = parseInt(
    hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4),
    16
  )
  const b = parseInt(
    hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6),
    16
  )
  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  return `rgb(${r}, ${g}, ${b})`
}
