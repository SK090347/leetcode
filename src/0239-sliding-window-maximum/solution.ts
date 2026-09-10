/**
 * 239. Sliding Window Maximum
 * Monotonic decreasing deque of indices; front is always the window max.
 */
export function maxSlidingWindow(nums: number[], k: number): number[] {
  const n = nums.length;
  if (n === 0 || k === 0) return [];
  const deque: number[] = []; // indices, nums decreasing
  const result: number[] = [];

  for (let i = 0; i < n; i++) {
    while (deque.length > 0 && deque[0]! <= i - k) {
      deque.shift();
    }
    while (deque.length > 0 && nums[deque[deque.length - 1]!]! <= nums[i]!) {
      deque.pop();
    }
    deque.push(i);
    if (i >= k - 1) {
      result.push(nums[deque[0]!]!);
    }
  }
  return result;
}
