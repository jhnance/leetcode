/**
 * Difficulty: medium
 * Leetcode link: https://leetcode.com/problems/path-sum-ii/editorial/
 */
function pathSum(root, target) {
    const paths = []

    function dfs(root, target, path) {
        if (root === null) return

        path.push(root.val)
        if (root.left === null && root.right === null && root.val === target) {
            paths.push([...path])
        }

        const left = dfs(root.left, target - root.val, path)
        const right = dfs(root.right, target - root.val, path)

        path.pop()
    }

    dfs(root, target, [])
    return paths
}
