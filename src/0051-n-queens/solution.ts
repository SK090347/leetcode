/**
 * 51. N-Queens
 * Backtracking with column / diag / anti-diag bitsets.
 */
export function solveNQueens(n: number): string[][] {
  const board: string[][] = Array.from({ length: n }, () => Array(n).fill('.'));
  const cols = new Set<number>();
  const diag = new Set<number>(); // r - c
  const anti = new Set<number>(); // r + c
  const solutions: string[][] = [];

  function place(row: number): void {
    if (row === n) {
      solutions.push(board.map((r) => r.join('')));
      return;
    }
    for (let c = 0; c < n; c++) {
      if (cols.has(c) || diag.has(row - c) || anti.has(row + c)) continue;
      board[row]![c] = 'Q';
      cols.add(c);
      diag.add(row - c);
      anti.add(row + c);
      place(row + 1);
      board[row]![c] = '.';
      cols.delete(c);
      diag.delete(row - c);
      anti.delete(row + c);
    }
  }

  place(0);
  return solutions;
}
