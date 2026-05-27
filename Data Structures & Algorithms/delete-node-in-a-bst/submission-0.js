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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
         if (!root) return null;

    if (key < root.val) {
        root.left = this.deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = this.deleteNode(root.right, key);
    } else {
        // Node found
        if (!root.left) return root.right;   // only right child or no child
        if (!root.right) return root.left;   // only left child

        // Two children: find inorder successor
        let successor = root.right;
        while (successor.left) {
            successor = successor.left;
        }

        root.val = successor.val; // replace value
        root.right = this.deleteNode(root.right, successor.val); // delete successor
    }
    return root;
    }
}
