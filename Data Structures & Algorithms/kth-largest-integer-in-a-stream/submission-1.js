class h {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    getLeftIndex(i) {
        return i * 2 + 1;
    }
    getRightIndex(i) {
        return i * 2 + 2;
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    heapifyDown(index) {
        let smallest = index;
        const left = this.getLeftIndex(index);
        const right = this.getRightIndex(index);

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }

    extractRoot() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        let current = index;
        while (
            current > 0 &&
            this.heap[current] < this.heap[this.getParentIndex(current)]
        ) {
            this.swap(current, this.getParentIndex(current));
            current = this.getParentIndex(current);
        }
    }

    size() {
        return this.heap.length;
    }
}

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = new h();
        nums.forEach(num=>this.add(num))
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if (this.heap.size() < this.k) {
        this.heap.insert(val);
    } else if (val > this.heap.peek()) {
        this.heap.extractRoot();
        this.heap.insert(val);
    }
    return this.heap.peek();
    }
}

