/**
 * Difficulty: hard
 * Link: https://www.hellointerview.com/learn/code/binary-search/split-array-largest-sum
 */
function search(nums, k) {
    let low = -Infinity,
        high = 0
    for (const num of nums) {
        low = Math.max(low, num)
        high += num
    }

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2)

        if (canFormValidSplits(nums, mid, k)) {
            high = mid - 1
        } else low = mid + 1
    }

    return low
}
function canFormValidSplits(nums, max, k) {
    let count = 1
    let sum = 0
    for (const num of nums) {
        if (num + sum <= max) {
            sum += num
        } else {
            count++
            sum = num
        }
    }

    return count <= k
}
