import { ListNode } from '../shared/ListNode.js';

/**
 * 23. Merge k Sorted Lists
 * Min-heap (binary heap) of list heads; repeatedly pop smallest and push next.
 */
class MinHeap {
  private data: ListNode[] = [];

  size(): number {
    return this.data.length;
  }

  push(node: ListNode): void {
    this.data.push(node);
    this.bubbleUp(this.data.length - 1);
  }

  pop(): ListNode | undefined {
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
      if (this.data[i]!.val >= this.data[p]!.val) break;
      [this.data[i], this.data[p]] = [this.data[p]!, this.data[i]!];
      i = p;
    }
  }

  private bubbleDown(i: number): void {
    const n = this.data.length;
    while (true) {
      let smallest = i;
      const l = 2 * i + 1;
      const r = 2 * i + 2;
      if (l < n && this.data[l]!.val < this.data[smallest]!.val) smallest = l;
      if (r < n && this.data[r]!.val < this.data[smallest]!.val) smallest = r;
      if (smallest === i) break;
      [this.data[i], this.data[smallest]] = [this.data[smallest]!, this.data[i]!];
      i = smallest;
    }
  }
}

export function mergeKLists(lists: (ListNode | null)[]): ListNode | null {
  const heap = new MinHeap();
  for (const head of lists) {
    if (head) heap.push(head);
  }
  const dummy = new ListNode(0);
  let cur = dummy;
  while (heap.size() > 0) {
    const node = heap.pop()!;
    cur.next = node;
    cur = cur.next;
    if (node.next) heap.push(node.next);
  }
  return dummy.next;
}
