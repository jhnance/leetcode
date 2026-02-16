/**
 * Difficulty: easy
 * Leetcode link: https://leetcode.com/problems/longest-common-prefix
 *
 * Description
 * -----------
 *
 * Write a function to find the longest common prefix among an array of strings.
 *
 * If there is no common prefix, return an empty string.
 *
 * Examples
 * --------
 *
 * Input: `strings` = ["flower", "flow", "flight"]
 * Output: "fl"
 *
 * Input: `strings` = ["dog", "racecar", "car"]
 * Output: ""
 *
 * Constraints
 * -----------
 *   * 1 < = strings.length <= 200
 *   * 0 <= strings[i].length <= 200
 *   * strings[i] consists of only lowercase English letters if it is non-empty
 *
 * Complexity
 * ----------
 *
 * Time: O(n^2)
 * In the worst case, every string is of equal length and has the same characters.
 *
 * Space: O(1)
 * We allocate a couple strings and a single number.
 */
export function longestCommonPrefix(strings) {
    if (!strings.length) return ''

    const shortestString = Math.min(...strings.map((s) => s.length))

    let prefix = ''
    let count = 0
    let char = ''

    for (let p = 0; p < shortestString; p++) {
        if (!char) char = strings[0][p]

        for (let i = 0; i < strings.length; i++) {
            if (strings[i][p] === char) count++
        }

        if (count === strings.length) {
            prefix += char
            char = ''
            count = 0
        } else {
            break
        }
    }

    return prefix
}
