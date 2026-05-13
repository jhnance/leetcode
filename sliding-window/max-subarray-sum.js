/**
 * This is the most basic sliding window problem.
 *
 * Here as a reference for other more complicated versions of the pattern.
 */
function maxSum(nums, k) {
    let windowSum = 0
    let windowStart = 0
    let maxSum = -Infinity

    for (let i = 0; i < nums.length; i++) {
        windowSum += nums[i]

        if (i - windowStart + 1 === k) {
            maxSum = Math.max(maxSum, windowSum)
            windowSum -= nums[windowStart]
            windowStart++
        }
    }

    return maxSum
}
