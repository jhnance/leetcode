/**
 * Difficulty: easy
 * Leetcode link: https://leetcode.com/problems/diameter-of-binary-tree
 *
 * Description
 * -----------
 *
 * Given the `root` of a binary tree, return the length of the diameter of the
 * tree.
 *
 * The diameter of a binary tree is the length of the longest path between any
 * two nodes in a tree. This path may or may not pass through the root.
 *
 * The length of a path between two nodes is represented by the number of edges
 * between them.
 *
 * Complexity
 * ----------
 *
 * Time: O(n)
 * We visit every node in the tree once.
 *
 * Space: O(n)
 * We create a new entry on the call stack for every node in the tree
 * (in addition to some null children of leaf nodes).
 */

export function diameterOfBinaryTree(root) {
    let maxDiameter = 0

    function traverse(node) {
        if (!node) return 0

        const left = traverse(node.left)
        const right = traverse(node.right)

        maxDiameter = Math.max(maxDiameter, left + right)
        return 1 + Math.max(left, right)
    }

    traverse(root)
    return maxDiameter
}
