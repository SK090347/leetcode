# 322. Coin Change

**Difficulty:** Medium  
**Tags:** Dynamic Programming, Unbounded Knapsack  
**LeetCode:** [Coin Change](https://leetcode.com/problems/coin-change/)

## Problem
Given coin denominations and a total `amount`, return the fewest number of coins needed to make that amount, or `-1` if impossible. Unlimited supply of each coin.

## Approach
Bottom-up DP where `dp[a]` is the minimum coins to make amount `a`. For each amount, try every coin and take `min(dp[a], dp[a - coin] + 1)`.

## Complexity
- **Time:** O(amount · |coins|)
- **Space:** O(amount)
