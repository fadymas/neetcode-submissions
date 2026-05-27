/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
    if (!node) {
        return null;
    }

    const nodes = new Map();
    
   

    return this.dfs(node,nodes);

    }
     dfs(originalNode,nodes) {
        if (nodes.has(originalNode.val)) {
            return nodes.get(originalNode.val);
        }

        const node = new Node(originalNode.val);
        nodes.set(originalNode.val, node);

        for (const neighbor of originalNode.neighbors) {
            node.neighbors.push(this.dfs(neighbor,nodes)); 
        }

        return node;
    }
}
