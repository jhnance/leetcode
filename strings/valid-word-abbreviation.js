/**
 * Difficulty: easy
 * Leetcode link:https://leetcode.com/problems/valid-word-abbreviation
 *
 * Description
 * -----------
 *
 * A string can be abbreviated by replacing any number of non-adjacent, non-empty
 * substrings with their lengths. The lengths should not have leading zeros.
 *
 * For example, a string such as "substitution" could be abbreviated as (but not
 * limited to):
 *
 * * "s10n" ("s ubstitutio n")
 * * "sub4u4" ("sub stit u tion")
 * * "12" ("substitution")
 * * "su3i1u2on" ("su bst i t u ti on")
 * * "substitution" (no substrings replaced)
 *
 * The following are not valid abbreviations:
 *
 * * "s55n" ("s ubsti tutio n", the replaced substrings are adjacent)
 * * "s010n" (has leading zeros)
 * * "s0ubstitution" (replaces an empty substring)
 *
 * Given a string `word` and an abbreviation `abbr`, return whether the string
 * matches the given abbreviation.
 *
 * A substring is a contiguous non-empty sequence of characters within a string.
 *
 * Examples
 * ________
 *
 * Input: `word` = "internationalization", `abbr` = "i12iz4n"
 * Output: true ("i nternational iz atio n")
 *
 * Input: `word` = "apple", `abbr` = "a2e"
 * Output: false (there are 3 characters between the 'a' and 'e')
 */

/**
 * Initial thoughts
 * ----------------
 *
 * It seems like we can do this in one pass.
 *
 * Need two pointers:
 * 1. keep track of which character we're on in the `word`
 * 2. keep track of where we are in the `abbr`
 *
 * When we encounter a digit in the `abbr`, we start parsing that number for the
 * abbreviation length. We then attempt to increment the wordIndex by that number,
 * so long as it would not put us out of bounds.
 *
 * The next loop iteration, we're presumably on a non-numerical character in each
 * of the inputs, and we can check for equality.
 *
 */
export function validWordAbbreviation(word, abbr) {
    if (abbr.length > word.length) return false

    let wordIndex = 0
    let abbrIndex = 0
    while (wordIndex <= word.length && abbrIndex <= abbr.length) {
        if (isDigit(abbr[abbrIndex])) {
            if (abbr[abbrIndex] === '0') return false

            let startIndex = abbrIndex
            while (isDigit(abbr[abbrIndex])) {
                abbrIndex++
            }

            const abbreviationLength = parseAbbreviationLength(
                abbr,
                startIndex,
                abbrIndex,
            )

            if (abbreviationLength > word.substring(wordIndex).length) {
                return false
            }

            wordIndex += abbreviationLength
        } else {
            if (word[wordIndex] !== abbr[abbrIndex]) {
                return false
            } else {
                wordIndex++
                abbrIndex++
            }
        }
    }

    return true
}

function parseAbbreviationLength(string, start, end) {
    return Number(string.substring(start, end))
}

function isDigit(char) {
    return /\d/.test(char)
}
