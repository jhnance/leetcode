/**
 * Difficulty: easy
 * Leetcode link: https://leetcode.com/problems/binary-tree-tilt
 *
 * Description
 * -----------
 * Given the root of a binary tree, return the sum of every tree node's tilt.
 *
 * The tilt of a tree node is the absolute difference between the sum of all left
 * subtree node values and all right subtree node values. If a node does not have a
 * left child, then the sum of the left subtree node values is treated as 0. The
 * rule is similar if the node does not have a right child.
 *
 * Examples
 * --------
 * Input: root = [1,2,3]
 * Output: 1
 * Explanation:
 * Tilt of node 2 : |0-0| = 0 (no children)
 * Tilt of node 3 : |0-0| = 0 (no children)
 * Tilt of node 1 : |2-3| = 1 (left subtree is just left child, so sum is 2; right subtree is just right child, so sum is 3)
 * Sum of every tilt : 0 + 0 + 1 = 1
 */
function calculateTilt(root) {
    function dfs(node) {
        if (node === null) return 0
        const left = dfs(node.left)
        const right = dfs(node.right)
        totalTilt += Math.abs(left - right)
        return node.val + left + right
    }
    let totalTilt = 0
    dfs(root)
    return totalTilt
}
