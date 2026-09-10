# 124. Binary Tree Maximum Path Sum

**Difficulty:** Hard  
**Tags:** Tree, DFS, Dynamic Programming  
**LeetCode:** [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)

## Problem
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge. The path sum is the sum of node values. Return the maximum path sum of any non-empty path (path need not pass through root).

## Approach
Post-order DFS. At each node compute the best contribution upward (node + max(0, left), max(0, right)) and update a global max with the bend path left + node + right.

## Complexity
- **Time:** O(n)
- **Space:** O(h) recursion stack
