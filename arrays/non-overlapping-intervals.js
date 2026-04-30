/**
 * Write a function to return the minimum number of intervals that must be removed from a given array `intervals`, where
 * `intervals[i]` consists of a starting point `starti` and an ending point `endi`, to ensure that the remaining intervals
 * do not overlap.
 *
 * Example
 * -------
 * Input: `intervals` = [[1, 3], [5, 8], [4, 10], [11, 13]]
 * Output: 1
 * Explanation: Removing the interval [4, 10] leaves all others non-overlapping.
 */

const START = 0
const END = 1
export function nonOverlappingIntervals(intervals) {
    if (intervals.length <= 1) return 0

    const sortedIntervals = intervals
        .map((i) => [...i])
        .sort((a, b) => a.at(END) - b.at(END))

    let count = 0

    let prevEnd = sortedIntervals.at(START).at(END)
    for (let i = 1; i < sortedIntervals.length; i++) {
        const curr = sortedIntervals.at(i)

        if (curr.at(START) < prevEnd) {
            count++
        } else {
            prevEnd = curr.at(END)
        }
    }

    return count
}
