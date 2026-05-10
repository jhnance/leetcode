import { majorityElement } from './majority-element.js'

test('Returns the correct majority element', () => {
    expect(majorityElement([1, 2, 2, 2, 1])).toBe(2)
    expect(majorityElement([1, 2, 2, 2, 1, 1, 1, 1, 1])).toBe(1)
    expect(majorityElement([1, 2, 3, 4, 5, 6, 6])).toBe(6)
    expect(majorityElement([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2])).toBe(
        1,
    )
    expect(majorityElement([0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(1)
    expect(
        majorityElement([
            0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        ]),
    ).toBe(-1)
})
