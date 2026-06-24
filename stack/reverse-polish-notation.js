/**
 * You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
 * Evaluate the expression. Return an integer that represents the value of the expression.
 *
 * Note: The valid operators are '+', '-', '*', and '/'.
 * Each operand may be an integer or another expression.
 * The division between two integers always truncates toward zero.
 * There will not be any division by zero.
 * The input represents a valid arithmetic expression in a reverse polish notation.
 * The answer and all the intermediate calculations can be represented in a 32-bit integer.
 *
 * Example 1:
 * Input: tokens = ["2","1","+","3","*"]
 * Output: 9
 * Explanation: ((2 + 1) * 3) = 9
 *
 * Example 2:
 * Input: tokens = ["4","13","5","/","+"]
 * Output: 6
 * Explanation: (4 + (13 / 5)) = 6
 *
 * Example 3:
 * Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
 * Output: 22
 * Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
 * = ((10 * (6 / (12 * -11))) + 17) + 5
 * = ((10 * (6 / -132)) + 17) + 5
 * = ((10 * 0) + 17) + 5
 * = (0 + 17) + 5
 * = 17 + 5
 * = 22
 */
const validOperators = new Set(['+', '-', '*', '/'])
function evalRPN(tokens) {
    if (tokens.length === 1) return +tokens[0]

    const operands = []

    for (const token of tokens) {
        if (!validOperators.has(token)) {
            operands.push(token)
        } else {
            const operator = token
            const second = +operands.pop()
            const first = +operands.pop()
            const result = calculate(first, second, operator)
            operands.push(result)
        }
    }

    return operands.pop()
}

function calculate(first, second, operator) {
    switch (operator) {
        case '*':
            return first * second
        case '/':
            return Math.trunc(first / second)
        case '+':
            return first + second
        case '-':
            return first - second
    }
}
