/**
 * 4. Median of Two Sorted Arrays
 * Binary search on partition of the smaller array so left halves have equal size
 * (or left has one more) and max(left) <= min(right).
 */
export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  const m = nums1.length;
  const n = nums2.length;
  let lo = 0;
  let hi = m;
  const half = (m + n + 1) >> 1;

  while (lo <= hi) {
    const i = (lo + hi) >> 1;
    const j = half - i;

    const maxLeft1 = i === 0 ? -Infinity : nums1[i - 1]!;
    const minRight1 = i === m ? Infinity : nums1[i]!;
    const maxLeft2 = j === 0 ? -Infinity : nums2[j - 1]!;
    const minRight2 = j === n ? Infinity : nums2[j]!;

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
      }
      return Math.max(maxLeft1, maxLeft2);
    }
    if (maxLeft1 > minRight2) {
      hi = i - 1;
    } else {
      lo = i + 1;
    }
  }
  throw new Error('unreachable');
}
