import { describe, it, expect } from 'vitest';
import { maxPathSum } from './solution.js';
import { arrayToTree } from '../shared/TreeNode.js';

describe('124. Binary Tree Maximum Path Sum', () => {
  it('example 1', () => {
    expect(maxPathSum(arrayToTree([1, 2, 3]))).toBe(6);
  });
  it('example 2', () => {
    expect(maxPathSum(arrayToTree([-10, 9, 20, null, null, 15, 7]))).toBe(42);
  });
  it('single negative', () => {
    expect(maxPathSum(arrayToTree([-3]))).toBe(-3);
  });
  it('all negative path picks least negative chain', () => {
    expect(maxPathSum(arrayToTree([-2, -1]))).toBe(-1);
  });
});
