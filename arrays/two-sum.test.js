import { twoSum } from './two-sum'

test('Test one', () => {
    const result = twoSum([2, 7, 11, 15], 9)
    assert.sameMembers(result, [0, 1])
})

test('Test two', () => {
    const result = twoSum([3, 2, 4], 6)
    assert.sameMembers(result, [1, 2])
})

test('Test one', () => {
    const result = twoSum([3, 3], 6)
    assert.sameMembers(result, [0, 1])
})
