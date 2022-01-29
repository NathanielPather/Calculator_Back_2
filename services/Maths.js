module.exports = function (equation) {
  'use strict';
  const operator = findOperator(equation);
  const parts = equation.split(operator);
  const num1 = parseFloat(parts[0]);
  const num2 = parseFloat(parts[1]);

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

function findOperator (equation) {
  const operators = ['+', '-', 'X', '/'];
  for (let i = 0; i < operators.length; i++) {
    const operator = operators[i];
    if (equation.includes(operator)) {
      return operator;
    }
  }
}
