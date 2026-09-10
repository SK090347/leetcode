import { describe, it, expect } from 'vitest';
import { mergeKLists } from './solution.js';
import { arrayToList, listToArray } from '../shared/ListNode.js';

describe('23. Merge k Sorted Lists', () => {
  it('example 1', () => {
    const lists = [
      arrayToList([1, 4, 5]),
      arrayToList([1, 3, 4]),
      arrayToList([2, 6]),
    ];
    expect(listToArray(mergeKLists(lists))).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
  });
  it('empty lists', () => {
    expect(listToArray(mergeKLists([]))).toEqual([]);
  });
  it('single empty', () => {
    expect(listToArray(mergeKLists([null]))).toEqual([]);
  });
  it('one list', () => {
    expect(listToArray(mergeKLists([arrayToList([1, 2, 3])]))).toEqual([1, 2, 3]);
  });
});
