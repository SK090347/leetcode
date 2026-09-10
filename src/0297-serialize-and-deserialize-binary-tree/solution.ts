import { TreeNode } from '../shared/TreeNode.js';

/**
 * 297. Serialize and Deserialize Binary Tree
 * BFS level-order with "null" markers; round-trip lossless.
 */
export function serialize(root: TreeNode | null): string {
  if (!root) return '';
  const parts: string[] = [];
  const queue: (TreeNode | null)[] = [root];
  while (queue.length > 0) {
    const node = queue.shift()!;
    if (node === null) {
      parts.push('null');
    } else {
      parts.push(String(node.val));
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  // trim trailing nulls for compactness (optional but nice)
  while (parts.length > 0 && parts[parts.length - 1] === 'null') {
    parts.pop();
  }
  return parts.join(',');
}

export function deserialize(data: string): TreeNode | null {
  if (!data) return null;
  const parts = data.split(',');
  const root = new TreeNode(Number(parts[0]));
  const queue: TreeNode[] = [root];
  let i = 1;
  while (queue.length > 0 && i < parts.length) {
    const node = queue.shift()!;
    if (i < parts.length && parts[i] !== 'null') {
      node.left = new TreeNode(Number(parts[i]));
      queue.push(node.left);
    }
    i++;
    if (i < parts.length && parts[i] !== 'null') {
      node.right = new TreeNode(Number(parts[i]));
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

/** Codec wrapper matching LeetCode API style. */
export class Codec {
  serialize(root: TreeNode | null): string {
    return serialize(root);
  }
  deserialize(data: string): TreeNode | null {
    return deserialize(data);
  }
}
