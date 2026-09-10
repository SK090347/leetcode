# 76. Minimum Window Substring

**Difficulty:** Hard  
**Tags:** Sliding Window, Hash Map, String  
**LeetCode:** [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)

## Problem
Given strings `s` and `t`, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included. Return `""` if none exists.

## Approach
Expand a right pointer until the window covers all required character counts, then shrink from the left to find the minimal valid window. Track `need` / `have` frequency maps.

## Complexity
- **Time:** O(|s| + |t|)
- **Space:** O(|s| + |t|) for character maps (bounded by alphabet size in practice)
