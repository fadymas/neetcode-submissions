class MinHeap {
    constructor() {
        this.heap = []
    }

    // --- Helpers ---
    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }
    getEuclideanDistance(point) {
        let distance = Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
        return distance;
    }
    peak(k) {
        let result = []
        for (let index = 0; index < k; index++) {
            result.push(this.extractRoot())
        }
        return result
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    heapifyUp(index) {
        let current = index;
        while (
            current > 0 &&
            this.getEuclideanDistance(this.heap[current]) < this.getEuclideanDistance(this.heap[this.getParentIndex(current)])
        ) {
            this.swap(current, this.getParentIndex(current));
            current = this.getParentIndex(current);
        }
    }

    heapifyDown(index) {
        let smallest = index;
        const left = this.getLeftChildIndex(index);
        const right = this.getRightChildIndex(index);

        if (left < this.heap.length && this.getEuclideanDistance(this.heap[left]) < this.getEuclideanDistance(this.heap[smallest])) {
            smallest = left;
        }
        if (right < this.heap.length && this.getEuclideanDistance(this.heap[right]) < this.getEuclideanDistance(this.heap[smallest])) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }

    buildHeap(array) { // To be ensure the middle nodes with children its being correct with it's children
        this.heap = array
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);                              // O(n) 
        }
    }
    extractRoot() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);                                // O(log n)
        return root;
    }
}

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
          this.heap = new MinHeap();
    this.heap.buildHeap(points)
    return this.heap.peak(k)
    }
}
