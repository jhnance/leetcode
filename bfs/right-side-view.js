/**
 * Difficulty: medium
 * Leetcode link: https://leetcode.com/problems/binary-tree-right-side-view
 */
function rightSideView(root) {
    if (!root) return []

    const rightmostNodes = []
    const queue = [root]

    while (queue.length) {
        const levelSize = queue.length

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()

            if (i === levelSize - 1) rightmostNodes.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }

    return rightmostNodes
}
