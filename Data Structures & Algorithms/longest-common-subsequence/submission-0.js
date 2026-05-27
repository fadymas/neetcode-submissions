class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
            var n = text1.length;
    var m = text2.length;
    var dp = Array.from({ length: n + 1 }, function () {
        return Array(m + 1).fill(0);
    });
    for (var i = n - 1; i >= 0; i--) {
        for (var j = m - 1; j >= 0; j--) {
            if (text1[i] === text2[j]) {
                dp[i][j] = 1 + dp[i + 1][j + 1];
            }
            else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
            }
        }
    }
    return dp[0][0];
    }
}
