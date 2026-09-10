import { describe, it, expect } from 'vitest';
import { findMedianSortedArrays } from './solution.js';

describe('4. Median of Two Sorted Arrays', () => {
  it('example 1', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });
  it('example 2', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });
  it('one empty', () => {
    expect(findMedianSortedArrays([], [1])).toBe(1);
    expect(findMedianSortedArrays([2], [])).toBe(2);
  });
  it('uneven lengths', () => {
    expect(findMedianSortedArrays([1, 2, 3, 4, 5], [6, 7])).toBe(4);
  });
  it('negatives', () => {
    expect(findMedianSortedArrays([-5, -3, -1], [-2, 0, 2])).toBe(-1.5);
  });
});
