/**
 * Difficulty: medium
 * Leetcode link: https://leetcode.com/problems/find-the-duplicate-number
 *
 * Given an array of integers nums containing n + 1 integers where each integer
 * is in the range [1, n] inclusive.
 *
 * There is only one repeated number in nums, return this repeated number.
 *
 * You must solve the problem without modifying the array nums and using only
 * constant extra space.
 *
 *
 *
 * Examples
 * --------
 * Input: nums = [1,3,4,2,2]
 * Output: 2
 *
 * Input: nums = [3,1,3,4,2]
 * Output: 3
 *
 * Input: nums = [3,3,3,3,3]
 * Output: 3
 *
 * Constraints
 * -----------
 *
 * 1 <= n <= 105
 * nums.length == n + 1
 * 1 <= nums[i] <= n
 * All the integers in nums appear only once except for precisely one integer
 * which appears two or more times.
 *
 *
 * Challenges
 * ----------
 * How can we prove that at least one duplicate number must exist in nums?
 *  - I'm not sure about a "proof" but this should be obvious from the fact
 *    that the values are only allowed to be in range [1,n] and there are n+1
 *    values in nums. If n = 3, the values can only be 1, 2, 3 (not 0, not 4),
 *    so in an array of length 4 (n + 1), you have to duplicate at least one
 *    value; at least once, because you can also have an array with multiple
 *    duplicates, like [1, 1, 1, 3].
 *
 * Can you solve the problem in linear runtime complexity?
 *  - The solution that disobeys the constraint to not modify the array in place
 *    is the first solution below. This is the solution I would produce in an
 *    interview.
 *  - The second solution is also linear runtime complexity while obeying
 *    the immutability constraint. This is just note-taking, though. This is
 *    a named algorithm.
 */
function findDuplicate(nums) {
    let iter = 0
    let last = nums[0]

    while (iter < nums.length) {
        if (nums[last] === -1) return last

        let next = nums[last]
        nums[last] = -1
        last = next
        iter++
    }
}

/**
 * I did not come up with this one, but this is the solution to
 * not modifying it in place while solving it in linear time.
 *
 * It's worth nothing that it's slower than the above; it's still O(n) time
 * complexity, but it performs more than n iterations to catch the two pointers
 * up to each other, whereas the above only ever iterates at most n times, period.
 */
function floyds(nums) {
    let slow = nums[0]
    let fast = nums[0]

    do {
        slow = nums[slow]
        fast = nums[nums[fast]]
    } while (slow !== fast)

    slow = nums[0]
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }

    return fast
}
