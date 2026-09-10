import { describe, it, expect } from 'vitest';
import { solveNQueens } from './solution.js';

describe('51. N-Queens', () => {
  it('example 1 — n = 4', () => {
    const result = solveNQueens(4);
    expect(result).toHaveLength(2);
    expect(result).toEqual(
      expect.arrayContaining([
        ['.Q..', '...Q', 'Q...', '..Q.'],
        ['..Q.', 'Q...', '...Q', '.Q..'],
      ]),
    );
  });
  it('example 2 — n = 1', () => {
    expect(solveNQueens(1)).toEqual([['Q']]);
  });
  it('n = 2 has no solution', () => {
    expect(solveNQueens(2)).toEqual([]);
  });
  it('n = 3 has no solution', () => {
    expect(solveNQueens(3)).toEqual([]);
  });
});
