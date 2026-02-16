/**
 * Difficulty: easy
 * Leetcode link: https://leetcode.com/problems/first-bad-version
 *
 * Description
 * -----------
 *
 * You are a product manager and currently leading a team to develop a new product.
 * Unfortunately, the latest version of your product fails the quality check. Since
 * each version is developed based on the previous version, all the versions after
 * a bad version are also bad.
 *
 * Suppose you have `n` versions (`[1, 2, ..., n]`) and you want to find out the
 * first bad one, which causes all the following ones to be bad.
 *
 * You are given an API `bool isBadVersion(version)` which returns whether `version`
 * is bad. Implement a function to find the first bad version. You should minimize
 * the number of calls to the API.
 *
 * Complexity
 * ----------
 *
 * Time: O(log n)
 * We do a binary search over the input space (1...n) to find the first bad version.
 *
 * Space: O(1)
 * We only allocate a few pointers.
 */

export function firstBadVersion(isBadVersion) {
    return function (n) {
        let left = 1
        let right = n

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2)

            if (isBadVersion(mid)) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

        return left
    }
}
