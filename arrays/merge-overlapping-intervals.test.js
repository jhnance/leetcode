import { mergeIntervals } from './merge-overlapping-intervals'

test('merges overlapping intervals', () => {
    const intervalSets = [
        // first set
        {
            intervals: [
                [
                    [1, 4],
                    [8, 19],
                ],
                [
                    [0, 2],
                    [6, 8],
                    [11, 15],
                    [21, 23],
                    [25, 29],
                ],
            ],
            expected: [
                [0, 4],
                [6, 8],
                [8, 19],
                [21, 23],
                [25, 29],
            ],
        },

        // second set
        {
            intervals: [
                [
                    [0, 2],
                    [7, 11],
                ],
                [
                    [1, 5],
                    [6, 8],
                    [10, 12],
                ],
            ],
            expected: [
                [0, 5],
                [6, 12],
            ],
        },

        // third set, identical intervals
        {
            intervals: [
                [
                    [0, 5],
                    [6, 10],
                    [11, 15],
                ],
                [
                    [0, 5],
                    [6, 10],
                    [11, 15],
                ],
            ],
            expected: [
                [0, 5],
                [6, 10],
                [11, 15],
            ],
        },
    ]

    for (const { intervals, expected } of intervalSets) {
        const [a, b] = intervals
        const actual = mergeIntervals(a, b)

        expect(actual).toEqual(expected)
    }
})

test('handles empty lists', () => {
    const intervalSets = [
        // first set, empty list in first position
        {
            intervals: [[], [[0, 2]]],
            expected: [[0, 2]],
        },
        // second set, empty list in second position
        {
            intervals: [[[0, 2]], []],
            expected: [[0, 2]],
        },
    ]

    for (const { intervals, expected } of intervalSets) {
        const [a, b] = intervals
        const actual = mergeIntervals(a, b)
        expect(actual).toEqual(expected)
    }
})

test('does not merge non-overlapping intervals', () => {
    const intervalSets = [
        // first set, no startTime === previous endTime
        {
            intervals: [
                [
                    [0, 1],
                    [2, 3],
                ],
                [
                    [4, 5],
                    [6, 7],
                ],
            ],
            expected: [
                [0, 1],
                [2, 3],
                [4, 5],
                [6, 7],
            ],
        },
        // second set, startTime and endTime overlap
        {
            intervals: [
                [
                    [0, 1],
                    [1, 2],
                ],
                [
                    [2, 3],
                    [3, 4],
                ],
            ],
            expected: [
                [0, 1],
                [1, 2],
                [2, 3],
                [3, 4],
            ],
        },
    ]

    for (const { intervals, expected } of intervalSets) {
        const [a, b] = intervals
        const actual = mergeIntervals(a, b)
        expect(actual).toEqual(expected)
    }
})
