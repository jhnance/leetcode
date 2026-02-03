/**
 * Difficulty: easy
 * Leetcode link: https://leetcode.com/problems/two-sum
 *
 * Description
 * -----------
 *
 * Given an array of integers `nums` and an integer `target`, return indices
 * of the two numbers such that they add up to `target`.
 *
 * You may assume that each input would have exactly one solution, and you
 * may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Examples
 * --------
 *
 * Input: `nums` = [2, 7, 11, 15], `target` = 9
 * Output: [0, 1]
 *
 * Input: `nums` = [3, 2, 4], `target` = 6
 * Output: [1, 2]
 *
 * Input: `nums` = [3, 3], `target` = 6
 * Output: [0, 1]
 */

function twoSum(nums, target) {
    const encountered = new Map()

    for (let [index, num] of nums.entries()) {
        let diff = target - num

        if (encountered.has(diff)) {
            return [index, encountered.get(diff)]
        }

        encountered.set(num, index)
    }
}

function assertEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1]
}

const tests = [
    {
        name: 'Test one',
        execute: () => {
            const nums = [2, 7, 11, 15]
            const result = twoSum(nums, 9)
            return assertEquals(result, [0, 1]) || assertEquals(result, [1, 0])
        }
    },
    {
        name: 'Test two',
        execute: () => {
            const nums = [3, 2, 4]
            const result = twoSum(nums, 6)
            return assertEquals(result, [1, 2]) || assertEquals(result, [2, 1])
        }
    },
    {
        name: 'Test three',
        execute: () => {
            const nums = [3, 3]
            const result = twoSum(nums, 6)
            return assertEquals(result, [0, 1]) || assertEquals(result, [1, 0])
        }
    }
]

function runTests() {
    const passed = []
    const failed = []

    tests.forEach(test => {
        test.execute() ? passed.push(test.name) : failed.push(test.name)
    })

    passed.forEach(p => console.log(p + ' ✓'))
    failed.forEach(f => console.error(f + ' ✖'))
}

runTests()