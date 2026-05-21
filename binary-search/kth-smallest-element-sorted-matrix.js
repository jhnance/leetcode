/**
 * Difficulty: medium-hard
 * Link: https://www.hellointerview.com/learn/code/binary-search/kth-smallest-element-in-a-sorted-matrix
 */
function kthSmallestElementSortedMatrix(matrix, k) {
    let low = matrix.at(0).at(0)
    let high = matrix.at(-1).at(-1)

    /**
     * Binary search over the answer space. We don't actually care if
     * matrix has a value of mid in it; `countLessThanOrEqualTo` will
     * account for any value that is <= to it anyway.
     */
    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2)
        if (countLessThanOrEqualTo(matrix, mid) >= k) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return low
}

function countLessThanOrEqualTo(matrix, target) {
    let count = 0
    let col = 0
    let row = matrix.length - 1
    /**
     * Start in the bottom left corner, walking your way
     * up and to the right.
     */
    while (row >= 0 && col < matrix[0].length) {
        if (matrix[row][col] <= target) {
            /**
             * row + 1 gives you the number of elements in the current column
             * inclusive of matrix[row][col]. We add 1 becuase of 0-based indexing.
             * We know all those values are valid because the sort order guarantees
             * that columns are sorted in non-decreasing order, so anything from
             * prior rows is less than matrix[row][col].
             */
            count += row + 1
            /**
             * If the current cell is valid, that means we can search to the right.
             * We know values to the right are larger than matrix[row][col] because
             * of the sort order: anything in subsequent columsn is larger than
             * matrix[row][col].
             */
            col++
        } else {
            /**
             * The next row up is guaranteed to start with a value smaller than
             * matrix[row][col], so we can start our search again from there after
             * restricting the search space to avoid values we know fall out of bounds.
             */
            row--
        }
    }

    return count
}
