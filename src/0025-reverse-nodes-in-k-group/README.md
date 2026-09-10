# 25. Reverse Nodes in k-Group

**Difficulty:** Hard  
**Tags:** Linked List, Recursion  
**LeetCode:** [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)

## Problem
Given the head of a linked list, reverse the nodes of the list `k` at a time and return the modified list. Nodes fewer than `k` at the end stay in original order.

## Approach
Iterate groups of k. Locate the k-th node; reverse that segment in place; reconnect with previous group and continue.

## Complexity
- **Time:** O(n)
- **Space:** O(1)
