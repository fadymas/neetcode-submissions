class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let number = 0;
        let set = new Set(nums);
        number = set.size
        let newArray = Array.from(set)
        for (let index = 0; index < set.size; index++) {
            nums[index] = newArray[index];

        }
        console.log(nums)

        return number;
    }
}
