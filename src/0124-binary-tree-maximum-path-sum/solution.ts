import { TreeNode } from '../shared/TreeNode.js';

/**
 * 124. Binary Tree Maximum Path Sum
 * DFS: at each node, best path through node = leftGain + node + rightGain;
 * return to parent only one-side gain.
 */
export function maxPathSum(root: TreeNode | null): number {
  let best = -Infinity;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;
    const left = Math.max(0, dfs(node.left));
    const right = Math.max(0, dfs(node.right));
    best = Math.max(best, left + node.val + right);
    return node.val + Math.max(left, right);
  }

  dfs(root);
  return best;
}
