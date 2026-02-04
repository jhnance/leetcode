/**
 * Difficulty: easy
 * Leetcode link: https://leetcode.com/problems/two-sum
 *
 * Description
 * -----------
 *
 * Given an array of integers `nums` and an integer `target`, return indices
 * of the two numbers such that they add up to `target`.
 *
 * You may assume that each input would have exactly one solution, and you
 * may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Examples
 * --------
 *
 * Input: `nums` = [2, 7, 11, 15], `target` = 9
 * Output: [0, 1]
 *
 * Input: `nums` = [3, 2, 4], `target` = 6
 * Output: [1, 2]
 *
 * Input: `nums` = [3, 3], `target` = 6
 * Output: [0, 1]
 *
 * Complexity
 * ----------
 *
 * Time: O(n)
 * We iterate over every element of `nums` once, and do constant-time operations
 * in each iteration.
 *
 * Space: O(n)
 * In the worst case, we add `n - 1` elements to our `encountered` Map.
 */

export function twoSum(nums, target) {
    const encountered = new Map()

    for (let [index, num] of nums.entries()) {
        let diff = target - num

        if (encountered.has(diff)) {
            return [index, encountered.get(diff)]
        }

        encountered.set(num, index)
    }
}
