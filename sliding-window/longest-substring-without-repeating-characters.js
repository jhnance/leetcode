function longestSubstringWithoutRepeat(s) {
    const visited = {}

    let start = 0
    let end = 0
    let max = 0
    while (end < s.length) {
        const char = s[end]
        visited[char] = (visited[char] || 0) + 1

        while (visited[char] > 1 && start <= end) {
            visited[char]--
            start++
        }

        max = Math.max(end - start + 1, max)
        end++
    }

    return max
}

/**
 * This is slightly faster because we jump straight to the next valid
 * start index, instead of using an inner while loop to iterate to it.
 */
function fasterAlternative(s) {
    const charToNextIndex = {}

    let max = 0
    let start = 0
    for (let end = 0; end < s.length; end++) {
        /**
         * This if DOES NOT check for duplication!
         */
        if (charToNextIndex[s[end]]) {
            /**
             * The duplication is handled by the Math.max(), actually.
             *
             * If s[end] is a duplicate, then start will be before it and
             * we can send start to the next index after the original
             * occurrence of s[end].
             *
             * If s[end] is not a duplicate, it will be behind start,
             * and start will not move. Window doesn't shrink because it doesn't
             * need to!
             */
            start = Math.max(start, charToNextIndex[s[end]])
        }

        /**
         * Then here we update the next index mapping.
         * This will overwrite, of course, but that's fine, because we only care
         * about moving targets; we don't want to persist the old occurrences, because
         * they can't possibly lead to valid windows.
         */
        charToNextIndex[s[end]] = end + 1
        max = Math.max(max, end - start + 1)
    }

    return max
}
