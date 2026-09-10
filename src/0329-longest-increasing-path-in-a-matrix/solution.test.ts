import { describe, it, expect } from 'vitest';
import { longestIncreasingPath } from './solution.js';

describe('329. Longest Increasing Path in a Matrix', () => {
  it('example 1', () => {
    expect(
      longestIncreasingPath([
        [9, 9, 4],
        [6, 6, 8],
        [2, 1, 1],
      ]),
    ).toBe(4);
  });
  it('example 2', () => {
    expect(
      longestIncreasingPath([
        [3, 4, 5],
        [3, 2, 6],
        [2, 2, 1],
      ]),
    ).toBe(4);
  });
  it('single cell', () => {
    expect(longestIncreasingPath([[1]])).toBe(1);
  });
  it('strictly decreasing', () => {
    expect(longestIncreasingPath([[5, 4], [3, 2]])).toBe(3);
  });
});
