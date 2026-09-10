# 15. 3Sum

**Difficulty:** Medium  
**Tags:** Two Pointers, Sorting, Array  
**LeetCode:** [3Sum](https://leetcode.com/problems/3sum/)

## Problem
Given an integer array `nums`, return all unique triplets `[nums[i], nums[j], nums[k]]` such that `i != j != k` and `nums[i] + nums[j] + nums[k] == 0`.

## Approach
Sort the array. For each index `i`, run two pointers (`lo`, `hi`) to find pairs summing to `-nums[i]`. Skip duplicate values at every pointer so each triplet appears once.

## Complexity
- **Time:** O(n²)
- **Space:** O(1) extra (ignoring output)
