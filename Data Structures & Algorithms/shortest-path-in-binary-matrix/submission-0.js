class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {

    return this.bfs(grid);
    }


 bfs(grid, startRow = 0, startCol = 0) {
    const rows = grid.length;
    const cols = grid[0].length;
    if (grid[0][0] === 1 || grid[rows - 1][cols - 1] === 1) return -1;

    // Create visited matrix (all false)
    const visited = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => false)
    );

    const queue = [];
    queue.push([startRow, startCol]);
    visited[startRow][startCol] = true;

    let len = 1; // Start distance from 1 (counting starting cell)

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [1, 1],
        [-1, 1],
        [-1, -1],
        [1, -1],
    ];

    while (queue.length > 0) {
        const size = queue.length; // process level by level

        for (let i = 0; i < size; i++) {
            const [r, c] = queue.shift();

            // Check if reached the bottom-right cell
            if (r === rows - 1 && c === cols - 1) return len;

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                // Check boundaries + visited + blocked
                if (
                    nr >= 0 &&
                    nr < rows &&
                    nc >= 0 &&
                    nc < cols &&
                    !visited[nr][nc] &&
                    grid[nr][nc] === 0
                ) {
                    visited[nr][nc] = true;
                    queue.push([nr, nc]);
                }
            }
        }

        len++; // increase distance after finishing one BFS level
    }

    // No path found
    return -1;
}
}
