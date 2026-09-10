# 297. Serialize and Deserialize Binary Tree

**Difficulty:** Hard  
**Tags:** Tree, BFS, Design, String  
**LeetCode:** [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)

## Problem
Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how the serialization works as long as a tree can be reconstructed.

## Approach
BFS level-order encoding with explicit `null` markers for missing children. Deserialize by rebuilding with a queue in the same order.

## Complexity
- **Time:** O(n)
- **Space:** O(n)
