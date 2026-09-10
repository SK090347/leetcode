# 51. N-Queens

**Difficulty:** Hard  
**Tags:** Backtracking, Array  
**LeetCode:** [N-Queens](https://leetcode.com/problems/n-queens/)

## Problem
Place `n` queens on an `n x n` chessboard so that no two queens attack each other. Return all distinct board configurations.

## Approach
Row-by-row backtracking. Track occupied columns, diagonals (`r - c`), and anti-diagonals (`r + c`). Place a queen when safe and recurse.

## Complexity
- **Time:** O(n!)
- **Space:** O(n²) for board + O(n) for sets/recursion
