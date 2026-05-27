class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let m = grid.length;
        let n = grid[0].length;


        let islandCount = 0;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === "1") {
                    islandCount++;
                    this.dfsIsland(i, j, m, n, grid);
                }

            }
        }
        return islandCount;
        }
    dfsIsland(row, column, m, n, grid) {
    if (
        row < 0 ||
        row >= m ||
        row < 0 ||
        column >= n ||
        !grid[row][column] ||
        grid[row][column] !== "1"
    ) {
        return;
    }
    grid[row][column] = "0";

    this.dfsIsland(row, column - 1, m, n, grid);
    this.dfsIsland(row, column + 1, m, n, grid);
    this.dfsIsland(row - 1, column, m, n, grid);
    this.dfsIsland(row + 1, column, m, n, grid);
}
}
