/**
 * 312. Burst Balloons
 * Interval DP: dp[l][r] = max coins bursting balloons strictly between l and r,
 * with nums[l] and nums[r] as boundaries (not burst yet).
 */
export function maxCoins(nums: number[]): number {
  const arr = [1, ...nums, 1];
  const n = arr.length;
  const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  for (let len = 2; len < n; len++) {
    for (let left = 0; left + len < n; left++) {
      const right = left + len;
      for (let k = left + 1; k < right; k++) {
        const coins =
          arr[left]! * arr[k]! * arr[right]! + dp[left]![k]! + dp[k]![right]!;
        if (coins > dp[left]![right]!) {
          dp[left]![right] = coins;
        }
      }
    }
  }
  return dp[0]![n - 1]!;
}
