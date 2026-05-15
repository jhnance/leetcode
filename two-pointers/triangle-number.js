/**
 * Difficulty: medium
 * Leetcode link: https://leetcode.com/problems/valid-triangle-number/description/
 *
 * Description
 * -----------
 * Given an integer array nums, return the number of triplets chosen from the
 * array that can make triangles if we take them as side lengths of a triangle.
 *
 * Examples
 * --------
 * Input: nums = [2,2,3,4]
 * Output: 3
 * Explanation: Valid combinations are:
 * 2, 3, 4 (using the first 2)
 * 2, 3, 4 (using the second 2)
 * 2, 2, 3
 *
 * Input: nums = [4,2,3,4]
 * Output: 4
 * Explanation: Valid combinations are:
 * 2, 3, 4
 * 2, 3, 4 (using the second 4)
 * 2, 4, 4
 * 3, 4, 4
 */
function triangleNumber(nums) {
    const sorted = [...nums].sort((a, b) => a - b)
    const n = sorted.length

    let solutions = 0
    for (let i = n - 1; i >= 0; i--) {
        const c = sorted[i]
        let left = 0
        let right = i - 1

        while (left < right) {
            if (sorted[left] + sorted[right] > c) {
                solutions += right - left
                right--
            } else {
                left++
            }
        }
    }

    return solutions
}
