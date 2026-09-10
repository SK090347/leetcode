# LeetCode Hard — TypeScript Solutions

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/tested%20with-Vitest-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)
[![License: MIT OR Apache-2.0](https://img.shields.io/badge/License-MIT%20OR%20Apache--2.0-blue.svg)](./NOTICE)

Portfolio-ready **Hard**-difficulty LeetCode solutions in clean, typed TypeScript.  
Each problem includes a brief statement, approach notes, complexity analysis, and Vitest unit tests.

**Author:** [Sumit Kumar Ta](https://github.com/SK090347) (`SK090347`)  
**Repo:** [github.com/SK090347/leetcode](https://github.com/SK090347/leetcode)

---

## Quick start

```bash
npm install
npm test      # Vitest
npm run build # tsc --noEmit
```

---

## Problems (15 Hard)

| # | Problem | Approach | Time | Space | Folder |
|---|---------|----------|------|-------|--------|
| [4](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Median of Two Sorted Arrays | Binary search partition | O(log min(m,n)) | O(1) | [`0004-median-of-two-sorted-arrays`](./src/0004-median-of-two-sorted-arrays) |
| [23](https://leetcode.com/problems/merge-k-sorted-lists/) | Merge k Sorted Lists | Min-heap | O(N log k) | O(k) | [`0023-merge-k-sorted-lists`](./src/0023-merge-k-sorted-lists) |
| [25](https://leetcode.com/problems/reverse-nodes-in-k-group/) | Reverse Nodes in k-Group | Linked-list reverse in-place | O(n) | O(1) | [`0025-reverse-nodes-in-k-group`](./src/0025-reverse-nodes-in-k-group) |
| [42](https://leetcode.com/problems/trapping-rain-water/) | Trapping Rain Water | Two pointers | O(n) | O(1) | [`0042-trapping-rain-water`](./src/0042-trapping-rain-water) |
| [51](https://leetcode.com/problems/n-queens/) | N-Queens | Backtracking | O(n!) | O(n²) | [`0051-n-queens`](./src/0051-n-queens) |
| [72](https://leetcode.com/problems/edit-distance/) | Edit Distance | 2D DP | O(mn) | O(mn) | [`0072-edit-distance`](./src/0072-edit-distance) |
| [76](https://leetcode.com/problems/minimum-window-substring/) | Minimum Window Substring | Sliding window + hash map | O(\|s\|+\|t\|) | O(Σ) | [`0076-minimum-window-substring`](./src/0076-minimum-window-substring) |
| [84](https://leetcode.com/problems/largest-rectangle-in-histogram/) | Largest Rectangle in Histogram | Monotonic stack | O(n) | O(n) | [`0084-largest-rectangle-in-histogram`](./src/0084-largest-rectangle-in-histogram) |
| [124](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | Binary Tree Maximum Path Sum | DFS / tree DP | O(n) | O(h) | [`0124-binary-tree-maximum-path-sum`](./src/0124-binary-tree-maximum-path-sum) |
| [127](https://leetcode.com/problems/word-ladder/) | Word Ladder | BFS | O(N·L·26) | O(N·L) | [`0127-word-ladder`](./src/0127-word-ladder) |
| [239](https://leetcode.com/problems/sliding-window-maximum/) | Sliding Window Maximum | Monotonic deque | O(n) | O(k) | [`0239-sliding-window-maximum`](./src/0239-sliding-window-maximum) |
| [295](https://leetcode.com/problems/find-median-from-data-stream/) | Find Median from Data Stream | Two heaps | O(log n) add | O(n) | [`0295-find-median-from-data-stream`](./src/0295-find-median-from-data-stream) |
| [297](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | Serialize and Deserialize Binary Tree | BFS codec | O(n) | O(n) | [`0297-serialize-and-deserialize-binary-tree`](./src/0297-serialize-and-deserialize-binary-tree) |
| [312](https://leetcode.com/problems/burst-balloons/) | Burst Balloons | Interval DP | O(n³) | O(n²) | [`0312-burst-balloons`](./src/0312-burst-balloons) |
| [329](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) | Longest Increasing Path in a Matrix | DFS + memo | O(mn) | O(mn) | [`0329-longest-increasing-path-in-a-matrix`](./src/0329-longest-increasing-path-in-a-matrix) |

All problems are **Hard** difficulty on LeetCode.

---

## Project structure

```
leetcode/
  README.md
  package.json
  tsconfig.json
  vitest.config.ts
  LICENSE              # MIT
  LICENSE-APACHE       # Apache-2.0
  NOTICE               # Dual-license notice
  src/
    shared/            # ListNode, TreeNode helpers
    <NNNN-slug>/
      solution.ts
      solution.test.ts
      README.md
```

---

## Techniques covered

- **Two pointers / sliding window** — Rain Water, Min Window, Sliding Window Max  
- **Stacks & deques** — Histogram, Sliding Window Max  
- **Heaps** — Merge k Lists, Median Finder  
- **Linked lists** — Reverse k-Group, Merge k Lists  
- **Trees** — Max Path Sum, Serialize/Deserialize  
- **DP** — Edit Distance, Burst Balloons  
- **Graphs / BFS / DFS** — Word Ladder, Longest Increasing Path  
- **Binary search** — Median of Two Sorted Arrays  
- **Backtracking** — N-Queens  

---

## License

Dual-licensed under **MIT** or **Apache-2.0** — see [`LICENSE`](./LICENSE), [`LICENSE-APACHE`](./LICENSE-APACHE), and [`NOTICE`](./NOTICE).

Copyright © 2026 Sumit Kumar Ta (SK090347)
