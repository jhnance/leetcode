import { findMin } from './find-minimum-in-rotated-sorted-array'

test('Correctly identifies the minimum in the first position', () => {
    expect(findMin([1, 2, 3, 4, 5])).toBe(1)
})

test('Correctly identifies the minimum somewhere in the middle', () => {
    expect(findMin([5, 1, 2, 3, 4])).toBe(1)
})

test('Correctly identifies the minimum at the end', () => {
    expect(findMin([2, 3, 4, 5, 1])).toBe(1)
})
