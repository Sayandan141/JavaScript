import { degreeToRadian } from './DegreeToRadian.js'

/**
 * @function circularArcLength
 * @description calculate the length of a circular arc
 * @param {Integer} radius
 * @param {Integer} degrees
 * @returns {Integer} radius * angle_in_radians
 * @see https://en.wikipedia.org/wiki/Circular_arc
 * @example circularArcLength(3, 45) = 2.356194490192345
 */
function circularArcLength(radius, degrees) {
  return radius * degreeToRadian(degrees)
}
/**
 * @function circularArcArea
 * @description calculate the area of the sector formed by an arc
 * @param {Integer} radius
 * @param {Integer} degrees
 * @returns {Integer} 0.5 * r * r * angle_in_radians
 * @see https://en.wikipedia.org/wiki/Circular_arc
 * @example circularArcArea(3,45) = 3.5342917352885173
 */
function circularArcArea(radius, degrees) {
  return (Math.pow(radius, 2) * degreeToRadian(degrees)) / 2
}



/**
 *Optimized functions for calculating circular arc length and area.
 * The degree to radian conversion is inlined for better performance and reduced dependencies.
 */

/**
 * Converts an angle from degrees to radians.
 * This helper function is inlined for performance.
 * @param {number} degrees The angle in degrees.
 * @returns {number} The angle in radians.
 */
const degreeToRadian = (degrees) => {
  return degrees * (Math.PI / 180);
};

/**
 * @function circularArcLength
 * @description Calculates the length of a circular arc.
 * @param {number} radius The radius of the circle.
 * @param {number} degrees The angle of the arc in degrees.
 * @returns {number} The length of the circular arc.
 * @see https://en.wikipedia.org/wiki/Circular_arc
 * @example circularArcLength(3, 45) = 2.356194490192345
 */
function circularArcLength(radius, degrees) {
  // Calculate the angle in radians directly within the function
  const radians = degreeToRadian(degrees);
  return radius * radians;
}

/**
 * @function circularArcArea
 * @description Calculates the area of the sector formed by an arc.
 * @param {number} radius The radius of the circle.
 * @param {number} degrees The angle of the arc in degrees.
 * @returns {number} The area of the circular sector.
 * @see https://en.wikipedia.org/wiki/Circular_arc
 * @example circularArcArea(3,45) = 3.5342917352885173
 */
function circularArcArea(radius, degrees) {
  // Calculate the angle in radians directly within the function
  const radians = degreeToRadian(degrees);
  // Formula for sector area: 0.5 * r^2 * angle_in_radians
  return (0.5 * Math.pow(radius, 2) * radians);
}

export { circularArcLength, circularArcArea };
