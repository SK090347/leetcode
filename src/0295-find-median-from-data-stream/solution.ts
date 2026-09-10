/**
 * 295. Find Median from Data Stream
 * Two heaps: max-heap for lower half, min-heap for upper half.
 */

class BinaryHeap {
  private data: number[] = [];
  constructor(private cmp: (a: number, b: number) => boolean) {}

  size(): number {
    return this.data.length;
  }

  peek(): number | undefined {
    return this.data[0];
  }

  push(val: number): void {
    this.data.push(val);
    this.bubbleUp(this.data.length - 1);
  }

  pop(): number | undefined {
    if (this.data.length === 0) return undefined;
    const top = this.data[0]!;
    const last = this.data.pop()!;
    if (this.data.length > 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return top;
  }

  private bubbleUp(i: number): void {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (!this.cmp(this.data[i]!, this.data[p]!)) break;
      [this.data[i], this.data[p]] = [this.data[p]!, this.data[i]!];
      i = p;
    }
  }

  private bubbleDown(i: number): void {
    const n = this.data.length;
    while (true) {
      let best = i;
      const l = 2 * i + 1;
      const r = 2 * i + 2;
      if (l < n && this.cmp(this.data[l]!, this.data[best]!)) best = l;
      if (r < n && this.cmp(this.data[r]!, this.data[best]!)) best = r;
      if (best === i) break;
      [this.data[i], this.data[best]] = [this.data[best]!, this.data[i]!];
      i = best;
    }
  }
}

export class MedianFinder {
  private low = new BinaryHeap((a, b) => a > b); // max-heap
  private high = new BinaryHeap((a, b) => a < b); // min-heap

  addNum(num: number): void {
    if (this.low.size() === 0 || num <= this.low.peek()!) {
      this.low.push(num);
    } else {
      this.high.push(num);
    }
    // rebalance: low has equal or one more
    if (this.low.size() > this.high.size() + 1) {
      this.high.push(this.low.pop()!);
    } else if (this.high.size() > this.low.size()) {
      this.low.push(this.high.pop()!);
    }
  }

  findMedian(): number {
    if (this.low.size() > this.high.size()) {
      return this.low.peek()!;
    }
    return (this.low.peek()! + this.high.peek()!) / 2;
  }
}
