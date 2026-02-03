import { twoSum } from './two-sum-ii'

test('All positive values', () => {
    const numbers = [2, 7, 11, 15]
    const result = twoSum(numbers, 9)
    assert.deepEqual(result, [1, 2])
})

test('Some negative values', () => {
    const numbers = [-2, -1, 0]
    const result = twoSum(numbers, -1)
    assert.deepEqual(result, [2, 3])
})

test('All negative values', () => {
    const numbers = [-3, -2, -1]
    const result = twoSum(numbers, -3)
    assert.deepEqual(result, [2, 3])
})

test('Returns undefined for invalid input (not matching problem constraints)', () => {
    const numbers = [-2, -1, 0]
    const result = twoSum(numbers, -4)
    assert.isUndefined(result)
})
