/**
 * Difficulty: easy
 * Leetcode link: https://leetcode.com/problems/merge-sorted-array
 *
 * Description
 * -----------
 *
 * You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing
 * order, and two integers `m` and `n`, representing the number of elements in
 * `nums1` and `nums2` respectively.
 *
 * Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function, but instead be
 * stored inside the array `nums1`. To accommodate this, `nums1` has a length
 * of `m + n`, where the first `m` elements denote the elements that should be
 * merged, and the last `n` elements are set to `0` and should be ignored. `nums2`
 *  has a length of `n`.
 *
 *  Examples
 *  --------
 *
 *  Input: `nums1` = [1, 2, 3, 0, 0, 0], `m` = 3; `nums2` = [2, 5, 6], `n` = 3
 *  Output: [1, 2, 2, 3, 5, 6]
 *
 *  Input: `nums1` = [1], `m` = 1; `nums2` = [], `n` = 0
 *  Output: [1]
 *
 *  Input: `nums1` = [0], `m` = 0; `nums2` = [1], `n` = 1
 *  Output: [1]
 *
 *  Note that nums1[i] or nums2[i] can be 0. In the example above, 0 is a sentinel
 *  value because `m` is 0 (meaning there are no elements in `nums1` to sort, and
 *  it only has `nums1.length` slots for elements of `nums2` to be sorted into.
 *
 *  Complexity
 *  ----------
 *
 * Time: O(m + n)
 * We do at most m + n comparisons and do a simple constant-time insertion
 * operation into the statically sized array of length m + n.
 *
 * Space: O(1)
 * A couple of ints. All swaps are made in place in the provided `nums1`.
 */
export function merge(nums1, m, nums2, n) {
    // start at the end of nums1
    let a = m - 1
    // start at the end of nums2
    let b = n - 1

    for (let i = m + n - 1; i > -1; i--) {
        if (b < 0) break

        if (a >= 0 && nums1[a] > nums2[b]) {
            nums1[i] = nums1[a--]
        } else {
            nums1[i] = nums2[b--]
        }
    }

    return nums1
}
