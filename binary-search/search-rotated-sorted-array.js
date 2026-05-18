/**
 * Difficulty: medium
 * Link: https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 */
function search(nums, target) {
    const n = nums.length
    let left = 0
    let right = n - 1
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)

        if (target === nums[mid]) return mid

        if (nums[mid] >= nums[left]) {
            // left half of the array is sorted, pivot to the right
            if (target < nums[mid] && target >= nums[left]) right = mid - 1
            else left = mid + 1
        } else {
            // right half of the array is sorted, pivot to the left
            if (target > nums[mid] && target <= nums[n - 1]) left = mid + 1
            else right = mid - 1
        }
    }
    return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
