import { describe, it, expect } from 'vitest';
import { trap } from './solution.js';

describe('42. Trapping Rain Water', () => {
  it('example 1', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });
  it('example 2', () => {
    expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
  });
  it('no water', () => {
    expect(trap([1, 2, 3, 4])).toBe(0);
  });
  it('empty / short', () => {
    expect(trap([])).toBe(0);
    expect(trap([1])).toBe(0);
    expect(trap([1, 2])).toBe(0);
  });
  it('valley', () => {
    expect(trap([5, 0, 5])).toBe(5);
  });
});
