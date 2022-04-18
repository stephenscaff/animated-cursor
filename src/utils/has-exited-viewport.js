/**
 * Has Exited Viewport
 * Detects when cursor has exited viewport
 * @param  {document#event:mouseout} event
 */
 export default function hasExitedViewport(event) {
  return (
    event.clientY <= 0 ||
    event.clientX <= 0 ||
    event.clientX >= window.innerWidth ||
    event.clientY >= window.innerHeight
  )
}
