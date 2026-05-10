import { canAttendMeetings } from '../arrays/can-attend-meetings'

test('contiguous meetings', () => {
    expect(
        canAttendMeetings([
            [0, 1],
            [1, 2],
            [3, 4],
        ]),
    ).toBe(true)
})

test('all increasing start times with gaps between', () => {
    expect(
        canAttendMeetings([
            [0, 1],
            [2, 3],
            [4, 5],
        ]),
    ).toBe(true)
})

test('just one meeting overlapping', () => {
    expect(
        canAttendMeetings([
            [0, 1],
            [0, 2],
            [2, 4],
        ]),
    ).toBe(false)
})

test('all meetings overlapping', () => {
    expect(
        canAttendMeetings([
            [0, 1],
            [0, 2],
            [0, 4],
        ]),
    ).toBe(false)
})

test('no meetings to attend', () => {
    expect(canAttendMeetings([])).toBe(true)
})

test('handles unsorted input', () => {
    expect(
        canAttendMeetings([
            [2, 3],
            [1, 3],
        ]),
    ).toBe(false)

    expect(
        canAttendMeetings([
            [2, 3],
            [0, 2],
        ]),
    ).toBe(true)
})
