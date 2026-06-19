/**
 * Link: https://leetcode.com/problems/longest-univalue-path
 */
function longestUnivaluePath(root) {
    let longest = 0

    function dfs(node) {
        if (!node) return 0

        const left = dfs(node.left)
        const right = dfs(node.right)

        let leftLength = 0
        let rightLength = 0
        if (node.left !== null && node.left.val === node.val)
            leftLength = left + 1
        if (node.right !== null && node.right.val === node.val)
            rightLength = right + 1

        longest = Math.max(longest, leftLength + rightLength)

        return Math.max(leftLength, rightLength)
    }

    dfs(root)
    return longest
}
