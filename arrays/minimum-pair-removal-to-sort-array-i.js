/**
 * Difficulty: easy
 * Leetcode link: https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i
 *
 * Description
 * -----------
 *
 * Given an array `nums`, you can perform the following operation any number of
 * times:
 *   * Select the adjacent pair with the minimum sum in `nums`. If multiple such
 *     pairs exist, choose the leftmost one.
 *   * Replace the pair with their sum.
 *
 * Return the minimum number of operations needed to make the array non-decreasing.
 *
 * An array is said to be non-decreasing if each element is greater than or equal
 * to its previous element (if it exists).
 *
 * Examples
 * --------
 *
 * Input: `nums` = [5, 2, 3, 1]
 * Output: 2
 * Explanation:
 *   * The pair (3, 1) has the minimum sum of 4. After replacement, `nums` = [5, 2, 4]
 *   * The pair (2, 4) has the minimum sum of 6. After replacement, `nums` = [5, 6]
 * The array `nums` became non-decreasing in two operations.
 *
 * Input: `nums` = [1, 2, 2]
 * Output: 0
 * Explanation: The array `nums` is already sorted.
 */

/**
 * An element of one adjacent pair can overlap another adjacent pair.
 * For example, [5, 2, 4] has two adjacent pairs: (5, 2) and (2, 4).
 *
 * To find the minimum adjacent pair, every time your array changes you need to do
 * n operations to find it.
 *
 * [1, 2, 1, 2, 4] has two minimum adjacent pairs (1, 2) and (1, 2), so you choose
 * the leftmost one at indexes [0, 1].
 */
export function minimumPairRemoval(nums) {
    let replaced = [...nums]
    let numReplacements = 0

    while (true) {
        let nonDecreasing = true

        let minPairSum = Infinity
        let minPairSumIndex

        for (let i = 0; i < replaced.length - 1; i++) {
            let curr = replaced[i]
            let next = replaced[i + 1]

            if (next < curr) nonDecreasing = false

            if (i + 1 < replaced.length) {
                let pairSum = curr + next
                if (pairSum < minPairSum) {
                    minPairSum = pairSum
                    minPairSumIndex = i
                }
            }
        }

        if (nonDecreasing) break

        replaced.splice(minPairSumIndex, 2, minPairSum)
        numReplacements++
    }

    return numReplacements
}
