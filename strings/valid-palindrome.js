/**
 * Difficulty: easy
 * Leetcode link: https://leetcode.com/problems/valid-palindrome
 *
 * Description
 * -----------
 *
 * A phrase is a palindrome if, after converting all uppercase letters
 * into lowercase letters and removing all non-alphanumeric characters, it
 * reads the same forward and backward. Alphanumeric characters include letters
 * and numbers.
 *
 * Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.
 *
 * Examples
 * --------
 *
 * Input: `s` = "A man, a plan, a canal: Panama"
 * Output: `true`
 * Explanation: "amanaplanacanalpanama" is a palindrome. Commas and colons were
 * removed.
 *
 * Input: `s` = "race a car"
 * Output: `false`
 * Explanation: "raceacar" is not a palindrome.
 *
 * Input: `s` = " "
 * Output: `true`
 * Explanation: `s` is an empty string "" after removing non-alphanumeric
 * characters. Since an empty string reads the same forward and backward, it is
 * a palindrome.
 */

export function isPalindrome(s) {
    const alphanumeric = [...s]
        .filter((c) => {
            return /[a-zA-Z0-9]/.test(c)
        })
        .map((c) => c.toLowerCase())

    let left = 0
    let right = alphanumeric.length - 1
    while (left <= right) {
        if (alphanumeric[left++] !== alphanumeric[right--]) return false
    }

    return true
}
