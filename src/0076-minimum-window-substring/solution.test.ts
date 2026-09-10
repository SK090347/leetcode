import { describe, it, expect } from 'vitest';
import { minWindow } from './solution.js';

describe('76. Minimum Window Substring', () => {
  it('example 1', () => {
    expect(minWindow('ADOBECODEBANC', 'ABC')).toBe('BANC');
  });
  it('example 2', () => {
    expect(minWindow('a', 'a')).toBe('a');
  });
  it('example 3 — impossible', () => {
    expect(minWindow('a', 'aa')).toBe('');
  });
  it('whole string', () => {
    expect(minWindow('abc', 'abc')).toBe('abc');
  });
  it('duplicates in t', () => {
    expect(minWindow('aaflslflsldkalskaaa', 'aaa')).toBe('aaa');
  });
});
