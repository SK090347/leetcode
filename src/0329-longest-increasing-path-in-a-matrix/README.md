# 329. Longest Increasing Path in a Matrix

**Difficulty:** Hard  
**Tags:** DFS, Memoization, Graph, Topological Sort  
**LeetCode:** [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/)

## Problem
Given an `m x n` integers matrix, return the length of the longest increasing path. You may move in four directions; you cannot move diagonally or outside the boundary.

## Approach
DFS with memoization from every cell. Recurse only to neighbors with a strictly larger value; cache the longest path starting at each cell.

## Complexity
- **Time:** O(m · n)
- **Space:** O(m · n)
