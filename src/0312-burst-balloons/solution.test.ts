import { describe, it, expect } from 'vitest';
import { maxCoins } from './solution.js';

describe('312. Burst Balloons', () => {
  it('example 1', () => {
    expect(maxCoins([3, 1, 5, 8])).toBe(167);
  });
  it('example 2', () => {
    expect(maxCoins([1, 5])).toBe(10);
  });
  it('single', () => {
    expect(maxCoins([7])).toBe(7);
  });
  it('three', () => {
    expect(maxCoins([3, 1, 5])).toBe(35);
  });
});
