/**
 * Difficulty: easy
 * Leetcode link: https://leetcode.com/problems/move-zeroes
 *
 * Description
 * -----------
 *
 * Given an integer array `nums`, move all `0`s to the end of it while maintaining
 * the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 *
 * Examples
 * --------
 *
 * Input: `nums` = [0, 1, 0, 3, 12]
 * Output: [1, 3, 12, 0, 0]
 *
 * Input: `nums` = [0]
 * Output: [0]
 *
 * Complexity
 * ----------
 *
 * Time: O(n)
 * One iteration through `nums`, with only constant-time operations in each iteration.
 *
 * Space: O(1)
 * No real additional space to speak of (two pointers). Swaps are done in place.
 */
export function moveZeroes(nums) {
    let slow = 0
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            swap(nums, slow++, fast)
        }
    }

    return nums
}

function swap(nums, a, b) {
    const temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
}
