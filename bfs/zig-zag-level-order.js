/**
 * Difficulty: medium
 * Leetcode link: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal
 */
function zigzagLevelOrder(root) {
    if (!root) return []

    const queue = [root]
    const levels = []

    let reverseOrder = false
    while (queue.length) {
        const levelSize = queue.length
        const level = []
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()

            if (reverseOrder) {
                level.unshift(node.val)
            } else {
                level.push(node.val)
            }

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        levels.push(level)
        reverseOrder = !reverseOrder
    }

    return levels
}
