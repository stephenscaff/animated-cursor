// const lerp = (a, b, n) => (1 - n) * a + n * b

/**
 * Linear Interpolation (Lerp) easing util
 * Enables smooth animations between 2 points
 * @param {Number} a - Starting value
 * @param {Number} b - Destimation value
 * @param {Number} n - Normal value to control Linear Interpolation.
 * @returns {Number}
 */
export default function lerp(a, b, n) {
  return (1 - n) * a + n * b
}
