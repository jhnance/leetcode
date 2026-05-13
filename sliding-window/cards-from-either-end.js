/**
 * This way of thinking about the problem is nearly identical to the other;
 * the only real difference is where we're performing the total - unpicked
 * calculation.
 *
 * We can either keep track of a rolling minimum value of all unpicked cards
 * and then subtract it from the total at the end, or we can do this calculation
 * each time and keep track of a maximum value of picked cards.
 */
function minimizeUnpicked(cards, k) {
    const n = cards.length
    const totalScore = cards.reduce((sum, current) => sum + current, 0)
    let windowSize = n - k

    if (windowSize === 0) return totalScore

    /**
     * The total score - the values of the cards we don't pick is equivalent
     * to the value of the cards we do pick. This is just an inversion of the
     * typical sliding window pattern, where you're keeping track of the "picked."
     */
    let minUnpickedScore = Infinity
    let windowSum = 0
    let start = 0
    for (let end = 0; end < n; end++) {
        windowSum += cards[end]

        if (end - start + 1 === windowSize) {
            minUnpickedScore = Math.min(minUnpickedScore, windowSum)
            windowSum -= cards[start]
            start++
        }
    }

    /**
     * The score of the cards we picked is equivalent to the total score
     * of all the cards minus the ones we didn't pick. Minimizing the ones
     * we didn't pick gives the maximum of the picks.
     */
    return totalScore - minUnpickedScore
}

/**
 * An alternative approach is to compute the total - unpicked as we go
 * and maximize that. Very subtly different; which is easier to think about
 * might depend on the day or the person.
 */
function maximizePicked(cards, k) {
    const n = cards.length
    const total = cards.reduce((sum, current) => sum + current, 0)
    let windowSize = n - k

    if (windowSize === 0) return total

    let unpickedSum = 0
    let maxPoints = 0
    let start = 0
    for (let end = 0; end < n; end++) {
        unpickedSum += cards[end]

        if (end - start + 1 === windowSize) {
            maxPoints = Math.max(total - unpickedSum, maxPoints)
            unpickedSum -= cards[start]
            start++
        }
    }

    return maxPoints
}
