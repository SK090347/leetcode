import { describe, it, expect } from 'vitest';
import { threeSum } from './solution';

function sortTriplets(triplets: number[][]): number[][] {
  return triplets
    .map((t) => [...t].sort((a, b) => a - b))
    .sort((a, b) => a[0]! - b[0]! || a[1]! - b[1]! || a[2]! - b[2]!);
}

describe('15. 3Sum', () => {
  it('example 1', () => {
    expect(sortTriplets(threeSum([-1, 0, 1, 2, -1, -4]))).toEqual(
      sortTriplets([
        [-1, -1, 2],
        [-1, 0, 1],
      ]),
    );
  });

  it('no triplets', () => {
    expect(threeSum([0, 1, 1])).toEqual([]);
  });

  it('all zeros', () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });

  it('empty / short', () => {
    expect(threeSum([])).toEqual([]);
    expect(threeSum([1, 2])).toEqual([]);
  });
});
