import { check } from '../arrays/check-if-array-is-sorted-and-rotated'

test('Returns true for a rotated, sorted array', () => {
    expect(check([5, 1, 2, 3, 4])).toBe(true)
    expect(check([4, 5, 1, 2, 3])).toBe(true)
    expect(check([3, 4, 5, 1, 2])).toBe(true)
    expect(check([2, 3, 4, 5, 1])).toBe(true)
    expect(check([6, 10, 6])).toBe(true)
})

test('Returns true for a sorted array that has been either rotated `length` times or rotated 0 times', () => {
    expect(check([1, 2, 2, 4])).toBe(true)
})

test('Returns false for a rotated, unsorted array', () => {
    expect(check([5, 1, 2, 1, 4])).toBe(false)
    expect(check([4, 5, 1, 2, 1])).toBe(false)
    expect(check([1, 4, 5, 1, 2])).toBe(false)
    expect(check([2, 1, 4, 5, 1])).toBe(false)
})
test('Returns false for an unsorted array that has been either rotated `length` times or rotated 0 times', () => {
    expect(check([1, 2, 1, 2, 4])).toBe(false)
})
