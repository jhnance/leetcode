/**
 * Difficulty: easy
 * Leetcode link: https://leetcode.com/problems/move-zeroes
 * Description
 * -----------
 * Given an integer array nums, move all 0's to the end of it while maintaining
 * the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 *
 * Examples
 * --------
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Input: nums = [0]
 * Output: [0]
 */
function moveZeroes(nums) {
    let nonZero = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            ;[nums[nonZero], nums[i]] = [nums[i], nums[nonZero]]
            nonZero++
        }
    }

    return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
