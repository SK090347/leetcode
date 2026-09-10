import { describe, it, expect } from 'vitest';
import { numIslands } from './solution';

describe('200. Number of Islands', () => {
  it('example 1 — one island', () => {
    const grid = [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ];
    expect(numIslands(grid)).toBe(1);
  });

  it('example 2 — three islands', () => {
    const grid = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ];
    expect(numIslands(grid)).toBe(3);
  });

  it('all water', () => {
    expect(numIslands([['0', '0'], ['0', '0']])).toBe(0);
  });

  it('empty', () => {
    expect(numIslands([])).toBe(0);
  });
});
