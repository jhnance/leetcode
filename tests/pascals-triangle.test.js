import { generate } from '../arrays/pascals-triangle'

function getPairSumsOfLastRow(triangle) {
    const lastRow = triangle.pop()
    const pairSums = []

    for (let i = 0; i < lastRow.length - 1; i++) {
        const curr = lastRow[i]
        const next = lastRow[i + 1]

        pairSums.push(curr + next)
    }

    return pairSums
}

test('Generates the expected triangle', () => {
    const triangle = []

    // 1 is the special "base" case
    const one = generate(1)
    triangle.push(one.pop())
    expect(triangle).toEqual([[1]])

    let prev = triangle
    for (let i = 2; i <= 30; i++) {
        const result = generate(i)
        expect(result).toEqual([...prev, [1, ...getPairSumsOfLastRow(prev), 1]])
        prev = result
    }
})
