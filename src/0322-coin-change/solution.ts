/**
 * 322. Coin Change (Medium)
 * Unbounded knapsack DP: dp[a] = min coins to make amount a.
 */
export function coinChange(coins: number[], amount: number): number {
  const INF = amount + 1;
  const dp = new Array<number>(amount + 1).fill(INF);
  dp[0] = 0;

  for (let a = 1; a <= amount; a++) {
    for (const c of coins) {
      if (c <= a) {
        dp[a] = Math.min(dp[a]!, dp[a - c]! + 1);
      }
    }
  }
  return dp[amount]! > amount ? -1 : dp[amount]!;
}
