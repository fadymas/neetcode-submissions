class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
           let set = new Set();
    for (const element of nums) {

        if (set.has(element)) {
            return true
        }
        set.add(element)

    }
    return false
    }
}
