# 207. Course Schedule

**Difficulty:** Medium  
**Tags:** Graph, Topological Sort, BFS  
**LeetCode:** [Course Schedule](https://leetcode.com/problems/course-schedule/)

## Problem
There are `numCourses` courses labeled from `0` to `numCourses - 1`. Given prerequisite pairs, return whether you can finish all courses (i.e., the graph is a DAG).

## Approach
Build an adjacency list and indegree array. Kahn's algorithm (BFS from zero-indegree nodes) processes courses; if every course is taken, there is no cycle.

## Complexity
- **Time:** O(V + E)
- **Space:** O(V + E)
