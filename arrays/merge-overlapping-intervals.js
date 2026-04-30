const START = 0
const END = 1

export function mergeIntervals(a, b) {
    const sortedIntervals = [...a, ...b].sort(
        (a, b) => a.at(START) - b.at(START),
    )
    const merged = []

    for (const current of sortedIntervals) {
        const previous = merged.at(-1)

        if (!previous || current.at(START) >= previous.at(END)) {
            merged.push(current)
        } else {
            previous[END] = Math.max(previous.at(END), current.at(END))
        }
    }

    return merged
}
