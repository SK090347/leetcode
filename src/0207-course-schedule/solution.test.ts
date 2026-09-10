import { describe, it, expect } from 'vitest';
import { canFinish } from './solution';

describe('207. Course Schedule', () => {
  it('acyclic — can finish', () => {
    expect(canFinish(2, [[1, 0]])).toBe(true);
  });

  it('cycle — cannot finish', () => {
    expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
  });

  it('larger DAG', () => {
    expect(canFinish(4, [[1, 0], [2, 0], [3, 1], [3, 2]])).toBe(true);
  });

  it('no prerequisites', () => {
    expect(canFinish(3, [])).toBe(true);
  });
});
