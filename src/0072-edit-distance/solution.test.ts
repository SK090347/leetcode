import { describe, it, expect } from 'vitest';
import { minDistance } from './solution.js';

describe('72. Edit Distance', () => {
  it('example 1', () => {
    expect(minDistance('horse', 'ros')).toBe(3);
  });
  it('example 2', () => {
    expect(minDistance('intention', 'execution')).toBe(5);
  });
  it('identical', () => {
    expect(minDistance('abc', 'abc')).toBe(0);
  });
  it('empty', () => {
    expect(minDistance('', 'abc')).toBe(3);
    expect(minDistance('abc', '')).toBe(3);
  });
});
