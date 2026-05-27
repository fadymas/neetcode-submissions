class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      const numsMap = new Map()
    for (let index = 0; index < nums.length; index++) {
        const reminingNum = target - nums[index]
        if (numsMap.has(reminingNum)) return [numsMap.get(reminingNum), index]
        numsMap.set(nums[index], index)
    }  
    }
}
