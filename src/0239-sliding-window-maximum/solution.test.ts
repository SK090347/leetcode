import { describe, it, expect } from 'vitest';
import { maxSlidingWindow } from './solution.js';

describe('239. Sliding Window Maximum', () => {
  it('example 1', () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([
      3, 3, 5, 5, 6, 7,
    ]);
  });
  it('example 2', () => {
    expect(maxSlidingWindow([1], 1)).toEqual([1]);
  });
  it('k equals n', () => {
    expect(maxSlidingWindow([1, 2, 3], 3)).toEqual([3]);
  });
  it('decreasing', () => {
    expect(maxSlidingWindow([9, 8, 7, 6], 2)).toEqual([9, 8, 7]);
  });
});
