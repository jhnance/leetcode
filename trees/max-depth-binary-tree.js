/**
 * Link: https://leetcode.com/problems/maximum-depth-of-binary-tree
 */
function maxDepth(root) {
    if (!root) return 0
    const left = 1 + maxDepth(root.left)
    const right = 1 + maxDepth(root.right)
    return Math.max(left, right)
}
