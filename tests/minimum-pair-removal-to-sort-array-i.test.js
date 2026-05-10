import { minimumPairRemoval } from '../arrays/minimum-pair-removal-to-sort-array-i'

test('Returns the correct number of removals for an input array of even length', () => {
    expect(minimumPairRemoval([5, 2, 3, 1])).toBe(2)
})

test('Returns the correct number of removals for an input array of odd length', () => {
    expect(minimumPairRemoval([5, 2, 4])).toBe(1)
})

test('Returns the correct number of removals for an input array containing negative numbers', () => {
    expect(minimumPairRemoval([-7, 7, -4, 5, 9, -9])).toBe(5)
})

test('Returns 0 removals for an input array that is already sorted', () => {
    expect(minimumPairRemoval([1, 2, 3])).toBe(0)
})

test('Returns the correct number of removals for an input array that is entirely in decreasing order', () => {
    expect(minimumPairRemoval([9, 5, 3, 1])).toBe(2)
})
