/**
 * Difficulty: medium
 * Leetcode link: https://leetcode.com/problems/validate-binary-search-tree
 *
 * Description
 * -----------
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 *
 * A valid BST is defined as follows:
 *
 * The left subtree of a node contains only nodes with keys strictly less than the node's key.
 * The right subtree of a node contains only nodes with keys strictly greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 */
function isValidBST(root, min, max) {
    if (root === null) return true
    if (min !== null && root.val <= min) return false
    if (max !== null && root.val >= max) return false
    return (
        isValidBST(root.left, min, root.val) &&
        isValidBST(root.right, root.val, max)
    )
}
