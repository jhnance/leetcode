/**
 * Difficulty: medium
 * Leetcode link: https://leetcode.com/problems/longest-consecutive-sequence
 *
 * Description
 * -----------
 * Given an unsorted array of integers nums, return the length of the longest
 * consecutive elements sequence.
 *
 * You must write an algorithm that runs in O(n) time.
 *
 * Examples
 * --------
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4].
 * Therefor its length is 4.
 *
 * Input: nums = [0,3,7,2,5,8,4,6,0,1]
 * Output: 9
 *
 * Input: nums = [1,0,1,2]
 * Output: 3
 *
 *
 * Constraints
 * -----------
 * 0 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 */
function longestConsecutive(nums) {
    if (nums.length <= 1) return nums.length

    const encountered = new Set(nums)

    let longest = 1

    for (let num of nums) {
        if (!encountered.has(num - 1)) {
            let length = 1
            let value = num

            while (encountered.has(value + 1)) {
                value++
                length++
            }

            longest = Math.max(longest, length)
        }
    }

    return longest
}
