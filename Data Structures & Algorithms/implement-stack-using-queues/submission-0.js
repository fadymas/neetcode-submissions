class MyStack {
    constructor() {
        this.queue = []

    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue.unshift(x);

    }

    /**
     * @return {number}
     */
    pop() {
        return this.queue.shift()
    }

    /**
     * @return {number}
     */
    top() {
        return this.queue[0];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue.length == 0
    }
}