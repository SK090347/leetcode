/**
 * 146. LRU Cache (Medium)
 * Hash map + doubly linked list: O(1) get/put with eviction of least-recently used.
 */
class Node {
  key: number;
  value: number;
  prev: Node | null = null;
  next: Node | null = null;
  constructor(key = 0, value = 0) {
    this.key = key;
    this.value = value;
  }
}

export class LRUCache {
  private capacity: number;
  private map = new Map<number, Node>();
  private head = new Node();
  private tail = new Node();

  constructor(capacity: number) {
    this.capacity = capacity;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    const node = this.map.get(key);
    if (!node) return -1;
    this.moveToFront(node);
    return node.value;
  }

  put(key: number, value: number): void {
    const existing = this.map.get(key);
    if (existing) {
      existing.value = value;
      this.moveToFront(existing);
      return;
    }
    const node = new Node(key, value);
    this.map.set(key, node);
    this.addToFront(node);
    if (this.map.size > this.capacity) {
      const lru = this.tail.prev!;
      this.remove(lru);
      this.map.delete(lru.key);
    }
  }

  private moveToFront(node: Node): void {
    this.remove(node);
    this.addToFront(node);
  }

  private addToFront(node: Node): void {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next!.prev = node;
    this.head.next = node;
  }

  private remove(node: Node): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }
}
