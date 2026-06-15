/**
 * Two versions:
 * 1. Swap as we go (pre-order)
 * 2. Swap on the way back up (post-order)
 */

// pre-order
function invertTreeTopDown(root) {
    if (!root) return root

    const temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root
}

// post-order
function invertTreeBottomUp(root) {
    if (!root) return root

    const left = root.left
    const right = root.right

    root.left = invertTree(right)
    root.right = invertTree(left)

    return root
}
