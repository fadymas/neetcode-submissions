class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
     search(nums, target) {
    if (nums[0] == target) {
        return 0
    }
    let left = 0, right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        }

    }

    return -1
}}