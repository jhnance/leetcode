import { insertInterval } from '../arrays/insert-interval'

test('inserts interval at the beginning, no merging', () => {
    expect(
        insertInterval(
            [
                [2, 3],
                [4, 5],
            ],
            [0, 1],
        ),
    ).toEqual([
        [0, 1],
        [2, 3],
        [4, 5],
    ])
})

test('inserts interval in the middle, no merging', () => {
    expect(
        insertInterval(
            [
                [2, 3],
                [6, 7],
            ],
            [4, 5],
        ),
    ).toEqual([
        [2, 3],
        [4, 5],
        [6, 7],
    ])
})

test('inserts interval at the end', () => {
    expect(
        insertInterval(
            [
                [2, 3],
                [4, 5],
            ],
            [6, 7],
        ),
    ).toEqual([
        [2, 3],
        [4, 5],
        [6, 7],
    ])
})

test('correctly merges intervals after insertion', () => {
    // merges from the beginning
    expect(
        insertInterval(
            [
                [2, 3],
                [4, 5],
            ],
            [0, 2],
        ),
        'inserting into the beginning of the original list when there are merge opportunities',
    ).toEqual([
        [0, 3],
        [4, 5],
    ])

    // merges from the middle
    expect(
        insertInterval(
            [
                [2, 3],
                [4, 5],
                [7, 9],
                [10, 11],
            ],
            [4, 8],
        ),
        'inserting into the middle of the original list when there are merge opportunities',
    ).toEqual([
        [2, 3],
        [4, 9],
        [10, 11],
    ])
})

test('inserting a newInterval into an empty list of intervals returns a list containing only newInterval', () => {
    expect(insertInterval([], [1, 2])).toEqual([[1, 2]])
})
