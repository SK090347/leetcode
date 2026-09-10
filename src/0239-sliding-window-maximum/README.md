# 239. Sliding Window Maximum

**Difficulty:** Hard  
**Tags:** Sliding Window, Monotonic Deque, Queue  
**LeetCode:** [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)

## Problem
You are given an array of integers `nums` and a sliding window of size `k`. Return an array of the maximum in each window position as it moves from left to right.

## Approach
Maintain a monotonic decreasing deque of indices. The front is always the max in the current window. Evict indices outside the window and values ≤ the incoming value.

## Complexity
- **Time:** O(n)
- **Space:** O(k)
