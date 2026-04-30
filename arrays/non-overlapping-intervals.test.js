import { nonOverlappingIntervals } from './non-overlapping-intervals'

test('removes a single offending interval', () => {
    expect(
        nonOverlappingIntervals([
            [0, 2],
            [1, 3],
        ]),
    ).toBe(1)
})

test('removes multiple offending intervals', () => {
    expect(
        nonOverlappingIntervals([
            [0, 2],
            [1, 4],
            [3, 5],
            [6, 8],
            [7, 9],
        ]),
    ).toBe(2)
})

test('removes the fewest possible offending intervals', () => {
    /**
     * Here, [1,4] and [3,5] are both overlapping if you look at the schedule
     * with all meetings laid out together. We should still only remove 1 of them.
     */
    expect(
        nonOverlappingIntervals([
            [0, 2],
            [1, 4],
            [3, 5],
            [6, 8],
        ]),
    ).toBe(1)
})

test('handles unsorted input', () => {
    expect(
        nonOverlappingIntervals([
            [1, 4],
            [6, 8],
            [0, 2],
            [3, 5],
        ]),
    ).toBe(1)
})

test('handles the trivial cases (0 and 1 intervals in the input)', () => {
    expect(nonOverlappingIntervals([])).toBe(0)
    expect(nonOverlappingIntervals([[1, 2]])).toBe(0)
})
