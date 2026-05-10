import { largestIsland } from './making-a-large-island'

test('Returns 1 for an empty grid', () => {
    expect(
        largestIsland([
            [0, 0],
            [0, 0],
        ]),
    ).toBe(1)
})

test('Returns the area of the largest possible island', () => {
    expect(
        largestIsland([
            [0, 0, 1],
            [1, 1, 1],
        ]),
    ).toBe(5)

    expect(
        largestIsland([
            [1, 0, 1],
            [1, 1, 1],
        ]),
    ).toBe(6)

    expect(
        largestIsland([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
        ]),
    ).toBe(2)

    expect(
        largestIsland([
            [0, 0, 1, 1, 1],
            [0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 0, 0],
            [1, 1, 1, 0, 0],
        ]),
    ).toBe(13)
})
