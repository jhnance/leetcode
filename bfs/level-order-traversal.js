/**
 * Difficulty: medium
 * Leetcode link:https://leetcode.com/problems/binary-tree-level-order-traversal
 */
function levelOrder(root) {
    if (!root) return []

    const queue = [root]
    const output = []

    while (queue.length) {
        const levelSize = queue.length
        const level = []

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()
            level.push(node.val)

            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right)
            }
        }

        output.push(level)
    }

    return output
}
