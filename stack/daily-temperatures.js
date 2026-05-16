/**
 * Difficulty: medium
 * Leetcode link: https://leetcode.com/problems/daily-temperatures
 */
function dailyTemperatures(temps) {
    const days = temps.map((t) => 0)
    const hotterDays = []

    for (let i = 0; i < temps.length; i++) {
        while (hotterDays.length && temps.at(hotterDays.at(-1)) < temps.at(i)) {
            const prev = hotterDays.pop()
            days[prev] = i - prev
        }

        hotterDays.push(i)
    }

    return days
}
