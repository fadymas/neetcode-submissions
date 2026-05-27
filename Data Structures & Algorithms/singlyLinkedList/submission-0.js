class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;  // first node
        this.size = 0;     // keep track of length
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size) return -1;

        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.size++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index < 0 || index >= this.size) return false;

        if (index === 0) {
            this.head = this.head.next;
        } else {
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            curr.next = curr.next.next;
        }
        this.size--;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const values = [];
        let curr = this.head;
        while (curr) {
            values.push(curr.val);
            curr = curr.next;
        }
        return values;
    }
}
