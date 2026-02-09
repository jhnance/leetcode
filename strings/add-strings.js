/**
 * Difficulty: easy
 * Leetcode link: https://leetcode.com/problems/add-strings
 *
 * Given two non-negative integers, `a` and `b` represented as strings,
 * return the sum of `num` and `b` as a string.
 *
 * You must solve the problem without using any built-in library for handling
 * large integers (such as `BigInteger`). You must also not convert the inputs
 * to integers directly.
 *
 * Examples
 * --------
 *
 * Input: `a` = "11", `b` = "123"
 * Output: "134"
 *
 * Input: `a` = "456", `b` = "77"
 * Output: "533"
 *
 * Input: `a` = "0", `b` = "0"
 * Output: "0"
 */
export function addStrings(_a, _b) {
    const longest = Math.max(_a.length, _b.length)
    const a = _a.padStart(longest, '0')
    const b = _b.padStart(longest, '0')

    let answer = ''
    let carry = 0
    for (let i = a.length - 1; i >= 0; i--) {
        let sum = carry + +a[i] + +b[i]
        carry = sum >= 10 ? 1 : 0
        answer = (sum % 10) + answer
    }

    if (carry > 0) answer = carry + answer
    return answer
}
