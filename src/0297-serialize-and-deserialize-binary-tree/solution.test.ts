import { describe, it, expect } from 'vitest';
import { serialize, deserialize, Codec } from './solution.js';
import { arrayToTree, treeToArray } from '../shared/TreeNode.js';

describe('297. Serialize and Deserialize Binary Tree', () => {
  it('example 1', () => {
    const root = arrayToTree([1, 2, 3, null, null, 4, 5]);
    const data = serialize(root);
    expect(treeToArray(deserialize(data))).toEqual([1, 2, 3, null, null, 4, 5]);
  });
  it('empty', () => {
    expect(deserialize(serialize(null))).toBeNull();
  });
  it('single node', () => {
    const root = arrayToTree([1]);
    expect(treeToArray(deserialize(serialize(root)))).toEqual([1]);
  });
  it('codec class', () => {
    const codec = new Codec();
    const root = arrayToTree([1, 2, 3]);
    expect(treeToArray(codec.deserialize(codec.serialize(root)))).toEqual([1, 2, 3]);
  });
  it('negative values', () => {
    const root = arrayToTree([-1, 0, 1]);
    expect(treeToArray(deserialize(serialize(root)))).toEqual([-1, 0, 1]);
  });
});
