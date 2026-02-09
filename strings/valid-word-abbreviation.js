/**
 * Difficulty: easy
 * Leetcode link: https://leetcode.com/problems/valid-word-abbreviation
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
export function validWordAbbreviation(word, abbr) {
    if (abbr.length > word.length) return false

    let wordIndex = 0
    let abbrIndex = 0

    while (wordIndex <= word.length && abbrIndex <= abbr.length) {
        if (!isDigit(abbr[abbrIndex])) {
            if (word[wordIndex++] !== abbr[abbrIndex++]) return false
            else continue
        }

        if (abbr[abbrIndex] === '0') return false

        let endIndex = abbrIndex + 1
        while (endIndex < abbr.length && isDigit(abbr[endIndex])) {
            endIndex++
        }
        let skipCount = Number(abbr.substring(abbrIndex, endIndex))

        if (skipCount > word.substring(wordIndex).length) return false

        wordIndex += skipCount
        abbrIndex = endIndex
    }

    return true
}

function isDigit(c) {
    return /\d/.test(c)
}
