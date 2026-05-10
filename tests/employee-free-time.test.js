import { employeeFreeTime } from '../arrays/employee-free-time'

test('correctly identifies gaps of free time in the schedule', () => {
    expect(
        employeeFreeTime([
            [
                [1, 2],
                [5, 6],
            ],
            [[1, 3]],
            [[4, 7]],
        ]),
        'one gap in the schedule',
    ).toEqual([[3, 4]])

    expect(
        employeeFreeTime([
            [
                [1, 3],
                [6, 7],
            ],
            [[2, 4]],
            [
                [2, 5],
                [8, 9],
            ],
        ]),
        'multiple gaps in the schedule',
    ).toEqual([
        [5, 6],
        [7, 8],
    ])

    expect(
        employeeFreeTime([[[1, 3]], [[7, 9]], [[4, 6]]]),
        'gaps between each entire sub-schedule',
    ).toEqual([
        [3, 4],
        [6, 7],
    ])
})

test('returns an empty list if we find no gaps in the schedule', () => {
    expect(
        employeeFreeTime([[[1, 4]], [[3, 5]], [[0, 2]]]),
        'a gap between only some of the schedules',
    ).toEqual([])

    expect(
        employeeFreeTime([[[1, 3]], [[2, 4]], [[3, 5]]]),
        'all three schedules overlap',
    ).toEqual([])
})
