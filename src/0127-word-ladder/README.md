# 127. Word Ladder

**Difficulty:** Hard  
**Tags:** BFS, Hash Set, String  
**LeetCode:** [Word Ladder](https://leetcode.com/problems/word-ladder/)

## Problem
A transformation sequence from `beginWord` to `endWord` using `wordList` changes exactly one letter at a time; each intermediate word must be in `wordList`. Return the number of words in the shortest transformation sequence, or `0` if none exists.

## Approach
BFS from `beginWord`. At each step try all 26 letter substitutions for each position; enqueue unseen words that exist in the word set. First time we reach `endWord` is shortest.

## Complexity
- **Time:** O(N · L · 26) where N = wordList size, L = word length
- **Space:** O(N · L)
