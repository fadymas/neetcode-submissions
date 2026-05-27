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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
         let stack = [];
    let result = [];
    let current = root;

    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left
        }
        current = stack.pop();
        result.push(current.val)
        current = current.right


    }
    return result[k - 1]
    }
}
