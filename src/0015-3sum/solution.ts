/**
 * 15. 3Sum (Medium)
 * Sort + two pointers: for each i, find pairs that sum to -nums[i].
 * Skip duplicates at all three pointers to emit unique triplets.
 */
export function threeSum(nums: number[]): number[][] {
  const n = nums.length;
  const sorted = [...nums].sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    const target = -sorted[i]!;
    let lo = i + 1;
    let hi = n - 1;
    while (lo < hi) {
      const sum = sorted[lo]! + sorted[hi]!;
      if (sum === target) {
        result.push([sorted[i]!, sorted[lo]!, sorted[hi]!]);
        lo++;
        hi--;
        while (lo < hi && sorted[lo] === sorted[lo - 1]) lo++;
        while (lo < hi && sorted[hi] === sorted[hi + 1]) hi--;
      } else if (sum < target) {
        lo++;
      } else {
        hi--;
      }
    }
  }
  return result;
}
