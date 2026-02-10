/**
 * Difficulty: easy
 * Leetcode link: https://leetcode.com/problems/pascals-triangle
 *
 * Description
 * -----------
 *
 * Given an integer `numRows`, return the first `numRows` of Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly above
 * it as shown:
 *     1
 *    1 1
 *   1 2 1
 *  1 3 3 1
 * 1 4 6 4 1
 *
 * The first two rows can be thought of as hard-coded special cases. But, every
 * subsequent row can be thougth of as [1, ...sums of pairs of previous row, 1].
 *
 * Examples
 * --------
 *
 * Input: `numRows` = 5
 * Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
 *
 * Input: `numRows` = 1
 * Output: [[1]]
 *
 * Constraints
 * -----------
 *
 * 1 <= `numRows` <= 30
 *
 * Complexity
 * ----------
 *
 * Time: O(numRows^2)
 * Outer loop runs `numRows` times, and the inner loop runs `rowNum` times, for
 * an overall complexity of `numRows^2` per Gauss' formula.
 *
 * Space: O(1)
 * The only space we use is storing the output, which generally doesn't factor
 * into space complexity calculations.
 */

export function generate(numRows) {
    const triangle = [[1]]

    for (let row = 1; row < numRows; row++) {
        let currRow = Array(row + 1)
        triangle.push(currRow)
        currRow[0] = 1
        currRow[currRow.length - 1] = 1

        let prevRow = triangle[row - 1]
        for (let col = 1; col < prevRow.length; col++) {
            currRow[col] = prevRow[col - 1] + prevRow[col]
        }
    }

    return triangle
}
