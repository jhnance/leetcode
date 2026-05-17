/**
 * Assumptions
 * - You cannot have a zero-length interval
 * - Either or both of the input arrays can be empty
 *
 * Constraints:
 * - If previous endTime is 1 and current startTime is 1, do not merge
 *
 * Extra notes:
 * - While it would seem strange to have a single machine's list contain overlapping intervals (meaning the machine
 *   was both on and off at the same time), this algorithm will still handle that merge. I don't know if this specifically
 *   is part of the "chain merge" case that we discussed in the interview. It will handle this kind of chain or the one
 *   that seems more likely, where you're chaining events across the two machines.
 */
export function mergeIntervals(a, b) {
    const sortedIntervals = [...a, ...b]
        .map((interval) => ({ ...interval }))
        .sort((a, b) => a.startTime - b.startTime)
    const merged = []

    for (const current of sortedIntervals) {
        const previous = merged.at(-1)

        /**
         * If I remember correctly, one of the clarifications made in the interview
         * was that we should not treat two intervals such as these as overlapping:
         * Machine A: {startTime: 0, endTime: 1}
         * Machine B: {startTime: 1, endTime: 2}
         *
         * Although A's endTime is equal to B's startTime, we want to treat them
         * as separate.
         *
         * If that's not the case then we just change our check below to:
         * current.startTime > previous.endTime.
         */
        if (!previous || current.startTime >= previous.endTime) {
            merged.push(current)
        } else {
            previous.endTime = Math.max(previous.endTime, current.endTime)
        }
    }

    return merged
}
