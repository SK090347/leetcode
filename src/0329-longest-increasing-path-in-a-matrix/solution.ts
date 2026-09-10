/**
 * 329. Longest Increasing Path in a Matrix
 * DFS + memoization: from each cell, follow strictly increasing neighbors.
 */
export function longestIncreasingPath(matrix: number[][]): number {
  const m = matrix.length;
  if (m === 0) return 0;
  const n = matrix[0]!.length;
  const memo: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ] as const;

  function dfs(r: number, c: number): number {
    if (memo[r]![c]! > 0) return memo[r]![c]!;
    let best = 1;
    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (
        nr >= 0 &&
        nr < m &&
        nc >= 0 &&
        nc < n &&
        matrix[nr]![nc]! > matrix[r]![c]!
      ) {
        best = Math.max(best, 1 + dfs(nr, nc));
      }
    }
    memo[r]![c] = best;
    return best;
  }

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans = Math.max(ans, dfs(i, j));
    }
  }
  return ans;
}
