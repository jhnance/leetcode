/**
 * Given an array of strings strings, group the anagrams together. You can return the answer in any order.
 *
 * Example 1:
 * Input: strings = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * Explanation:
 * There is no string in strings that can be rearranged to form "bat".
 * The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
 * The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
 *
 * Example 2:
 * Input: strings = [""]
 * Output: [[""]]
 *
 * Example 3:
 * Input: strings = ["a"]
 * Output: [["a"]]
 */
function groupAnagrams(strings) {
    const sets = new Map()

    for (const string of strings) {
        const sorted = [...string].sort().join('')
        if (sets.has(sorted)) {
            sets.get(sorted).push(string)
        } else {
            sets.set(sorted, [string])
        }
    }

    return sets.values()
}

function alternative(strings) {
    const sets = new Map()

    for (const string of strings) {
        const [getCharIndex, charCounts] = getLowerCaseCounts()
        for (const char of string) {
            charCounts[getCharIndex(char)]++
        }

        const charCountsAsKey = charCounts.join('.')
        if (sets.has(charCountsAsKey)) {
            sets.get(charCountsAsKey).push(string)
        } else {
            sets.set(charCountsAsKey, [string])
        }
    }

    return sets.values()
}

function getLowerCaseCounts() {
    return [(char) => char.charCodeAt(0) - 97, new Array(26).fill(0)]
}

console.log(alternative(['bla', 'alb']))
