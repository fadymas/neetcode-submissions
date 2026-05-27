class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
         if (matrix[0][0] == target) {
        return true
    }
    for (let index = 0; index < matrix.length; index++) {
        let left = 0, right = matrix[index].length - 1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (matrix[index][mid] == target) {
                return true
            } else if (matrix[index][mid] < target) {
                left = mid + 1;
            } else if (matrix[index][mid] > target) {
                right = mid - 1;
            }

        }
    }


    return false
    }
}
