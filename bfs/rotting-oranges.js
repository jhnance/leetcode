/**
 * Difficulty: medium
 * Leetcode link: https://leetcode.com/problems/rotting-oranges/
 *
 * Description
 * -----------
 * You are given an m x n grid where each cell can have one of three values:
 *   - 0 representing an empty cell,
 *   - 1 representing a fresh orange, or
 *   - 2 representing a rotten orange.
 *
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten
 * orange becomes rotten.
 *
 * Return the minimum number of minutes that must elapse until no cell has a
 * fresh orange. If this is impossible, return -1.
 *
 * Examples
 * --------
 * Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
 * Output: 4
 *
 * Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
 * Output: -1
 * Explanation: The orange in the bottom left corner (row 2, column 0) is never
 * rotten, because rotting only happens 4-directionally.
 *
 * Input: grid = [[0,2]]
 * Output: 0
 * Explanation: Since there are already no fresh oranges at minute 0, the answer
 * is just 0.
 *
 * Constraints
 * -----------
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 10
 * grid[i][j] is 0, 1, or 2
 */
function orangesRotting(grid) {
    const FRESH = 1
    const ROTTEN = 2
    const ROWS = grid.length
    const COLS = grid[0].length
    let freshCount = 0
    const rottenOranges = []

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] === ROTTEN) rottenOranges.push([row, col])
            if (grid[row][col] === FRESH) freshCount++
        }
    }

    function isValidCell(row, col) {
        return row >= 0 && row < ROWS && col >= 0 && col <= COLS
    }

    function travel(row, col) {
        const adjacentCells = [
            [row - 1, col], // top
            [row, col + 1], // right
            [row + 1, col], // bottom
            [row, col - 1], // left
        ]

        for (const [r, c] of adjacentCells) {
            if (isValidCell(r, c) && grid[r][c] === FRESH) {
                grid[r][c] = ROTTEN
                rottenOranges.push([r, c])
                freshCount--
            }
        }
    }

    let minutes = 0
    while (rottenOranges.length && freshCount > 0) {
        let length = rottenOranges.length
        for (let i = 0; i < length; i++) {
            const [row, col] = rottenOranges.shift()
            travel(row, col)
        }

        minutes++
    }

    return freshCount > 0 ? -1 : minutes
}
