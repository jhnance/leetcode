import { mergeIntervals } from './merge-overlapping-intervals'

test('merges overlapping intervals', () => {
    const intervalSets = [
        // unsorted inputs
        {
            intervals: [
                [
                    { startTime: 8, endTime: 19, name: 'a' },
                    { startTime: 1, endTime: 4, name: 'a' },
                ],
                [
                    { startTime: 25, endTime: 29, name: 'b' },
                    { startTime: 6, endTime: 8, name: 'b' },
                    { startTime: 0, endTime: 2, name: 'b' },
                    { startTime: 21, endTime: 23, name: 'b' },
                    { startTime: 11, endTime: 15, name: 'b' },
                ],
            ],
            expected: [
                { startTime: 0, endTime: 4 },
                { startTime: 6, endTime: 8 },
                { startTime: 8, endTime: 19 },
                { startTime: 21, endTime: 23 },
                { startTime: 25, endTime: 29 },
            ],
        },
        // basic overlaps
        {
            intervals: [
                [
                    { startTime: 1, endTime: 4, name: 'a' },
                    { startTime: 8, endTime: 19, name: 'a' },
                ],
                [
                    { startTime: 0, endTime: 2, name: 'b' },
                    { startTime: 6, endTime: 8, name: 'b' },
                    { startTime: 11, endTime: 15, name: 'b' },
                    { startTime: 21, endTime: 23, name: 'b' },
                    { startTime: 25, endTime: 29, name: 'b' },
                ],
            ],
            expected: [
                { startTime: 0, endTime: 4 },
                { startTime: 6, endTime: 8 },
                { startTime: 8, endTime: 19 },
                { startTime: 21, endTime: 23 },
                { startTime: 25, endTime: 29 },
            ],
        },

        // first has only one interval
        {
            intervals: [
                [{ startTime: 1, endTime: 4, name: 'a' }],
                [
                    { startTime: 0, endTime: 2, name: 'b' },
                    { startTime: 6, endTime: 8, name: 'b' },
                    { startTime: 11, endTime: 15, name: 'b' },
                    { startTime: 21, endTime: 23, name: 'b' },
                    { startTime: 25, endTime: 29, name: 'b' },
                ],
            ],
            expected: [
                { startTime: 0, endTime: 4 },
                { startTime: 6, endTime: 8 },
                { startTime: 11, endTime: 15 },
                { startTime: 21, endTime: 23 },
                { startTime: 25, endTime: 29 },
            ],
        },

        // second has only one interval
        {
            intervals: [
                [
                    { startTime: 0, endTime: 2, name: 'a' },
                    { startTime: 6, endTime: 8, name: 'a' },
                    { startTime: 11, endTime: 15, name: 'a' },
                    { startTime: 21, endTime: 23, name: 'a' },
                    { startTime: 25, endTime: 29, name: 'a' },
                ],

                [{ startTime: 1, endTime: 4, name: 'b' }],
            ],
            expected: [
                { startTime: 0, endTime: 4 },
                { startTime: 6, endTime: 8 },
                { startTime: 11, endTime: 15 },
                { startTime: 21, endTime: 23 },
                { startTime: 25, endTime: 29 },
            ],
        },

        // first interval fully subsumes the second
        {
            intervals: [
                [{ startTime: 0, endTime: 10, name: 'a' }],
                [{ startTime: 1, endTime: 5, name: 'b' }],
            ],
            expected: [{ startTime: 0, endTime: 10 }],
        },

        // second interval fully subsumes the first
        {
            intervals: [
                [{ startTime: 1, endTime: 5, name: 'a' }],
                [{ startTime: 0, endTime: 10, name: 'b' }],
            ],
            expected: [{ startTime: 0, endTime: 10 }],
        },

        // identical intervals
        {
            intervals: [
                [
                    { startTime: 0, endTime: 5, name: 'a' },
                    { startTime: 6, endTime: 10, name: 'a' },
                    { startTime: 11, endTime: 15, name: 'a' },
                ],
                [
                    { startTime: 0, endTime: 5, name: 'b' },
                    { startTime: 6, endTime: 10, name: 'b' },
                    { startTime: 11, endTime: 15, name: 'b' },
                ],
            ],
            expected: [
                { startTime: 0, endTime: 5 },
                { startTime: 6, endTime: 10 },
                { startTime: 11, endTime: 15 },
            ],
        },

        // all of Machine A's intervals come before B's
        {
            intervals: [
                [
                    { startTime: 0, endTime: 5, name: 'a' },
                    { startTime: 11, endTime: 15, name: 'a' },
                ],
                [{ startTime: 16, endTime: 17, name: 'b' }],
            ],
            expected: [
                { startTime: 0, endTime: 5 },
                { startTime: 11, endTime: 15 },
                { startTime: 16, endTime: 17 },
            ],
        },

        // all of Machine B's intervals come before A's
        {
            intervals: [
                [{ startTime: 16, endTime: 17, name: 'b' }],
                [
                    { startTime: 0, endTime: 5, name: 'a' },
                    { startTime: 11, endTime: 15, name: 'a' },
                ],
            ],
            expected: [
                { startTime: 0, endTime: 5 },
                { startTime: 11, endTime: 15 },
                { startTime: 16, endTime: 17 },
            ],
        },

        // chain merges, across machines
        {
            intervals: [
                [
                    { startTime: 0, endTime: 3, name: 'a' },
                    { startTime: 4, endTime: 8, name: 'a' },
                ],
                [{ startTime: 2, endTime: 5, name: 'b' }],
            ],
            expected: [{ startTime: 0, endTime: 8 }],
        },

        // chain merges, overlapping within a single machine's list
        // this one seems unlikely, but it will still be handled
        {
            intervals: [
                [{ startTime: 0, endTime: 3, name: 'a' }],
                [
                    { startTime: 2, endTime: 5, name: 'b' },
                    { startTime: 4, endTime: 8, name: 'b' },
                ],
            ],
            expected: [{ startTime: 0, endTime: 8 }],
        },
    ]

    for (const { intervals, expected } of intervalSets) {
        const [a, b] = intervals
        const actual = mergeIntervals(a, b)

        expect(
            actual.map(({ startTime, endTime }) => ({ startTime, endTime })),
        ).toEqual(expected)
    }
})

