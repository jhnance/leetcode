/**
 * Difficulty: hard
 * Leetcode link: https://leetcode.com/problems/longest-valid-parentheses/
 */
function longestValidParentheses(s) {
    /**
     * We seed with -1, because we might have a valid pair
     * right at the start of length 2.
     * '()...'
     *
     * If you don't have a valid string at the start, like ')...' then
     * we don't even try to calculate the new max anyway, and we just push
     * the current closing paren index.
     */
    let openers = [-1]
    let max = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') openers.push(i)
        else {
            /**
             * Every time we encounter a closing paren, we have a chance to close
             * a valid substring.
             *
             * Popping the most recent opening paren allows us to calculate
             * the length of the substring including it and the current closer.
             * If we didn't pop, our valid pairs would have lengths of 1; also,
             * subsequent calculations would use the wrong starting paren index
             * to calculate the length of their substrings.
             */
            openers.pop()

            if (openers.length) {
                max = Math.max(max, i - openers.at(-1))
            } else {
                /**
                 * Essentially acts as our -1 again, a sort of sentinel value.
                 * Anything before and including this index cannot be valid.
                 */
                openers.push(i)
            }
        }
    }

    return max
}
