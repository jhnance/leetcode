/**
 * Difficulty: medium
 * Leetcode link: https://leetcode.com/problems/valid-sudoku/
 *
 * Description
 * -----------
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be
 * validated according to the following rules:
 * - Each row must contain the digits 1-9 without repetition.
 * - Each column must contain the digits 1-9 without repetition.
 * - Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 *
 * Note that a Sudoku board (partially filled) could be valid but is not necessarily
 * solvable.
 *
 * Only the filled cells need to be validated according to the mentioned rules.
 */
function isValidSudoku(board) {
    const rows = board.map(() => new Set())
    const cols = board.map(() => new Set())
    const subgrids = board.map(() => new Set())

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            const value = board[row][col]

            if (value === '.') continue

            const subgrid = Math.floor(row / 3) * 3 + Math.floor(col / 3)

            if (
                rows[row].has(value) ||
                cols[col].has(value) ||
                subgrids[subgrid].has(value)
            )
                return false

            rows[row].add(value)
            cols[col].add(value)
            subgrids[subgrid].add(value)
        }
    }
    return true
}
