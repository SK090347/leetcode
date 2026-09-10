# 84. Largest Rectangle in Histogram

**Difficulty:** Hard  
**Tags:** Stack, Monotonic Stack, Array  
**LeetCode:** [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)

## Problem
Given an array of bar heights forming a histogram (width 1 each), return the area of the largest rectangle.

## Approach
Monotonic increasing stack of indices. When a shorter bar appears, pop and compute area using the popped height and the distance to the previous smaller bar.

## Complexity
- **Time:** O(n)
- **Space:** O(n)
