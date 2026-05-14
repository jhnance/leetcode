/**
 * Difficulty: medium
 * Link: https://www.hellointerview.com/learn/code/sliding-window/maximum-sum-of-distinct-subarrays-with-length-k
 *
 * Given an integer array nums and an integer k, write a function to identify
 * the highest possible sum of a subarray within nums, where the subarray meets
 * the following criteria:
 *   - its length is k
 *   - all of its elements are unique
 * If no such subarray exists, return 0.
 *
 * Examples
 * --------
 * nums = [3, 2, 2, 3, 4, 6, 7, 7, -1]
 * k = 4
 * output = 20
 * Explanation: The subarrays of nums with length 4 are:
 * [3, 2, 2, 3] # elements 3 and 2 are repeated.
 * [2, 2, 3, 4] # element 2 is repeated.
 * [2, 3, 4, 6] # meets the requirements and has a sum of 15.
 * [3, 4, 6, 7] # meets the requirements and has a sum of 20.
 * [4, 6, 7, 7] # element 7 is repeated.
 * [6, 7, 7, -1] # element 7 is repeated.
 *
 * Thoughts
 * --------
 *
 * It seems the difference this time is just to track the unique elements while
 * we slide our window. If the new window would introduce a non-unique element,
 * we do not count its sum as a potential answer.
 *
 * My initial solution used a separate Set nonUniques to track the values
 * we had more than 1 of, but I also like the length check on the keys of counts.
 * Stole that small bit from the solution guide, as it makes the code just
 * a little more concise and isn't much more difficult to understand.
 */

function maxSum(nums, k) {
    const counts = {}

    let max = -Infinity
    let windowSum = 0
    let start = 0

    for (let end = 0; end < nums.length; end++) {
        let value = nums[end]
        windowSum += value
        counts[value] = (counts[value] || 0) + 1

        if (end - start + 1 === k) {
            /**
             * Duplicate keys will cause this to fail.
             * If we have k distinct keys, then we know they are
             * all unique (count of 1), because our window size is also k.
             */
            if (Object.keys(counts).length === k) {
                max = Math.max(max, windowSum)
            }

            const startValue = nums[start]
            windowSum -= startValue
            counts[startValue]--
            start++

            if (counts[startValue] === 0) delete counts[startValue]
        }
    }

    return max
}
