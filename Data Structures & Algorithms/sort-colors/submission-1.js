class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        if (nums.length <= 0) {
            return nums
        }
        const length = nums.length;
        const minValue = Math.min(...nums);
        const maxValue = Math.max(...nums);
        const bucketSize = Math.floor(((maxValue - minValue) / length) + 1);
        const buckets = Array.from({ length }, () => []);

        for (let i = 0; i < length; i++) {
            let index = Math.floor((nums[i] - minValue) / bucketSize);
            buckets[index].push(nums[i]);
        }


        function insertionSort(bucket) {
            for (let i = 1; i < bucket.length; i++) {
                let key = bucket[i];
                let j = i - 1;
                while (j >= 0 && bucket[j] > key) {
                    bucket[j + 1] = bucket[j];
                    j--;
                }
                bucket[j + 1] = key;
            }
            return bucket;
        }

        for (let index = 0; index < buckets.length; index++) {
            insertionSort(buckets[index])
        }

        nums.splice(0, nums.length)
        for (let i = 0; i < length; i++) {
            nums.push(...buckets[i])

        }
    }
}