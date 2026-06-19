/**
 * Link: https://leetcode.com/problems/encode-and-decode-strings/
 */
function encode(strings) {
    let encoded = ''
    for (let string of strings) {
        // create chunks prefaced by their length
        encoded += `${string.length};${string}`
    }
    return encoded
}

function decode(string) {
    const decoded = []

    let i = 0
    while (i < string.length) {
        // find the first delimiter
        const start = string.indexOf(';', i) + 1
        const length = parseInt(string.substring(i, start - 1))
        const end = start + length
        const word = string.substring(start, end)

        decoded.push(word)
        i = end
    }

    return decoded
}
