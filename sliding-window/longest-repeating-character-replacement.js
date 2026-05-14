/**
 * The crux of this solution is the conditional in the loop:
 * if (end - start + 1 - maxFrequency > k) is doing all the work here.
 *
 * end - start + 1 is the length of the substring we're considering.
 * If we subtract from the substring the maximum frequency character, that
 * should give us the number of replacements we can still make.
 *
 * But, what if we don't have our most frequent character in this string?
 * It doesn't matter! Because we know that our maxFrequency gives us the longest
 * substring before making replacements, and the goal is to find the longest substring.
 *
 * Any lower frequency isn't worth considering again once we reach each maxFrequency
 * threshold.
 */
function characterReplacement(s, k) {
    let visited = {}
    let maxFrequency = 0
    let longest = 0

    for (let start = 0, end = 0; end < s.length; end++) {
        const char = s[end]
        const count = (visited[char] || 0) + 1

        visited[char] = count
        maxFrequency = Math.max(count, maxFrequency)

        if (end - start + 1 - maxFrequency > k) {
            visited[s[start]]--
            start++
        }

        longest = Math.max(longest, end - start + 1)
    }

    return longest
}
