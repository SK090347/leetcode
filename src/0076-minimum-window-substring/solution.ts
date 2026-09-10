/**
 * 76. Minimum Window Substring
 * Sliding window with need/have counters over character frequencies.
 */
export function minWindow(s: string, t: string): string {
  if (t.length === 0 || s.length < t.length) return '';

  const need = new Map<string, number>();
  for (const c of t) {
    need.set(c, (need.get(c) ?? 0) + 1);
  }
  const required = need.size;
  let formed = 0;
  const window = new Map<string, number>();

  let bestLen = Infinity;
  let bestStart = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const c = s[right]!;
    window.set(c, (window.get(c) ?? 0) + 1);
    if (need.has(c) && window.get(c) === need.get(c)) {
      formed++;
    }

    while (left <= right && formed === required) {
      const len = right - left + 1;
      if (len < bestLen) {
        bestLen = len;
        bestStart = left;
      }
      const lc = s[left]!;
      window.set(lc, (window.get(lc) ?? 0) - 1);
      if (need.has(lc) && (window.get(lc) ?? 0) < need.get(lc)!) {
        formed--;
      }
      left++;
    }
  }

  return bestLen === Infinity ? '' : s.slice(bestStart, bestStart + bestLen);
}
