/**
 * Difficulty: easy
 * Link: https://www.hellointerview.com/learn/code/breadth-first-search/level-order-sum
 *
 * Description
 * -----------
 * Given the root of a binary tree, return the sum of the nodes at each level.
 * The output should be a list containing the sum of the nodes at each level.
 */
function levelOrderSum(root) {
    if (!root) return []

    const sums = []
    const queue = [root]

    while (queue.length) {
        const levelSize = queue.length
        let sum = 0

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()
            sum += node.val

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        sums.push(sum)
    }

    return sums
}
