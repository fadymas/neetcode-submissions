/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let cur1 = list1
        let cur2 = list2
        let node = new ListNode();
        const head = cur1 || cur2? node : null;
        while (cur1 || cur2) {
            if (cur1 && cur2) {
                if (cur1.val < cur2.val) {
                    node.val = cur1.val;
                    cur1 = cur1.next;
                } else if (cur1.val > cur2.val) {
                    node.val = cur2.val;
                    cur2 = cur2.next;
                } else {
                    node.val = cur1.val;
                    node.next = new ListNode(cur2.val);
                    node = node.next;
                    cur1 = cur1.next;
                    cur2 = cur2.next;
                }
            } else if (cur1) {
                node.val = cur1.val
                cur1 = cur1.next;

            } else {
                node.val = cur2.val;
                cur2 = cur2.next;
            }
            if (cur1 || cur2) {
                node.next = new ListNode()
                node = node.next;
            }
        }
        return head;
    }
}
