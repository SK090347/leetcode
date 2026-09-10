# 42. Trapping Rain Water

**Difficulty:** Hard  
**Tags:** Two Pointers, Array, Stack  
**LeetCode:** [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)

## Problem
Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

## Approach
Two pointers from both ends. Track `leftMax` / `rightMax`. Always move the side with the smaller height — that side's water is bounded by the known max on that side.

## Complexity
- **Time:** O(n)
- **Space:** O(1)
