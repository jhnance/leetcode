/**
 * Difficulty: medium
 * Leetcode link: https://leetcode.com/problems/number-of-islands
 */
function numIslands(grid) {
    const ROWS = grid.length
    const COLS = grid[0].length

    let numIslands = 0

    function findIslands(row, col) {
        if (
            row < 0 ||
            row >= ROWS ||
            col < 0 ||
            col >= COLS ||
            grid[row][col] === '0'
        ) {
            return
        }

        /**
         * Mark the current cell as visited so we don't count it
         * multiple times / cause an infinite recursion.
         */
        grid[row][col] = '0'
        /**
         * Find the rest of the cells for the current island
         */
        findIslands(row - 1, col)
        findIslands(row, col + 1)
        findIslands(row + 1, col)
        findIslands(row, col - 1)
    }

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] === '0') continue

            numIslands++
            findIslands(row, col)
        }
    }

    return numIslands
}
