/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
    const newNode = new TreeNode(val)
    if (!root) {
        root = newNode
        return root
    }
    let cur = root;
    while (cur) {
        if (cur.val > val) {
            if (cur.left) {
                cur = cur.left
            } else {
                cur.left = newNode
                return root
            }
        } else {
            if (cur.right) {
                cur = cur.right
            } else {
                cur.right = newNode
                return root
            }
        }
    }
}
}
