import { describe, it, expect } from 'vitest';
import { LRUCache } from './solution';

describe('146. LRU Cache', () => {
  it('example sequence', () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);
    cache.put(3, 3); // evicts 2
    expect(cache.get(2)).toBe(-1);
    cache.put(4, 4); // evicts 1
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(3)).toBe(3);
    expect(cache.get(4)).toBe(4);
  });

  it('update existing key refreshes recency', () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(1, 10);
    cache.put(3, 3); // evicts 2
    expect(cache.get(2)).toBe(-1);
    expect(cache.get(1)).toBe(10);
  });

  it('capacity 1', () => {
    const cache = new LRUCache(1);
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(2)).toBe(2);
  });
});
