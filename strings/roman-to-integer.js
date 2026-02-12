/**
 * Difficulty: easy
 * Leetcode link: https://leetcode.com/problems/roman-to-integer
 *
 * Description
 * -----------
 *
 * Roman numerals are represented by seven different symbols:
 *   * I (1)
 *   * V (5)
 *   * X (10)
 *   * L (50)
 *   * C (100)
 *   * D (500)
 *   * M (1000)
 *
 * For example, 2 is written as II in Roman numeral, just two ones added together.
 * 12 is written as XII, which is simply X + II. The number 27 is written as
 * XXVII, which is XX+V+II.
 *
 * Roman numerals are usually written largest to smallest from left to right.
 * However, the numeral for four is not IIII. Instead, the number four is written
 * as IV. Because the one is before the five we subtract it making four. The same
 * principle applies to the number nine, which is written as IX. There are six
 * instances where subtraction is used:
 *   * I can be placed before V (5) and X (10) to make 4 and 9
 *   * X can be placed before L (50) and C (100) to make 40 and 90
 *   * C can be placed before D (500) and M (1000) to make 400 and 900
 * Given a roman numeral, convert it to an integer.
 */

/**
 * Thought process
 * ---------------
 *
 * It seems easier to go from a roman numeral to an integer, instead of the reverse.
 *
 * We know the exceptions. So, when we encounter an I, an X, or a C, we check
 * for the next character. If the character matches one of the known exceptions,
 * then we know we are not parsing them as-is one after the other, but instead
 * parsing them as a pair, one of the subtraction edge cases.
 */
export function romanToInt(s) {
    const values = {
        // basic
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        // edge cases (subtraction)
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900,
    }

    let sum = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I' || s[i] === 'X' || s[i] === 'C') {
            const value = values[s[i] + s[i + 1]]
            if (value) {
                sum += value
                i++
                continue
            }
        }

        sum += values[s[i]]
    }

    return sum
}
