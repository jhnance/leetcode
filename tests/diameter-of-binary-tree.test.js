import { diameterOfBinaryTree } from '../trees/diameter-of-binary-tree'

function TreeNode(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
}

test('For a tree with a single node, returns diameter of 0', () => {
    const tree = new TreeNode()
    expect(diameterOfBinaryTree(tree)).toBe(0)
})

test('For a tree with one diameter-length path, returns the correct diameter', () => {
    const tree = new TreeNode(
        0,
        new TreeNode(1, new TreeNode(4), new TreeNode(5)),
        new TreeNode(2),
    )
    expect(diameterOfBinaryTree(tree)).toBe(3)
})

test('For a tree with multiple paths of the same length, returns the expected diameter', () => {
    const tree = new TreeNode(
        0,
        new TreeNode(1, new TreeNode(4), new TreeNode(5)),
        new TreeNode(2, new TreeNode(6), new TreeNode(7)),
    )
    expect(diameterOfBinaryTree(tree)).toBe(4)
})

test('Returns the correct diameter for the longest path that does not go through the root', () => {
    const tree = new TreeNode(
        0,
        new TreeNode(2),
        new TreeNode(
            3,
            new TreeNode(4, new TreeNode(6)),
            new TreeNode(5, null, new TreeNode(7)),
        ),
    )

    expect(diameterOfBinaryTree(tree)).toBe(4)
})
