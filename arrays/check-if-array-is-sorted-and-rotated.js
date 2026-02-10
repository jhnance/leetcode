/**
 * Difficulty: easy
 * Leetcode link: https://leetcode.com/problems/check-if-array-is-sorted-and-rotated
 *
 * Description
 * -----------
 *
 * Given an array `nums`, return `true` if the array was originally sorted in
 * non-decreasing order, then rotated some number of positions (including zero).
 * Otherwise, return `false`.
 *
 * There may be duplicates in the original array.
 *
 * Note: An array `A` rotated by `x` positions results in an array `B` of the
 * same length such that `B[i] == A[(i + x) % A.length]` for every valid index `i`.
 *
 * Examples
 * --------
 *
 * Input: `nums` = [3, 4, 5, 1, 2]
 * Output: true
 * Explanation: [1, 2, 3, 4, 5] is the original sorted array. You can rotate the
 * array by `x = 2` positions to begin on the element of value 3: `[3, 4, 5, 1, 2]`
 *
 * Input: `nums` = [2, 1, 3, 4]
 * Output: false
 * Explanation: There is no sorted array once rotated that can make `nums`.
 *
 * Input: `nums` = [1, 2, 3]
 * Output: true
 * This array is sorted, and it could have been rotated either 0 times or 3 times
 * (an array rotated by as many elements as it holds is just the original array).
 */
export function check(nums) {
    if (nums.length === 1) return true

    let drops = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[(i + 1) % nums.length] < nums[i]) drops++
    }

    return drops <= 1
}
