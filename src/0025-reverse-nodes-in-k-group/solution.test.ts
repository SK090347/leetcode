import { describe, it, expect } from 'vitest';
import { reverseKGroup } from './solution.js';
import { arrayToList, listToArray } from '../shared/ListNode.js';

describe('25. Reverse Nodes in k-Group', () => {
  it('example 1', () => {
    expect(listToArray(reverseKGroup(arrayToList([1, 2, 3, 4, 5]), 2))).toEqual([
      2, 1, 4, 3, 5,
    ]);
  });
  it('example 2', () => {
    expect(listToArray(reverseKGroup(arrayToList([1, 2, 3, 4, 5]), 3))).toEqual([
      3, 2, 1, 4, 5,
    ]);
  });
  it('k equals length', () => {
    expect(listToArray(reverseKGroup(arrayToList([1, 2, 3]), 3))).toEqual([3, 2, 1]);
  });
  it('k = 1', () => {
    expect(listToArray(reverseKGroup(arrayToList([1, 2, 3]), 1))).toEqual([1, 2, 3]);
  });
});
