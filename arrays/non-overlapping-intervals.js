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
 *
 * Note: the other way to think about this problem is to identify the maximum number
 * of non-overlapping intervals. The approach doesn't change, just what you return. The maximum number
 * would be the original length - our count.
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

/**
 * This is an alternative approach to the above. Given the framing of the problem (count minimum removals) I find
 * the above approach easier to think through. But this makes sense too; you just flip it on its head to identify
 * the actual pattern at play here, which is what the name of the functions suggest anyway.
 *
 * Differences:
 * - Starts the count at 1 and counts the opposite of ours: here we're not tracking number of removals, we're
 *   counting the number of non-overlapping intervals. By definition, nothing overlaps with the first, since we sorted
 *   by end time and nothing ends before it.
 */
export function _nonOverlappingIntervals(intervals) {
    if (intervals.length === 0) return 0

    const sortedIntervals = intervals
        .map((i) => [...i])
        .sort((a, b) => a.at(END) - b.at(END))

    let prevEnd = sortedIntervals.at(START).at(END)
    let count = 1

    for (let i = 1; i < sortedIntervals.length; i++) {
        const curr = sortedIntervals.at(i)
        if (curr.at(START) >= prevEnd) {
            count++
            prevEnd = curr.at(END)
        }
    }

    return sortedIntervals.length - count
}
