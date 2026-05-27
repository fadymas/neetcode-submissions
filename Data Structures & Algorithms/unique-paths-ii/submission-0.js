class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        
    var rows = grid.length;
    var cols = grid[0].length;
    if (grid[rows - 1][cols - 1] === 1)
        return 0;
    var prevRow = Array(cols).fill(0);
    for (var i = rows - 1; i >= 0; i--) {
        var curRow = Array(cols).fill(0);
        for (var j = cols - 1; j >= 0; j--) {
            if (grid[i][j] === 1) {
                curRow[j] = 0;
            }
            else if (i === rows - 1 && j === cols - 1) {
                curRow[j] = 1;
            }
            else {
                var right = j + 1 < cols ? curRow[j + 1] : 0;
                var down = i + 1 < rows ? prevRow[j] : 0;
                curRow[j] = right + down;
            }
        }
        prevRow = curRow;
    }
    return prevRow[0];

    }
}
