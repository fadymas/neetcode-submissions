class Maxh {
    constructor() {
        this.heap = [];
    }

    // --- Helpers ---
    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // --- Core Functions ---
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;  // O(1)
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);               // O(log n)
    }

    extractRoot() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);                                // O(log n)
        return root;
    }

    // --- Heapify ---
    heapifyUp(index) {
        let current = index;
        while (
            current > 0 &&
            this.heap[current] > this.heap[this.getParentIndex(current)]
        ) {
            this.swap(current, this.getParentIndex(current));
            current = this.getParentIndex(current);
        }
    }

    heapifyDown(index) {
        let largest = index;
        const left = this.getLeftChildIndex(index);
        const right = this.getRightChildIndex(index);

        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }
        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }

    buildHeap(array) { // To be ensure the middle nodes with children its being correct with it's children
        this.heap = array;
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);                              // O(n) 
        }
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
    if (stones.length == 1) return stones[0]
    if (stones.length <= 0) return
    this.heap = new Maxh();
    this.heap.buildHeap(stones)

    while (this.heap.heap.length > 1) {
        this.heap.insert(this.smash(this.heap.extractRoot(), this.heap.extractRoot()))
    }
    return this.heap.heap[0]
    }

     smash(stone1, stone2) {
    let smashResult = stone1 - stone2
    return smashResult
}
}
