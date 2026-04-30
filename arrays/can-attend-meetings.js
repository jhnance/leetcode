/**
 * Write a function to check if a person can attend all the meetings scheduled
 * without any time conflicts.
 *
 * Given an array `meetings`, where each element is [start, end], determine if
 * there are any overlapping meetings. Return true if there are none; false otherwise.
 *
 * Meetings that end and start at the same time do not conflict.
 * E.g.: [[5, 10], [10, 15]] do not conflict, and you can attend both.
 */

const START = 0
const END = 1
export function canAttendMeetings(meetings) {
    if (meetings.length <= 1) return true

    const sortedMeetings = meetings
        .map((m) => [...m])
        .sort((a, b) => a.at(START) - b.at(START))

    for (let i = 1; i < sortedMeetings.length; i++) {
        const prev = sortedMeetings.at(i - 1)
        const curr = sortedMeetings.at(i)

        if (curr.at(START) < prev.at(END)) {
            return false
        }
    }

    return true
}
