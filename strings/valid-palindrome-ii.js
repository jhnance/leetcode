/**
 * Difficulty: easy
 * Leetcode link:https://leetcode.com/problems/valid-palindrome-ii
 *
 * Description
 * -----------
 *
 * Given a string `string`, return `true` if `string` can be a palindrome after
 * deleting at most one character from it.
 *
 * Notes
 * -----
 *
 * The key observation here is that you are not *changing* one character, you
 * are *removing* one character. If you were changing, then `xyz` could be made
 * into a palindrome. If you are removing, one removal does not make that into
 * a palindrome, no matter which single character you remove.
 *
 * Complexity
 * ----------
 *
 * Time: O(n)
 * We check each character in the string at most twice, performing constant-time
 * operations for each check.
 *
 * Space: O(1)
 * We allocate a static number of pointers regardless of the input size.
 */
export function validPalindrome(string) {
    let left = 0
    let right = string.length - 1

    while (left <= right) {
        if (string[left] === string[right]) {
            left++
            right--
        } else {
            return (
                isPalindrome(string.substring(left + 1, right + 1)) ||
                isPalindrome(string.substring(left, right))
            )
        }
    }

    return true
}

function isPalindrome(string) {
    let left = 0
    let right = string.length - 1

    while (left <= right) {
        if (string[left++] !== string[right--]) return false
    }

    return true
}
