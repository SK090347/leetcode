# leetcode

Notes from grinding Hard (and a few Medium) problems in TypeScript. Each folder has a solution, Vitest tests, and a short writeup with complexity — mostly so I remember *why* the trick worked two weeks later.

[![CI](https://github.com/SK090347/leetcode/actions/workflows/ci.yml/badge.svg)](https://github.com/SK090347/leetcode/actions/workflows/ci.yml)
[![License: MIT OR Apache-2.0](https://img.shields.io/badge/License-MIT%20OR%20Apache--2.0-blue.svg)](./NOTICE)

Sumit Kumar Ta ([SK090347](https://github.com/SK090347))

I studied these for learning and interview prep. This is **not** a claim about contest rating or that every problem was AC’d on leetcode.com from this exact tree — just code I’d be okay reopening under a clock.

## Patterns I keep coming back to

| Technique | Examples here |
|-----------|----------------|
| Two pointers / sliding window | Rain Water · Min Window · Sliding Window Max |
| Stacks & deques | Largest Rectangle · Sliding Window Max |
| Heaps | Merge k lists · Median Finder |
| Linked lists | Reverse k-Group · Merge k lists |
| Trees | Max Path Sum · Serialize/Deserialize |
| DP | Edit Distance · Burst Balloons |
| Graphs / BFS / DFS | Word Ladder · LIP in a Matrix |
| Binary search | Median of Two Sorted Arrays |
| Backtracking | N-Queens |

More mapping: [`docs/PATTERNS.md`](./docs/PATTERNS.md)

## Hard (15)

| # | Problem | Approach | Time | Folder |
|---|---------|----------|------|--------|
| [4](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Median of Two Sorted Arrays | Binary search partition | O(log min(m,n)) | [`0004-…`](./src/0004-median-of-two-sorted-arrays) |
| [23](https://leetcode.com/problems/merge-k-sorted-lists/) | Merge k Sorted Lists | Min-heap | O(N log k) | [`0023-…`](./src/0023-merge-k-sorted-lists) |
| [25](https://leetcode.com/problems/reverse-nodes-in-k-group/) | Reverse Nodes in k-Group | In-place reverse | O(n) | [`0025-…`](./src/0025-reverse-nodes-in-k-group) |
| [42](https://leetcode.com/problems/trapping-rain-water/) | Trapping Rain Water | Two pointers | O(n) | [`0042-…`](./src/0042-trapping-rain-water) |
| [51](https://leetcode.com/problems/n-queens/) | N-Queens | Backtracking | O(n!) | [`0051-…`](./src/0051-n-queens) |
| [72](https://leetcode.com/problems/edit-distance/) | Edit Distance | 2D DP | O(mn) | [`0072-…`](./src/0072-edit-distance) |
| [76](https://leetcode.com/problems/minimum-window-substring/) | Minimum Window Substring | Window + map | O(\|s\|+\|t\|) | [`0076-…`](./src/0076-minimum-window-substring) |
| [84](https://leetcode.com/problems/largest-rectangle-in-histogram/) | Largest Rectangle in Histogram | Monotonic stack | O(n) | [`0084-…`](./src/0084-largest-rectangle-in-histogram) |
| [124](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | Binary Tree Maximum Path Sum | Tree DP | O(n) | [`0124-…`](./src/0124-binary-tree-maximum-path-sum) |
| [127](https://leetcode.com/problems/word-ladder/) | Word Ladder | BFS | O(N·L·26) | [`0127-…`](./src/0127-word-ladder) |
| [239](https://leetcode.com/problems/sliding-window-maximum/) | Sliding Window Maximum | Monotonic deque | O(n) | [`0239-…`](./src/0239-sliding-window-maximum) |
| [295](https://leetcode.com/problems/find-median-from-data-stream/) | Find Median from Data Stream | Two heaps | O(log n) add | [`0295-…`](./src/0295-find-median-from-data-stream) |
| [297](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | Serialize / Deserialize Binary Tree | BFS codec | O(n) | [`0297-…`](./src/0297-serialize-and-deserialize-binary-tree) |
| [312](https://leetcode.com/problems/burst-balloons/) | Burst Balloons | Interval DP | O(n³) | [`0312-…`](./src/0312-burst-balloons) |
| [329](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) | Longest Increasing Path in a Matrix | DFS + memo | O(mn) | [`0329-…`](./src/0329-longest-increasing-path-in-a-matrix) |

## Medium add-ons (5)

| # | Problem | Approach | Folder |
|---|---------|----------|--------|
| [15](https://leetcode.com/problems/3sum/) | 3Sum | Sort + two pointers | [`0015-…`](./src/0015-3sum) |
| [146](https://leetcode.com/problems/lru-cache/) | LRU Cache | Hash map + DLL | [`0146-…`](./src/0146-lru-cache) |
| [200](https://leetcode.com/problems/number-of-islands/) | Number of Islands | DFS flood-fill | [`0200-…`](./src/0200-number-of-islands) |
| [207](https://leetcode.com/problems/course-schedule/) | Course Schedule | Kahn topo | [`0207-…`](./src/0207-course-schedule) |
| [322](https://leetcode.com/problems/coin-change/) | Coin Change | Unbounded knapsack | [`0322-…`](./src/0322-coin-change) |

## Run

```bash
npm install
npm test
npm run test:coverage
npm run build    # tsc --noEmit
```

Node ≥ 18. One folder per problem (`solution.ts`, `solution.test.ts`, short README). Shared `ListNode` / `TreeNode` under `src/shared/`.

## License

MIT OR Apache-2.0 — see NOTICE.
