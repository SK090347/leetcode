# 72. Edit Distance

**Difficulty:** Hard  
**Tags:** Dynamic Programming, String  
**LeetCode:** [Edit Distance](https://leetcode.com/problems/edit-distance/)

## Problem
Given two words `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`. Operations: insert, delete, or replace a character.

## Approach
2D DP. If characters match, take diagonal; otherwise take 1 + min(insert, delete, replace).

## Complexity
- **Time:** O(m · n)
- **Space:** O(m · n) (can be optimized to O(min(m, n)))
