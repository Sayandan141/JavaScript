/**
 * Author: dephraiim
 * License: GPL-3.0 or later
 *
 * An Armstrong number is equal to the sum of its own digits each raised to the power of the number of digits.
 * For example, 370 is an Armstrong number because 3*3*3 + 7*7*7 + 0*0*0 = 370.
 * An Armstrong number is often called Narcissistic number.
 *
 */

const armstrongNumber = (num) => {
  if (typeof num !== 'number' || num < 0) return false
  const numStr = num.toString()
  const sum = [...numStr].reduce(
    (acc, digit) => acc + parseInt(digit) ** numStr.length,
    0
  )
  return sum === num
}

export { armstrongNumber }




//using recursion method
const armstrongNumber = (num) => {
  // Input validation: Ensure the input is a non-negative number.
  if (typeof num !== 'number' || num < 0) {
    return false;
  }

  // Convert the number to a string to easily access digits and determine length.
  const numStr = num.toString();
  // Get the total number of digits, which will be the power for each digit.
  const numDigits = numStr.length;

  /**
   * Recursive helper function to calculate the sum of digits raised to the power of numDigits.
   *
   * @param {string} currentNumStr The remaining part of the number string to process.
   * @returns {number} The sum of the digits (each raised to numDigits) processed so far.
   */
  const calculateSumRecursive = (currentNumStr) => {
    // Base case: If the string is empty, there are no more digits to process, return 0.
    if (currentNumStr.length === 0) {
      return 0;
    }

    // Get the first digit of the current string.
    const digit = parseInt(currentNumStr[0]);
    // Calculate the current digit raised to the power of the total number of digits.
    const poweredDigit = Math.pow(digit, numDigits);

    // Recursive step: Add the powered current digit to the sum calculated from the rest of the string.
    // We slice the string to remove the first digit for the next recursive call.
    return poweredDigit + calculateSumRecursive(currentNumStr.slice(1));
  };

  // Start the recursive calculation with the full number string.
  const sumOfPoweredDigits = calculateSumRecursive(numStr);

  // Compare the calculated sum with the original number.
  return sumOfPoweredDigits === num;
};

export { armstrongNumber };

