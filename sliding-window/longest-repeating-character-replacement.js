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
