# 146. LRU Cache

**Difficulty:** Medium  
**Tags:** Hash Map, Doubly Linked List, Design  
**LeetCode:** [LRU Cache](https://leetcode.com/problems/lru-cache/)

## Problem
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache with O(1) `get` and `put`.

## Approach
Combine a hash map (key → node) with a doubly linked list ordered by recency. On access/update, move the node to the front; on capacity overflow, evict the tail.

## Complexity
- **Time:** O(1) per `get` / `put`
- **Space:** O(capacity)
