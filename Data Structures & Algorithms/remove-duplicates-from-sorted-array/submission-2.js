class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let set = new Set(nums);
        let newArray = Array.from(set)
        for (let index = 0; index < set.size; index++) {
            nums[index] = newArray[index];

        }

        return set.size;
    }
}
