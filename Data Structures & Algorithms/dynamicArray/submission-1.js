class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        if (capacity == undefined) throw new Error("please defined the capacity")
        if (typeof capacity !== "number" || capacity <= 0) throw new Error("Capacity must be a positive number");
        this.capacity = capacity
        this.array = new Array(capacity)
        this.size = 0
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        if (i < this.capacity && i >= 0) {
            return this.array[i];
        } else {
            throw new Error("Out of range");

        }
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        if (i < 0 || i >= this.capacity) throw new Error("Out of range");
        ;
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.size == this.capacity) this.resize();
        this.array[this.size++] = n;
    }

    /**
     * @returns {number}
     */
    popback() {
        if (this.size == 0) throw new Error("Out of range");
        ;
        let lastElement = this.array[--this.size]
        this.array[this.size] = undefined
        return lastElement;
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity = this.capacity * 2
        let newArray = Array(this.capacity)
        for (let index = 0; index < newArray.length; index++) {
            newArray[index] = this.array[index]

        }
        this.array = newArray;
    }

    /**
     * @returns {number}
     */
    getSize() {

        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity
    }
}



