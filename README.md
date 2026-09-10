# LeetCode Algorithms Portfolio — TypeScript

**Typed Hard solutions, pattern-first writeups, Vitest coverage, and CI — built to show interview-ready DS&A engineering, not a dump of AC screenshots.**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/tested%20with-Vitest-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)
[![CI](https://github.com/SK090347/leetcode/actions/workflows/ci.yml/badge.svg)](https://github.com/SK090347/leetcode/actions/workflows/ci.yml)
[![License: MIT OR Apache-2.0](https://img.shields.io/badge/License-MIT%20OR%20Apache--2.0-blue.svg)](./NOTICE)
[![GitHub stars](https://img.shields.io/github/stars/SK090347/leetcode?style=social)](https://github.com/SK090347/leetcode)

**Author:** [Sumit Kumar Ta](https://github.com/SK090347) (`SK090347`)  
**Repo:** [github.com/SK090347/leetcode](https://github.com/SK090347/leetcode)

---

## What recruiters will see

This is a **production-minded algorithms portfolio**: every solution is strict TypeScript, unit-tested with Vitest, documented with approach + complexity, and gated by GitHub Actions CI (`npm ci` → `npm test` → `npm run build`).

| Skill area | Demonstrated by |
|------------|-----------------|
| **Graphs** | BFS (Word Ladder), DFS + memo (LIP), topological sort (Course Schedule), flood-fill (Islands) |
| **Dynamic programming** | 2D string DP (Edit Distance), interval DP (Burst Balloons), knapsack (Coin Change), tree DP (Max Path Sum) |
| **Heaps & ordering** | Min-heap merge (k lists), dual heaps (Median Finder), monotonic stack/deque |
| **Two pointers / windows** | Rain Water, Min Window Substring, Sliding Window Max, 3Sum |
| **Trees & lists** | Path sum, serialize/deserialize, reverse k-group, merge k lists |
| **Binary search & backtracking** | Median of two sorted arrays, N-Queens |
| **System design lite** | LRU Cache (hash map + doubly linked list) |
| **Engineering hygiene** | Shared `ListNode` / `TreeNode`, modular folders, CI, coverage script |

> **Honesty note:** These solutions were studied and implemented for learning and interview preparation. This repo does **not** claim LeetCode contest ratings, submission counts, or that every problem was accepted on leetcode.com from this codebase. The value is in the code quality, tests, and pattern clarity.

---

## Pattern taxonomy (Hard core)

| Technique | Problems |
|-----------|----------|
| **Two pointers / sliding window** | Trapping Rain Water · Minimum Window Substring · Sliding Window Maximum |
| **Stacks & deques** | Largest Rectangle in Histogram · Sliding Window Maximum |
| **Heaps** | Merge k Sorted Lists · Find Median from Data Stream |
| **Linked lists** | Reverse Nodes in k-Group · Merge k Sorted Lists |
| **Trees** | Binary Tree Maximum Path Sum · Serialize / Deserialize Binary Tree |
| **Dynamic programming** | Edit Distance · Burst Balloons |
| **Graphs / BFS / DFS** | Word Ladder · Longest Increasing Path in a Matrix |
| **Binary search** | Median of Two Sorted Arrays |
| **Backtracking** | N-Queens |

Deeper mapping (including Medium add-ons): [`docs/PATTERNS.md`](./docs/PATTERNS.md)

---

## Hard problems (15)

| # | Problem | Approach | Time | Space | Folder |
|---|---------|----------|------|-------|--------|
| [4](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Median of Two Sorted Arrays | Binary search partition | O(log min(m,n)) | O(1) | [`0004-…`](./src/0004-median-of-two-sorted-arrays) |
| [23](https://leetcode.com/problems/merge-k-sorted-lists/) | Merge k Sorted Lists | Min-heap | O(N log k) | O(k) | [`0023-…`](./src/0023-merge-k-sorted-lists) |
| [25](https://leetcode.com/problems/reverse-nodes-in-k-group/) | Reverse Nodes in k-Group | Linked-list reverse in-place | O(n) | O(1) | [`0025-…`](./src/0025-reverse-nodes-in-k-group) |
| [42](https://leetcode.com/problems/trapping-rain-water/) | Trapping Rain Water | Two pointers | O(n) | O(1) | [`0042-…`](./src/0042-trapping-rain-water) |
| [51](https://leetcode.com/problems/n-queens/) | N-Queens | Backtracking | O(n!) | O(n²) | [`0051-…`](./src/0051-n-queens) |
| [72](https://leetcode.com/problems/edit-distance/) | Edit Distance | 2D DP | O(mn) | O(mn) | [`0072-…`](./src/0072-edit-distance) |
| [76](https://leetcode.com/problems/minimum-window-substring/) | Minimum Window Substring | Sliding window + hash map | O(\|s\|+\|t\|) | O(Σ) | [`0076-…`](./src/0076-minimum-window-substring) |
| [84](https://leetcode.com/problems/largest-rectangle-in-histogram/) | Largest Rectangle in Histogram | Monotonic stack | O(n) | O(n) | [`0084-…`](./src/0084-largest-rectangle-in-histogram) |
| [124](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | Binary Tree Maximum Path Sum | DFS / tree DP | O(n) | O(h) | [`0124-…`](./src/0124-binary-tree-maximum-path-sum) |
| [127](https://leetcode.com/problems/word-ladder/) | Word Ladder | BFS | O(N·L·26) | O(N·L) | [`0127-…`](./src/0127-word-ladder) |
| [239](https://leetcode.com/problems/sliding-window-maximum/) | Sliding Window Maximum | Monotonic deque | O(n) | O(k) | [`0239-…`](./src/0239-sliding-window-maximum) |
| [295](https://leetcode.com/problems/find-median-from-data-stream/) | Find Median from Data Stream | Two heaps | O(log n) add | O(n) | [`0295-…`](./src/0295-find-median-from-data-stream) |
| [297](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | Serialize and Deserialize Binary Tree | BFS codec | O(n) | O(n) | [`0297-…`](./src/0297-serialize-and-deserialize-binary-tree) |
| [312](https://leetcode.com/problems/burst-balloons/) | Burst Balloons | Interval DP | O(n³) | O(n²) | [`0312-…`](./src/0312-burst-balloons) |
| [329](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) | Longest Increasing Path in a Matrix | DFS + memo | O(mn) | O(mn) | [`0329-…`](./src/0329-longest-increasing-path-in-a-matrix) |

---

## Medium add-ons (5) — labeled separately

Classic interview staples that round out the pattern set. **Hard remains the focus**; these are clearly Medium.

| # | Problem | Approach | Time | Space | Folder |
|---|---------|----------|------|-------|--------|
| [15](https://leetcode.com/problems/3sum/) | 3Sum | Sort + two pointers | O(n²) | O(1) extra | [`0015-…`](./src/0015-3sum) |
| [146](https://leetcode.com/problems/lru-cache/) | LRU Cache | Hash map + doubly linked list | O(1) ops | O(capacity) | [`0146-…`](./src/0146-lru-cache) |
| [200](https://leetcode.com/problems/number-of-islands/) | Number of Islands | DFS flood-fill | O(mn) | O(mn) | [`0200-…`](./src/0200-number-of-islands) |
| [207](https://leetcode.com/problems/course-schedule/) | Course Schedule | Topological sort (Kahn) | O(V+E) | O(V+E) | [`0207-…`](./src/0207-course-schedule) |
| [322](https://leetcode.com/problems/coin-change/) | Coin Change | Unbounded knapsack DP | O(amount · \|coins\|) | O(amount) | [`0322-…`](./src/0322-coin-change) |

---

## How to run

```bash
npm install
npm test                 # Vitest — all Hard + Medium suites
npm run test:coverage    # Vitest + v8 coverage report
npm run build            # tsc --noEmit (strict typecheck)
```

Requires **Node.js ≥ 18**.

---

## Code quality

- **Strict TypeScript** (`strict`, unused locals/params, consistent casing)
- **One folder per problem:** `solution.ts` · `solution.test.ts` · short `README.md`
- **Shared helpers:** [`src/shared/ListNode.ts`](./src/shared/ListNode.ts), [`src/shared/TreeNode.ts`](./src/shared/TreeNode.ts)
- **CI:** [`.github/workflows/ci.yml`](./.github/workflows/ci.yml) runs install → test → build on every push/PR to `main`
- **No contest-rank theater** — emphasis on clarity, complexity honesty, and green tests

### Layout

```
leetcode/
  README.md
  docs/PATTERNS.md
  .github/workflows/ci.yml
  package.json
  tsconfig.json
  vitest.config.ts
  LICENSE / LICENSE-APACHE / NOTICE
  src/
    shared/
    <NNNN-slug>/
      solution.ts
      solution.test.ts
      README.md
```

---

## License

Dual-licensed under **MIT** or **Apache-2.0** — see [`LICENSE`](./LICENSE), [`LICENSE-APACHE`](./LICENSE-APACHE), and [`NOTICE`](./NOTICE).

Copyright © 2026 [Sumit Kumar Ta](https://github.com/SK090347) (`SK090347`)
