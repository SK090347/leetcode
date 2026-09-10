import { describe, it, expect } from 'vitest';
import { MedianFinder } from './solution.js';

describe('295. Find Median from Data Stream', () => {
  it('example 1', () => {
    const mf = new MedianFinder();
    mf.addNum(1);
    mf.addNum(2);
    expect(mf.findMedian()).toBe(1.5);
    mf.addNum(3);
    expect(mf.findMedian()).toBe(2);
  });
  it('single', () => {
    const mf = new MedianFinder();
    mf.addNum(5);
    expect(mf.findMedian()).toBe(5);
  });
  it('negatives', () => {
    const mf = new MedianFinder();
    mf.addNum(-1);
    expect(mf.findMedian()).toBe(-1);
    mf.addNum(-2);
    expect(mf.findMedian()).toBe(-1.5);
    mf.addNum(-3);
    expect(mf.findMedian()).toBe(-2);
  });
});
