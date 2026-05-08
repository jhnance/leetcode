/**
 * Difficulty: medium
 * Leetcode link: https://leetcode.com/problems/product-of-array-except-self/
 *
 * Description
 * -----------
 * Given an integer array nums, return an array answer such that answer[i] is
 * equal to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit
 * integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the
 * division operation.
 *
 *
 * Examples
 * --------
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 *
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 *
 * Constraints
 * -----------
 * 2 <= nums.length <= 105
 * -30 <= nums[i] <= 30
 * The input is generated such that answer[i] is guaranteed to fit in a 32-bit
 * integer.
 *
 *
 * Follow up: Can you solve the problem in O(1) extra space complexity?
 * (The output array does not count as extra space for space complexity analysis.)
 */
function productExceptSelf(nums) {
    const output = Array(nums.length).fill(1)

    // build up prefix products
    for (let i = 1; i < output.length; i++) {
        output[i] = nums[i - 1] * output[i - 1]
    }

    // build up final products with a rolling suffix, in place
    let suffix = 1
    for (let i = output.length - 1; i > -1; i--) {
        output[i] = output[i] * suffix
        suffix *= nums[i]
    }

    return output
}
