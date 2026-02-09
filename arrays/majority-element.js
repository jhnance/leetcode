/**
 * Difficulty: easy
 * Leetcode link: https://leetcode.com/problems/majority-element
 *
 * Description
 * -----------
 *
 * Given an array `nums` of size `n`, return the majority element.
 *
 * The majority element is the element that appears more than Math.floor(n/2) times.
 * You may assume that the majority element always exists in the array.
 *
 * <<< Solve the problem in linear time and O(1) space. >>>
 *
 * Examples
 * --------
 *
 * Input: `nums` = [3, 2, 3]
 * Output: 3
 *
 * Input: `nums` = [2, 2, 1, 1, 1, 2, 2,]
 * Output: 2
 *
 * Constraints
 * -----------
 *
 * 1 <= n <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9
 *
 * Solution disclaimer
 * -------------------
 *
 * I did not come up with this myself, so it's important for my understanding
 * that I explain how it works.
 *
 * This is the Boyer-Moore Voting Algorithm. It relies on the nature of the
 * input array being that the majority element occurs more frequently than any
 * other.
 *
 * It's not necessarily true that, for any given subsection of the array, the
 * majority element will even appear. But, that's what the `count === 0` check
 * accommodates. If you just exited a section where the majority element was
 * predominant, the next section you start checking will still have the majority
 * element as the candidate.
 *
 * Over the course of the entire array, the count will always eventually be non-zero
 * for the majority element.
 */
export function majorityElement(nums) {
    let candidate
    let count = 0

    for (const num of nums) {
        if (count === 0) candidate = num
        count += candidate === num ? 1 : -1
    }

    return candidate
}
