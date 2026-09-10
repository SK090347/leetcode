/**
 * 207. Course Schedule (Medium)
 * Topological sort via Kahn's BFS: detect cycles in the prerequisite graph.
 */
export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const indegree = new Array<number>(numCourses).fill(0);
  const adj: number[][] = Array.from({ length: numCourses }, () => []);

  for (const [course, pre] of prerequisites) {
    adj[pre!]!.push(course!);
    indegree[course!]!++;
  }

  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  let taken = 0;
  while (queue.length > 0) {
    const u = queue.shift()!;
    taken++;
    for (const v of adj[u]!) {
      indegree[v]!--;
      if (indegree[v] === 0) queue.push(v);
    }
  }
  return taken === numCourses;
}
