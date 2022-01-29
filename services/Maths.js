/** Returns the result for a given equation.
 * @param {string} equation - The equation to solve.
 */
module.exports = function (equation) {
  'use strict';
/** Finds the operator inside a given equation.
 * @param {string} equation - The equation to search.
 */
  const operator = findOperator(equation);
/** Splits the equation into parts.
 * @param {string} operator - The operator to use as a separator.
 */
  const parts = equation.split(operator);
/** The first number of the equation. */
  const num1 = parseFloat(parts[0]);
/** The second number of the equation. */
  const num2 = parseFloat(parts[1]);

/** Solves the equation based on the provided operator. */
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case 'X':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Math error: case not found';
  }
};

/** Finds the operator inside a given equation.
 * @param {string} equation - The equation to search.
 */
function findOperator (equation) {
  const operators = ['+', '-', 'X', '/'];
  for (let i = 0; i < operators.length; i++) {
    const operator = operators[i];
    if (equation.includes(operator)) {
      return operator;
    }
  }
}
