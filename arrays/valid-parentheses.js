/**
 * Difficulty: easy
 * Leetcode link: https://leetcode.com/problems/valid-parentheses
 *
 * Description
 * -----------
 *
 * Given a string `string` containing just the characters `'('`, `')'`, `'{'`, `'}'`,
 * `'['`, and `']'`, determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 */

export function isValid(string) {
    const openers = []

    for (let char of string) {
        if (!isValidChar(char)) {
            throw Error('Invalid input; it must contain only ["(", "{", "[", "]", "}", ")"]')
        }

        if (isOpener(char)) {
            openers.push(char)
        } else {
            const lastOpener = openers.pop()
            if (char !== getMatch(lastOpener)) return false
        }
    }

    /**
     * Can't just return true here, because we might have inputs that contain only opening parens, meaning
     * pop() never gets called, since that appears only in the branch where we handle encountering a closing paren.
     */
    return !openers.length
}

function getMatch(paren) {
    switch (paren) {
        case '(': return ')'
        case '{': return '}'
        case '[': return ']'
        default: return null
    }
}

function isOpener(c) {
    return c === '(' || c === '{' || c ==='['
}

function isValidChar(c) {
    return isOpener(c) || c === ')' || c === '}' || c === ']'
}