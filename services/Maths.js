module.exports = function(equation) {
    parts = equation.split(" ");
    let num1 = parseInt(parts[0]);
    let num2 = parseInt(parts[2]);
    let operator = parts[1];

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