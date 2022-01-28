module.exports = function(equation) {
    let operator = findOperator(equation);
    parts = equation.split(operator);
    let num1 = parseFloat(parts[0]);
    let num2 = parseFloat(parts[1]);

    switch(operator) {
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
}

function findOperator(equation) {
    let operators = ['+', '-', 'X', '/'];
    for(let i = 0; i < operators.length; i++) {
        let operator = operators[i];
        if(equation.includes(operator)) {
            return operator;
        }
    }
}