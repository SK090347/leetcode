/**
 * 84. Largest Rectangle in Histogram
 * Monotonic increasing stack of indices; area = height * width between nearest smaller bars.
 */
export function largestRectangleArea(heights: number[]): number {
  const stack: number[] = []; // indices with increasing heights
  let maxArea = 0;
  // sentinel 0 at end to flush stack
  const n = heights.length;

  for (let i = 0; i <= n; i++) {
    const h = i === n ? 0 : heights[i]!;
    while (stack.length > 0 && h < heights[stack[stack.length - 1]!]!) {
      const height = heights[stack.pop()!]!;
      const width = stack.length === 0 ? i : i - stack[stack.length - 1]! - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }
  return maxArea;
}
