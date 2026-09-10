# 312. Burst Balloons

**Difficulty:** Hard  
**Tags:** Dynamic Programming, Interval DP  
**LeetCode:** [Burst Balloons](https://leetcode.com/problems/burst-balloons/)

## Problem
You have `n` balloons indexed `0..n-1`. Bursting balloon `i` yields `nums[i-1] * nums[i] * nums[i+1]` coins (out-of-bounds treated as 1). Return the maximum coins you can collect by bursting all balloons optimally.

## Approach
Pad with 1s. Interval DP where `dp[l][r]` is the max coins from bursting balloons between open interval `(l, r)`, choosing the last balloon `k` in that interval.

## Complexity
- **Time:** O(n³)
- **Space:** O(n²)
