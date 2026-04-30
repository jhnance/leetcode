/**
 * Write a function to find the common free time for all employees from a list
 * called `schedule`. Each employee's schedule is represented by a list of
 * non-overlapping intervals sorted by start times. The function should return
 * a list of finite, non-zero length intervals where all employees are free,
 * also sorted in order.
 *
 * Thoughts
 * --------
 *
 * This is really just an extension of the merge overlapping intervals problem.
 * The only other tweak is that we have to flatten the original list of lists,
 * so we can get down to one list of intervals to sort, merge, and find gaps in.
 */
const START = 0
const END = 1
export function employeeFreeTime(schedule) {
    const sortedSchedule = schedule
        .flatMap((v) => v.map(([start, end]) => [start, end]))
        .sort((a, b) => a[START] - b[START])

    const merged = [sortedSchedule[0]]
    let prev = merged[0]

    for (let i = 1; i < sortedSchedule.length; i++) {
        const curr = sortedSchedule[i]
        if (curr[START] > prev[END]) {
            merged.push(curr)
            prev = curr
        } else {
            prev[END] = Math.max(prev[END], curr[END])
        }
    }

    const freeSlots = []
    for (const [index, interval] of merged.entries()) {
        const [_, end] = interval
        if (index < merged.length - 1 && end < merged[index + 1][START]) {
            freeSlots.push([end, merged[index + 1][START]])
        }
    }

    return freeSlots
}
