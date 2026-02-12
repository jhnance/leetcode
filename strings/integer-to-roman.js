/**
 * Difficulty: medium
 * Leetcode link: https://leetcode.com/problems/integer-to-roman
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
 * Roman numerals are formed by appending the conversions of decimal place values
 * from highest to lowest. Converting a decimal place value into a Roman numeral
 * has the following rules:
 *   * If the value does not start with 4 or 9, select the symbol of the maximal
 *     value that can be subtracted from the input, append that symbol to the result,
 *     subtract its value, and convert the remainder to a Roman numeral
 *   * If the value starts with a 4 or 9 use the subtractive form representing
 *     one symbol subtracted from the following symbol. For example, 4 is 1 (I)
 *     less than 5 (V): IV. 9 is 1 (I) less than 10 (X): IX. Only the following
 *     subtractive forms are used:
 *       * 4 (IV)
 *       * 9 (IX)
 *       * 40 (XL)
 *       * 90 (XC)
 *       * 400 (CD)
 *       * 900 (CM)
 *   * Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times
 *     to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D)
 *     multiple times. If you need to append a symbol 4 times, use the subtractive
 *     form.
 *
 * Given an integer, convert it to a Roman numeral.
 *
 * Examples
 * --------
 *
 * Input: `num` = 3749
 * Output: "MMMDCCXLIX"
 * Explanation:
 *   * 3000 = MMM (1000 (M) + 1000 (M) + 1000 (M))
 *   * 700 = DCC (500 (D) + 100 (C) + 100 (C))
 *   * 40 = XL (subtractive case for 50 or 10*4)
 *   * 9 = IX (subtractive form)
 *   * Special note: 49 is *not* IL (1 less than 50) because the conversion is
 *     based on decimal places (40 and 50 occupy the same decimal place (tens)).
 *
 * Input: `num` = 58
 * Output: "LVIII"
 *
 * Input: `num` = 1994
 * Output: "MCMXCIV"
 * Explanation:
 *   * 1000 = M
 *   * 900 = CM
 *   * 90 = XC
 *   * 4 = IV
 *
 * Constraints
 * -----------
 *
 * 1 <= num <= 3999
 *
 * Complexity
 * ----------
 *
 * Time: O(1)
 * The input space is fixed and there is a maximum number of times we might loop.
 *
 * Space: O(1)
 * We allocate the same map and string regardless of the value of the input.
 */
export function intToRoman(num) {
    const strings = new Map([
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I'],
    ])

    let numeral = ''
    let remainder = num
    while (remainder > 0) {
        for (let [value, string] of strings.entries()) {
            const result = remainder - value
            if (result >= 0) {
                numeral += string
                remainder = result
                break
            }
        }
    }

    return numeral
}
