# Pattern → Problem Map

A recruiter-friendly index of techniques demonstrated in this portfolio.  
Hard problems are the core; Medium entries round out classic interview patterns.

## Two pointers & sliding window

| Pattern | Problems | Why it matters |
|---------|----------|----------------|
| Two pointers (ends / opposite) | [42 Trapping Rain Water](../src/0042-trapping-rain-water), [15 3Sum](../src/0015-3sum) | Bound decisions without extra arrays |
| Sliding window + frequency map | [76 Minimum Window Substring](../src/0076-minimum-window-substring) | Substring constraints in linear time |
| Monotonic deque window | [239 Sliding Window Maximum](../src/0239-sliding-window-maximum) | Maintain extrema in O(1) amortized |

## Stacks & heaps

| Pattern | Problems | Why it matters |
|---------|----------|----------------|
| Monotonic stack | [84 Largest Rectangle in Histogram](../src/0084-largest-rectangle-in-histogram) | Nearest-smaller relationships |
| Min-heap / priority queue | [23 Merge k Sorted Lists](../src/0023-merge-k-sorted-lists) | Merge k streams efficiently |
| Dual heaps (median) | [295 Find Median from Data Stream](../src/0295-find-median-from-data-stream) | Online statistics under updates |

## Linked lists & design

| Pattern | Problems | Why it matters |
|---------|----------|----------------|
| In-place group reverse | [25 Reverse Nodes in k-Group](../src/0025-reverse-nodes-in-k-group) | Pointer discipline without extra space |
| Hash map + doubly linked list | [146 LRU Cache](../src/0146-lru-cache) | Classic O(1) design interview |

## Trees

| Pattern | Problems | Why it matters |
|---------|----------|----------------|
| Tree DP / path gain | [124 Binary Tree Maximum Path Sum](../src/0124-binary-tree-maximum-path-sum) | Global optima from local DFS returns |
| Serialization codec | [297 Serialize and Deserialize Binary Tree](../src/0297-serialize-and-deserialize-binary-tree) | Lossless structure encoding |

## Dynamic programming

| Pattern | Problems | Why it matters |
|---------|----------|----------------|
| 2D string DP | [72 Edit Distance](../src/0072-edit-distance) | Classic Levenshtein recurrence |
| Interval DP | [312 Burst Balloons](../src/0312-burst-balloons) | Optimal last-burst ordering |
| Unbounded knapsack | [322 Coin Change](../src/0322-coin-change) | Min coins / combination DP |

## Graphs & search

| Pattern | Problems | Why it matters |
|---------|----------|----------------|
| BFS shortest path | [127 Word Ladder](../src/0127-word-ladder) | Implicit graph over word mutations |
| DFS + memoization | [329 Longest Increasing Path in a Matrix](../src/0329-longest-increasing-path-in-a-matrix) | DAG DP on grids |
| Topological sort (Kahn) | [207 Course Schedule](../src/0207-course-schedule) | Cycle detection in DAGs |
| Flood fill / connected components | [200 Number of Islands](../src/0200-number-of-islands) | Grid graph traversal |

## Binary search & backtracking

| Pattern | Problems | Why it matters |
|---------|----------|----------------|
| Binary search on partition | [4 Median of Two Sorted Arrays](../src/0004-median-of-two-sorted-arrays) | Log-time median without merge |
| Constraint backtracking | [51 N-Queens](../src/0051-n-queens) | Systematic search with pruning |

---

Each folder under `src/` contains `solution.ts`, Vitest tests, and a short approach README.
