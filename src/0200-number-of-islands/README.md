# 200. Number of Islands

**Difficulty:** Medium  
**Tags:** DFS, BFS, Matrix, Graph  
**LeetCode:** [Number of Islands](https://leetcode.com/problems/number-of-islands/)

## Problem
Given a 2D grid of `'1'` (land) and `'0'` (water), count the number of islands. An island is formed by connecting adjacent lands horizontally or vertically.

## Approach
Iterate the grid. When a `'1'` is found, increment the island count and DFS (or BFS) to mark the entire connected component as visited (`'0'`).

## Complexity
- **Time:** O(mn)
- **Space:** O(mn) worst-case recursion depth
