import { minTimeToVisitAllPoints } from '../arrays/minimum-time-visiting-all-points'

test('Visit multiple points in both the positive and negative directions', () => {
    expect(
        minTimeToVisitAllPoints([
            [1, 1],
            [3, 4],
            [-1, 0],
        ]),
    ).toBe(7)
})

test('Visit points only in the positive direction', () => {
    expect(
        minTimeToVisitAllPoints([
            [0, 0],
            [1, 1],
            [2, 2],
        ]),
    ).toBe(2)
})

test('Visit points only in the negative direction', () => {
    expect(
        minTimeToVisitAllPoints([
            [0, 0],
            [-1, -1],
            [-2, -2],
        ]),
    ).toBe(2)
})

test('The input only has one point defined', () => {
    expect(minTimeToVisitAllPoints([[0, 0]])).toBe(0)
})

test('The input has no points defined', () => {
    expect(minTimeToVisitAllPoints()).toBe(0)
})
