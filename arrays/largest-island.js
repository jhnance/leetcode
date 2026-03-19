/**
 * Difficulty: hard
 * Leetcode link: https://leetcode.com/problems/making-a-large-island
 *
 * Description
 * -----------
 *
 * You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1.
 *
 * Return the size of the largest island in grid after applying this operation.
 *
 * An island is a 4-directionally connected group of 1s.
 *
 *
 *
 * Example 1:
 *
 * Input: grid = [[1,0],[0,1]]
 * Output: 3
 * Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
 * Example 2:
 *
 * Input: grid = [[1,1],[1,0]]
 * Output: 4
 * Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.
 * Example 3:
 *
 * Input: grid = [[1,1],[1,1]]
 * Output: 4
 * Explanation: Can't change any 0 to 1, only one island with area = 4.
 *
 *
 * Constraints:
 *
 * n == grid.length
 * n == grid[i].length
 * 1 <= n <= 500
 * grid[i][j] is either 0 or 1.
 */
function largestIsland(grid) {
    let cellToIsland = new Map()
    let islandToArea = new Map()
    let maxArea = 0

    const ROWS = grid.length
    const COLS = grid[0].length

    function measureIsland({ row, col, islandId }) {
        if (
            row < 0 ||
            col < 0 ||
            row >= ROWS ||
            col >= COLS ||
            cellToIsland.has(`${row}:${col}`) ||
            grid[row][col] === 0
        ) {
            return 0
        }

        cellToIsland.set(`${row}:${col}`, islandId)

        let up = measureIsland({ row: row - 1, col, islandId })
        let down = measureIsland({ row: row + 1, col, islandId })
        let left = measureIsland({ row: row, col: col - 1, islandId })
        let right = measureIsland({ row: row, col: col + 1, islandId })

        return 1 + up + down + left + right
    }

    let islandId = 1
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] === 1 && !cellToIsland.get(`${row}:${col}`)) {
                const area = measureIsland({ row, col, islandId })
                islandToArea.set(islandId, area)

                maxArea = Math.max(area, maxArea)

                islandId++
            }
        }
    }

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] !== 0) continue

            let islands = new Set()

            let up = cellToIsland.get(`${row - 1}:${col}`) ?? null
            if (up) islands.add(up)

            let down = cellToIsland.get(`${row + 1}:${col}`) ?? null
            if (down) islands.add(down)

            let left = cellToIsland.get(`${row}:${col - 1}`) ?? null
            if (left) islands.add(left)

            let right = cellToIsland.get(`${row}:${col + 1}`) ?? null
            if (right) islands.add(right)

            let newArea = 1
            for (let island of islands) {
                newArea += islandToArea.get(island)
                if (newArea > maxArea) maxArea = newArea
            }
        }
    }

    /**
     * If the above leads to maxArea remaining 0, then we encountered no 1s in
     * any of the cells. We can assume that adding a 1 anywhere will be a valid
     * solution.
     *
     * Note: this only works because the constraint guarantees we have cells in the
     * grid. If it were possible to return a completely empty grid, then we would
     * simply add a guard clause at the top of this function to return early with 0.
     */
    return maxArea || 1
}
