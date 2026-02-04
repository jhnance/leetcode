/**
 * Difficulty: medium
 * Leetcode link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
 *
 * Description
 * -----------
 *
 * Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing
 * order, find two numbers such that they add up to a specific `target` number.
 * Let these two numbers be `numbers[index1]` and `numbers[index2]` where
 * 1 <= `index1` < `index2` <= `numbers.length`.
 *
 * Return the indices of the two numbers, `index1` and `index2`, added by one as
 * an integer array `[index1, index2]` of length 2.
 *
 * The tests are generated such that there is exactly one solution. You may not
 * use the same element twice.
 *
 * Your solution must use only constant extra space.
 *
 * Examples
 * --------
 *
 * Input: `numbers` = [2, 7, 11, 15], `target` = 9
 * Output: [1, 2] <-- remember, 1-indexed, not 0-indexed
 *
 * Input: `numbers` = [2, 3, 4], `target` = 6
 * Output: [1, 3]
 *
 * Input: `numbers` = [-1, 0], `target` = -1
 * Output: [1, 2]
 *
 * Complexity
 * ----------
 *
 * Time: O(n)
 * We iterate over every element in `numbers` once and do constant-time
 * operations in each iteration.
 *
 * Space: O(1)
 * We allocate the same number of variables and one fixed-size output array,
 * regardless of the size of the input.
 */

export function twoSum(numbers, target) {
    let left = 0
    let right = numbers.length - 1

    for (left, right; left < right; ) {
        const sum = numbers[left] + numbers[right]

        if (sum === target) return [left + 1, right + 1]

        if (sum < target) left++
        if (sum > target) right--
    }
}
