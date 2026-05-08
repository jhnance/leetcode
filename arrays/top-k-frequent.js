/**
 * Difficulty: medium
 * Leetcode link: https://leetcode.com/problems/top-k-frequent-elements/
 *
 * Description
 * -----------
 * Given an integer array `nums` and an integer `k`, return the `k`
 * most frequent elements (in any order).
 *
 * Examples
 * --------
 * Input: nums = [1, 1, 1, 2, 2, 3], k = 2
 * Output: [1, 2]
 *
 * Input: nums = [1], k = 1
 * Output: [1]
 *
 * Input: nums = [1, 2, 1, 2, 1, 2, 3, 1, 3, 2], k = 2
 * Output: [1, 2]
 *
 * Constraints
 * -----------
 *
 * - better than O(n log n)
 * - k is in the range [1, number of unique elements in the array]
 * - answer is guaranteed unique
 */
function topKFrequent(nums, k) {
    let max = 0

    const occurrences = nums.reduce((prev, curr) => {
        const newCount = prev[curr] ? prev[curr] + 1 : 1
        max = Math.max(max, newCount)

        prev[curr] = newCount
        return prev
    }, {})

    const buckets = Array.from({ length: max }, () => [])
    for (let [key, value] of Object.entries(occurrences)) {
        buckets[value - 1].push(key)
    }

    let remaining = k
    const topK = []
    for (let i = buckets.length - 1; i > -1; i--) {
        const bucket = buckets[i]
        const sliceCount = Math.min(remaining, bucket.length)

        topK.push(...bucket.slice(0, sliceCount))

        remaining -= sliceCount
        if (remaining === 0) return topK
    }
}