test('handles empty lists', () => {
    const intervalSets = [
        // first list is empty
        {
            intervals: [[], [{ startTime: 0, endTime: 2, name: 'b' }]],
            expected: [{ startTime: 0, endTime: 2 }],
        },
        // second list is empty
        {
            intervals: [[{ startTime: 0, endTime: 2, name: 'a' }], []],
            expected: [{ startTime: 0, endTime: 2 }],
        },
        // both lists are empty
        {
            intervals: [[], []],
            expected: [],
        },
    ]

    for (const { intervals, expected } of intervalSets) {
        const [a, b] = intervals
        const actual = mergeIntervals(a, b)
        expect(
            actual.map(({ startTime, endTime }) => ({ startTime, endTime })),
        ).toEqual(expected)
    }
})

/**
 * This test assumes the following intervals do not overlap, despite A's endTime
 * matching B's startTime:
 *
 * Machine A: {startTime: 0, endTime: 1}
 * Machine B: {startTime: 1, endTime: 2}
 *
 * There's a note in the implementation to the same effect; it's a simple change
 * if we want to accommodate a merge in this instance.
 * */
test('does not merge non-overlapping intervals', () => {
    const intervalSets = [
        // no overlap of one machine's startTime with another's endTime
        {
            intervals: [
                [
                    { startTime: 0, endTime: 1, name: 'a' },
                    { startTime: 2, endTime: 3, name: 'a' },
                ],
                [
                    { startTime: 4, endTime: 5, name: 'b' },
                    { startTime: 6, endTime: 7, name: 'b' },
                ],
            ],
            expected: [
                { startTime: 0, endTime: 1 },
                { startTime: 2, endTime: 3 },
                { startTime: 4, endTime: 5 },
                { startTime: 6, endTime: 7 },
            ],
        },
        // startTime and endTime overlap across machines
        {
            intervals: [
                [
                    { startTime: 0, endTime: 1, name: 'a' },
                    { startTime: 1, endTime: 2, name: 'a' },
                ],
                [
                    { startTime: 2, endTime: 3, name: 'b' },
                    { startTime: 3, endTime: 4, name: 'b' },
                ],
            ],
            expected: [
                { startTime: 0, endTime: 1 },
                { startTime: 1, endTime: 2 },
                { startTime: 2, endTime: 3 },
                { startTime: 3, endTime: 4 },
            ],
        },
    ]

    for (const { intervals, expected } of intervalSets) {
        const [a, b] = intervals
        const actual = mergeIntervals(a, b)
        expect(
            actual.map(({ startTime, endTime }) => ({ startTime, endTime })),
        ).toEqual(expected)
    }
})

test('does not mutate the inputs', () => {
    const originalMachineAList = [
        { startTime: 8, endTime: 19, name: 'a' },
        { startTime: 1, endTime: 4, name: 'a' },
    ]
    const originalMachineBList = [
        { startTime: 25, endTime: 29, name: 'b' },
        { startTime: 6, endTime: 8, name: 'b' },
        { startTime: 0, endTime: 2, name: 'b' },
        { startTime: 21, endTime: 23, name: 'b' },
        { startTime: 11, endTime: 15, name: 'b' },
    ]

    const expectedA = structuredClone(originalMachineAList)
    const expectedB = structuredClone(originalMachineBList)

    mergeIntervals(originalMachineAList, originalMachineBList)

    expect(originalMachineAList).toEqual(expectedA)
    expect(originalMachineBList).toEqual(expectedB)
})
