class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {  let robber1 = 0;
    let robber2 = 0;
    for (let num of nums) {
        let temp = Math.max(robber1 + num, robber2)
        robber1 = robber2;
        robber2 = temp;
    }
    return robber2;}
}
