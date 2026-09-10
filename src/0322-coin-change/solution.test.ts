import { describe, it, expect } from 'vitest';
import { coinChange } from './solution';

describe('322. Coin Change', () => {
  it('example 1', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3);
  });

  it('impossible', () => {
    expect(coinChange([2], 3)).toBe(-1);
  });

  it('zero amount', () => {
    expect(coinChange([1], 0)).toBe(0);
  });

  it('single coin exact', () => {
    expect(coinChange([1], 1)).toBe(1);
  });
});
