class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        this.head = new Node(null, null);
        this.tail = new Node(null, null);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    add(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    get(key) {
        if (!this.map.has(key)) return -1;

        const node = this.map.get(key);
        this.remove(node);
        this.add(node);

        return node.value;
    }

    put(key, value) {
        if (this.map.has(key)) {
            this.remove(this.map.get(key));
        }

        const newNode = new Node(key, value);
        this.add(newNode);
        this.map.set(key, newNode);

        if (this.map.size > this.capacity) {
            const lru = this.tail.prev;
            this.remove(lru);
            this.map.delete(lru.key);
        }
    }
}
