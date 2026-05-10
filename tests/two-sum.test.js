import { twoSum } from './two-sum'

test('All positive values, sorted', () => {
    const result = twoSum([2, 7, 11, 15], 9)
    assert.sameMembers(result, [0, 1])
})

test('All negative values, sorted', () => {
    const result = twoSum([-4, -3, -2, -1], -5)
    assert.sameMembers(result, [1, 2])
})

test('All positive values, unsorted', () => {
    const result = twoSum([3, 2, 4], 6)
    assert.sameMembers(result, [1, 2])
})

test('All negative values, unsorted', () => {
    const result = twoSum([-1, -3, -2, -4], -5)
    assert.sameMembers(result, [1, 2])
})

test('Identical values, positive', () => {
    const result = twoSum([3, 3], 6)
    assert.sameMembers(result, [0, 1])
})

test('Identical values, negative', () => {
    const result = twoSum([-3, -3], -6)
    assert.sameMembers(result, [0, 1])
})

test('Returns undefined for invalid input (not matching problem constraints)', () => {
    assert.isUndefined(twoSum([2, 9], 10))
})
