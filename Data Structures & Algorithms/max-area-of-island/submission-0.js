class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {  
    let m = grid.length;
    let n = grid[0].length;

    let MaxIslandArea = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                MaxIslandArea = Math.max(MaxIslandArea,this.dfsIsland(i, j, m, n, grid))
            }

        }
    }
    return MaxIslandArea;
    }

    dfsIsland(row, column, m, n, grid) {
    let countArea = 0
    if (
        row < 0 ||
        row >= m ||
        row < 0 ||
        column >= n ||
        !grid[row][column] ||
        grid[row][column] !== 1
    ) {
        return 0;
    } else {
        countArea++
    }
    grid[row][column] = 0;

    countArea += this.dfsIsland(row, column - 1, m, n, grid);
    countArea += this.dfsIsland(row, column + 1, m, n, grid);
    countArea += this.dfsIsland(row - 1, column, m, n, grid);
    countArea += this.dfsIsland(row + 1, column, m, n, grid);

    return countArea
}
}
