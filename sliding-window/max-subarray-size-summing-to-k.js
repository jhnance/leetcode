/**
 * Difficulty: medium
 * Leetcode link: https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/description/
 *
 * Description
 * -----------
 * Given an integer array nums and an integer k, return the maximum length of a
 * subarray that sums to k. If there is not one, return 0 instead.
 *
 * Examples
 * --------
 * Input: nums = [1,-1,5,-2,3], k = 3
 * Output: 4
 * Explanation: The subarray [1, -1, 5, -2] sums to 3 and is the longest.
 *
 * Input: nums = [-2,-1,2,1], k = 1
 * Output: 2
 * Explanation: The subarray [-1, 2] sums to 1 and is the longest.
 *
 * Constraints
 * -----------
 * 1 <= nums.length <= 2 * 10^5
 * -10^4 <= nums[i] <= 10^4
 * -10^9 <= k <= 10^9
 */
function maxSubArrayLen(nums, k) {
    const n = nums.length

    const prefixSums = {}
    let prefix = 0
    let longest = 0
    for (let i = 0; i < n; i++) {
        prefix += nums[i]

        if (!(prefix in prefixSums)) {
            prefixSums[prefix] = i
        }

        if (prefix === k) {
            longest = i + 1
        }

        if (prefix - k in prefixSums) {
            longest = Math.max(longest, i - prefixSums[prefix - k])
        }
    }

    return longest
}
