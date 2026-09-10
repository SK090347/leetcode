# 4. Median of Two Sorted Arrays

**Difficulty:** Hard  
**Tags:** Binary Search, Array, Divide and Conquer  
**LeetCode:** [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)

## Problem
Given two sorted arrays `nums1` and `nums2` of size `m` and `n`, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

## Approach
Binary-search a partition of the smaller array such that the combined left half has the correct size and every left element ≤ every right element. Median is then max(left) or average of max(left) and min(right).

## Complexity
- **Time:** O(log(min(m, n)))
- **Space:** O(1)
