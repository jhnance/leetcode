/**
 * Difficulty: medium
 * Leetcode link: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array
 *
 * Description
 * -----------
 *
 * Suppose an array of length `n` sorted in ascending order is rotated between
 * `1` and `n` times. For example, the array `nums = [0, 1, 2, 4, 5, 6, 7]` might
 * become:
 *   * `[4, 5, 6, 7, 0, 1, 2]` if it was rotated `4` times
 *   * `[0, 1, 2, 4, 5, 6, 7]` if it was rotated `7` times
 *
 * Notice that rotating an array `[a[0], a[1], a[2], ..., a[n - 1]]` 1 time results
 * in the array `[a[n- 1], a[1], a[2], ..., a[n - 2]].
 *
 * Given the sorted rotated array `nums` of unique elements, return the minimum
 * element of this array.
 *
 * You must write an algorithm that runs in `O(log n)` time.
 *
 * Examples
 * --------
 *
 * Input: `nums` = `[3, 4, 5, 1, 2]`
 * Output: 1
 * Explanation: The original array was [1, 2, 3, 4, 5] rotated 3 times.
 *
 * Input: `nums` = `[4, 5, 6, 7, 0, 1, 2]`
 * Output: 0
 * Explanation: The original array was [0, 1, 2, 4, 5, 6, 7] and it was rotated 4 times.
 *
 * Input: `nums` = `[11, 13, 15, 17]`
 * Output: 11
 * Explanation: The original array was [11, 13, 15, 17] and it has been rotated
 * either 0 times or by some multiple of 4 times.
 */
export function findMin(nums) {
    if (nums.length === 1 || nums[0] < nums[nums.length - 1]) return nums[0]

    let left = 0
    let right = nums.length - 1

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2)

        // if the number immediately to the right of mid is smaller than the
        // one at mid, that is the inflection point
        if (nums[mid + 1] < nums[mid]) return nums[mid + 1]
        // if the number to the left of mid is larger, then mid itself is the
        // inflection point
        if (nums[mid - 1] > nums[mid]) return nums[mid]

        // if the left portion is sorted and only increasing,
        // then the inflection point must be to the right of the midpoint
        if (nums[mid] > nums[0]) left = mid + 1
        // otherwise, it must be to the left
        else right = mid - 1
    }
}
