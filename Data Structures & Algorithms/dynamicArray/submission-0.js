class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.array = Array(capacity > 0 ? capacity : 0)
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        if (i < this.getCapacity() && i >= 0) {
            return this.array[i];
        } else {
            return "Out of range"
        }
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        if (i < 0 || i >= this.getCapacity()) return;
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.getSize() == this.getCapacity()) this.resize();
        this.array[this.getSize()] = n;
    }

    /**
     * @returns {number}
     */
    popback() {
        if (this.getSize() == 0) return;
        let lastElement = this.array[this.getSize() - 1]
        this.array[this.getSize() - 1] = undefined
        return lastElement;
    }

    /**
     * @returns {void}
     */
    resize() {
        let newArray = Array(this.getCapacity() * 2)
        for (let index = 0; index < newArray.length; index++) {
            newArray[index] = this.array[index]

        }
        this.array = newArray;
    }

    /**
     * @returns {number}
     */
    getSize() {
        let size = 0;
        for (let index = 0; index < this.getCapacity(); index++) {
            this.array[index] != undefined ? size++ : null;

        }
        return size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.array.length
    }
}

