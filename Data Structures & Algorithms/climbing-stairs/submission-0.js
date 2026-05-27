class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n = 4) {
        // sum = way <=4
        let sum = 0
        let first = 0
        let second = 1
        for (let index = 1; index <= n; index++) {
            sum = first + second;
            first = second
            second = sum

        }
        return sum


    }
};
