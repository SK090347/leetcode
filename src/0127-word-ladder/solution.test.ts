import { describe, it, expect } from 'vitest';
import { ladderLength } from './solution.js';

describe('127. Word Ladder', () => {
  it('example 1', () => {
    expect(
      ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']),
    ).toBe(5);
  });
  it('example 2 — unreachable', () => {
    expect(
      ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']),
    ).toBe(0);
  });
  it('begin equals end present', () => {
    expect(ladderLength('a', 'c', ['a', 'b', 'c'])).toBe(2);
  });
  it('direct neighbor', () => {
    expect(ladderLength('hot', 'dot', ['dot', 'dog'])).toBe(2);
  });
});
