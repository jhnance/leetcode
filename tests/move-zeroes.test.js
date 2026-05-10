import { moveZeroes } from './move-zeroes'

test('Returns a new array with the zeroes at the end, where the non-zero values keep their original relative ordering', () => {
    expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0])
    expect(moveZeroes([0, 0, 0, 3, 12])).toEqual([3, 12, 0, 0, 0])
    expect(moveZeroes([1, 3, 12, 0, 0])).toEqual([1, 3, 12, 0, 0])
    expect(moveZeroes([1, 3, 12])).toEqual([1, 3, 12])
})
