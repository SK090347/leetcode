import { describe, it, expect } from 'vitest';
import { largestRectangleArea } from './solution.js';

describe('84. Largest Rectangle in Histogram', () => {
  it('example 1', () => {
    expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toBe(10);
  });
  it('example 2', () => {
    expect(largestRectangleArea([2, 4])).toBe(4);
  });
  it('single bar', () => {
    expect(largestRectangleArea([5])).toBe(5);
  });
  it('increasing', () => {
    expect(largestRectangleArea([1, 2, 3, 4, 5])).toBe(9);
  });
  it('all equal', () => {
    expect(largestRectangleArea([3, 3, 3, 3])).toBe(12);
  });
});
