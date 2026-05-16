function decodeString(s) {
    const stack = []
    let currString = ''
    let currNumber = 0

    for (const char of s) {
        if (char === '[') {
            /**
             * These pieces in this specific order (same order as the original
             * string) dictate how we treat the next subsequence (whatever follows
             * between the next pair of square brackets). It will always be
             * the currString here + whatever string inside the brackets repeated
             * currNumber times.
             *
             * We reset here because we've preserved that information on the stack
             * for the current subsequence, and we need these variables defaulted
             * for the next subsequence.
             */
            stack.push(currString)
            stack.push(currNumber)
            currString = ''
            currNumber = 0
        } else if (char === ']') {
            /**
             * Here we have reached the end of a sequence, so it's time to
             * build up the next part of our string.
             *
             * The first thing on the stack will be the number that came before
             * the opening square bracket. This tells us how many times to repeat
             * our currString (which was built up from the chars inside the brackets).
             *
             * Then, we simply append that to whatever the prevString was, if
             * anything (it defaults to '').
             */
            const num = stack.pop()
            const prev = stack.pop()
            currString = prev + currString.repeat(num)
        } else if (/\d/.test(char)) {
            /**
             * This lets us build up multi-digit numbers across multiple iterations.
             * For example, if the string is '12[...]', then the first iteration
             * we set currNumber to 1; the second iteration, we set it to
             * (1 * 10) + 2, which gives us 12.
             */
            currNumber = currNumber * 10 + parseInt(char)
        } else {
            currString += char
        }
    }
    return currString
}
