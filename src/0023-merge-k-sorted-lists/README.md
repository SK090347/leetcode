# 23. Merge k Sorted Lists

**Difficulty:** Hard  
**Tags:** Heap, Linked List, Divide and Conquer  
**LeetCode:** [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)

## Problem
Merge `k` sorted linked lists into one sorted linked list.

## Approach
Min-heap of current heads. Pop the smallest node, append to result, and push its `next` if present. Total of N nodes with heap size ≤ k.

## Complexity
- **Time:** O(N log k)
- **Space:** O(k)
