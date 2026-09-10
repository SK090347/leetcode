# 295. Find Median from Data Stream

**Difficulty:** Hard  
**Tags:** Heap, Design, Two Heaps  
**LeetCode:** [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)

## Problem
Design a data structure that supports adding numbers from a stream and finding the median of all numbers so far.

## Approach
Max-heap for the lower half, min-heap for the upper half. Keep sizes balanced so the median is either the top of the max-heap or the average of both tops.

## Complexity
- **addNum:** O(log n)
- **findMedian:** O(1)
- **Space:** O(n)
