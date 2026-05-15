/**
 * Difficulty: medium
 * Leetcode link: https://leetcode.com/problems/3sum/description/
 *
 * Description
 * -----------
 * Given an integer array nums, return all the triplets [nums[i], nums[j],
 * nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 * Examples
 * --------
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation:
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 * Notice that the order of the output and the order of the triplets does not matter.
 *
 * Input: nums = [0,1,1]
 * Output: []
 * Explanation: The only possible triplet does not sum up to 0.
 *
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 * Explanation: The only possible triplet sums up to 0.
 *
 * Constraints
 * -----------
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 */
function threeSum(nums) {
    const sorted = [...nums].sort((a, b) => a - b)

    const triplets = []
    for (let i = 0; i < sorted.length - 2; i++) {
        const num = sorted[i]
        /**
         * Because our input is sorted, we know that any starting value
         * greater than 0 automatically fails our condition; it and any
         * numbers after it cannot possibly sum to 0.
         */
        if (num > 0) break
        /**
         * If we have two identical items back to back, then we would
         * produce identical triplets. We were asked to avoid duplicates,
         * so we skip over  starting elements.
         */
        if (i > 0 && num === sorted[i - 1]) continue

        let left = i + 1
        let right = sorted.length - 1
        /**
         * Now it's just two sum but with the offset of num (sorted[i]).
         *
         * We also add deduplication with the two inner while loops. 
         */
        while (left < right) {
            let sum = num + sorted[left] + sorted[right]
            if (sum === 0) {
                triplets.push([num, sorted[left], sorted[right]])

                while (left < right && sorted[left] === sorted[left + 1]) left++
                while (right > left && sorted[right] === sorted[right - 1])
                    right--

                left++
                right--
            } else if (sum < 0) left++
            else right--
        }
    }

    return triplets
}
