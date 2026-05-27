class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
         var prevRow = Array.from({ length: n }).map(function () { return 0; });
    for (var index = m - 1; index > -1; index--) {
        var curRow = Array.from({ length: n }).map(function () { return 0; });
        curRow[n - 1] = 1;
        for (var jndex = n - 2; jndex > -1; jndex--) {
            curRow[jndex] = curRow[jndex + 1] + prevRow[jndex];
        }
        prevRow = curRow;
    }
    return prevRow[0];
    }
}
