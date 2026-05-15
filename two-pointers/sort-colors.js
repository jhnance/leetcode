/**
 * This one is really more of a 3-pointer solution masquerading as a 2-pointer one.
 * I suppose it depends on how you look at it; we have 2 pointers that mark our
 * bounds, and we only search within that space once those bounds are satisfied.
 *
 * Difficulty: medium (feels closer to hard, in my opinion)
 * Leetcode link: https://leetcode.com/problems/sort-colors
 *
 * Description
 * -----------
 * Given an array nums with n objects colored red, white, or blue, sort them
 * in-place so that objects of the same color are adjacent, with the colors in
 * the order red, white, and blue.
 *
 * We will use the integers 0, 1, and 2 to represent the color red, white,
 * and blue, respectively.
 *
 * You must solve this problem without using the library's sort function.
 *
 * Examples
 * --------
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 *
 * Input: [2, 0, 1]
 * Output: [0, 1, 2]
 *
 * Notes
 * -----
 * The easy-to-think-of solution is counting sort: since the values are bounded
 * (we know they can only be 0, 1, and 2) we simply count the occurrences of
 * each and re-write the array in place from left to right. This requires two
 * passes but is still O(n).
 *
 * The harder-to-think-of solution is the two-pointer one. Our left and right
 * pointer guard our invariants:
 *   - to the left of left is all 0s
 *   - to the right of right is all 2s
 * The invariants aren't violated at the start becuase there are no values
 * that would satisfy either of these conditions anyway, since our left and
 * right pointers start at the beginning and end of the array, respectively.
 *
 * When we encounter a 0, we swap it and the value at our left pointer, and
 * then increment both. Since left starts at 0, we are always guaranteed to
 * swap a 0 into the first position when we encounter it. Then we move the left
 * pointer forward, preserving our invariant (only 0s left of left).
 *
 * When we encounter a 1, we increment i, because it is in the right part of the
 * array (between left and right).
 *
 * When we encounter a 2, we swap with the value at our right pointer, and then
 * we decrement *only the right pointer*. This is critical, because we might
 * be moving an item that still needs to be swapped into the ith position.
 * Decrementing right here preserves our invariant, though, after swapping a 2
 * into that position. Similar to how the left pointer works, we're guaranteed
 * to swap 2s into the end of the array because of right starting at length - 1.
 *
 * The hardest part to think about is the middle section, where the 1s are supposed
 * to go. The trick is just to remember to only increment left and decrement right
 * after a 0 or 2 swap, respectively; to only increment i when we swap with left;
 * and to never decrement i after swapping with right.
 *
 * Example:
 * [2, 1, 2, 1, 0]
 *  L           R
 *  i
 *  i === 2, swap i and R, decrement R
 *
 * [0, 1, 2, 1, 2]
 *  L        R
 *  i
 *  i === 0, swap i and L, increment both
 *
 *  [0, 1, 2, 1, 2]
 *      L     R
 *      i
 *  i === 1, increment i
 *
 * [0, 1, 2, 1, 2]
 *     L     R
 *        i
 * i === 2, swap i and R, decrement R
 *
 * [0, 1, 1, 2, 2]
 *     L  R
 *        i
 * i === 1, increment i, exit loop
 *
 * If you run into a 0 or a 2 after incrementing only i, this is what it looks like:
 * [0, 0, 1, 0, 2, 2]
 *        L  R
 *           i
 *  i === 0, swap i and L, increment both
 *
 *  [0, 0, 0, 1, 2, 2]
 *            L
 *            R
 *               i
 *  i out of bounds, exit loop
 */
function sortColors(nums) {
    let left = 0
    let right = nums.length - 1
    let i = 0

    while (i < right) {
        const num = nums[i]
        if (num === 0) {
            ;[nums[i], nums[left]] = [nums[left], nums[i]]
            i++
            left++
        }

        if (num === 1) {
            i++
        }

        if (num === 2) {
            ;[nums[i], nums[right]] = [nums[right], nums[i]]
            right--
        }
    }
    return nums
}

console.log(sortColors([2, 1, 2, 1, 0]))
