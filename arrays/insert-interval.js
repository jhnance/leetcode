/**
 * Given a sorted list of non-overlapping `intervals` and an interval `newInterval`,
 * write a function to insert `newInterval` into that list, ensuring it remains sorted
 * based on the intervals' start times.
 */

const START = 0
const END = 1

export function insertInterval(intervals, newInterval) {
    const merged = []
    let i = 0
    const n = intervals.length
    const toInsert = [...newInterval]

    // insert intervals as long as they don't conflict with the new one
    while (i < n && intervals[i][END] < toInsert[START]) {
        merged.push(intervals[i])
        i++
    }

    /**
     * We break out of the first loop as soon as we encounter the first interval
     * that conflicts with the newInterval.
     *
     * We don't need to combine anything to the left of i, because we already know
     * that everything prior to intervals[i] ends both before intervals[i] and newInterval,
     * so there's nothing to merge.
     *
     * We only need to look forward, and expand newInterval until its end does not
     * conflict with the next interval in our original list.
     */
    while (i < n && intervals[i][START] <= toInsert[END]) {
        toInsert[START] = Math.min(intervals[i][START], toInsert[START])
        toInsert[END] = Math.max(intervals[i][END], toInsert[END])
        i++
    }
    merged.push(toInsert)

    /**
     * All that's left to do is push the remaining intervals, because we know
     * they can't possibly conflict with the merged `newInterval`.
     */
    for (i; i < n; i++) {
        merged.push(intervals[i])
    }

    return merged
}

/**
 * This is the naive approach. It just treats this as one large, regular merge overlapping
 * intervals operation after inserting the new interval and re-sorting.
 *
 * There's a faster way above.
 */
function _insertInterval(intervals, newInterval) {
    const sortedIntervals = [...intervals, newInterval]
        .map((i) => [...i])
        .sort((a, b) => a.at(START) - b.at(START))

    const merged = [sortedIntervals.at(0)]
    let prev = merged.at(0)

    for (let i = 1; i < sortedIntervals.length; i++) {
        const curr = sortedIntervals.at(i)

        if (curr.at(START) > prev.at(END)) {
            prev = curr
            merged.push(curr)
        } else {
            prev[END] = Math.max(prev.at(END), curr.at(END))
        }
    }

    return merged
}
