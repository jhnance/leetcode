/**
 * Difficulty: easy
 * Leetcode link:https://leetcode.com/problems/minimum-time-visiting-all-points
 *
 * Description
 * -----------
 * On a 2D plane, there are `n` points with integer coordinates `points[i] = [x_i, y_i]`.
 * Return the minimum time in seconds to visit all points in the order given by `points`.
 *
 * You can move according to these rules:
 *   * in 1 second, you can either:
 *     * move vertically by one unit,
 *     * move horizontally by one unit, or
 *     * move diagonally one unit (move one unit vertically, then one unit horizontally)
 *   * you have to visit the points in the same order as they appear in the array
 *   * you are allowed to pass through points that appear later in the order, but
 *     these do not count as visits.
 *
 * Examples
 * ---------
 *
 * Input: `points` = [[1, 1], [3, 4], [-1, 0]]
 * Output: 7
 * One optimal path is [1, 1] => [2, 2] => [3, 3] => [3, 4] => [2, 3] => [1, 2] => [0, 1] => [-1, 0]
 * which is 7 moves from the starting point.
 *
 * Complexity
 * ----------
 *
 * Time: O(n)
 * Constant time operations, looping through `points` a single time.
 *
 * Space: O(1)
 *
 * Solution notes
 * --------------
 *
 * In general, the idea is to prioritize diagonal moves as much as possible.
 * In this problem statement, 1 diagonal move is equal to 1 horizontal + 1 vertical
 * move, so you're getting 2 moves for the price of 1. You want to move diagonally
 * until you are in the right row or column (aligned with either the row or
 * column of the destination point), and then you make the remaining moves either
 * horizontally or vertically.
 *
 * One observation you'll make as you work through a few examples is that this sequence
 * of diagonal steps to align in the proper row or column, and then horizontal or
 * vertical moves to reach the destination point, is the same amount of moves as
 * the largest difference between the two points' X or Y value.
 *
 * For example:
 * 4 |         b
 * 3 |         .
 * 2 |     .
 * 1 | a
 *     _   _   _
 *     1   2   3
 * From `a` (1, 1) to `b` (3, 4) you make 2 diagonal moves to (3, 3) and one vertical
 * move to (3, 4). This is a total of 3 moves, which is the same as the difference
 * between the Y values of `a` and `b`: 1 and 4, respectively.
 *
 * There's a name for this: Chebyshev distance, where "the distance between two
 * points is the greatest of their differences along any coordinate dimension."
 * https://en.wikipedia.org/wiki/Chebyshev_distance
 */
export function minTimeToVisitAllPoints(points = []) {
    let numSteps = 0

    for (let i = 0; i < points.length - 1; i++) {
        let [prevX, prevY] = points[i]
        let [nextX, nextY] = points[i + 1]
        numSteps += Math.max(Math.abs(nextX - prevX), Math.abs(nextY - prevY))
    }

    return numSteps
}
