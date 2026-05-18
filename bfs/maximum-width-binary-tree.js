/**
 * Difficulty: medium
 * Link: https://www.hellointerview.com/learn/code/breadth-first-search/maximum-width-of-binary-tree
 */
function widthOfBinaryTree(root) {
    const queue = [[root, 0]]
    let maxWidth = 0

    while (queue.length) {
        const levelSize = queue.length
        let left = queue[0][1]
        let right = -1

        for (let i = 0; i < levelSize; i++) {
            const [node, position] = queue.shift()

            if (i === levelSize - 1) {
                right = position
            }

            if (node.left) {
                queue.push([node.left, 2 * position])
            }
            if (node.right) {
                queue.push([node.right, 2 * position + 1])
            }
        }

        maxWidth = Math.max(maxWidth, right - left + 1)
    }

    return maxWidth
}

/**
 * Weirdness below... avoiding calls to shift() and using a pointer instead.
 * (Not that weird, it's just an optimization you don't typically see. Good to know
 * what it could look like, though.)
 */

function other(root) {
    if (!root) return 0

    const queue = [[root, 0]]
    let maxWidth = 0
    let queuePtr = 0

    while (queuePtr < queue.length) {
        const levelSize = queue.length - queuePtr
        const levelEnd = queuePtr + levelSize
        let left = queue[queuePtr][1]
        let right = -1

        for (; queuePtr < levelEnd; queuePtr++) {
            const [node, position] = queue[queuePtr]
            right = position
            if (node.left) queue.push([node.left, 2 * position])
            if (node.right) queue.push([node.right, 2 * position + 1])
        }

        maxWidth = Math.max(maxWidth, right - left + 1)
    }

    return maxWidth
}
