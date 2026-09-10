import { ListNode } from '../shared/ListNode.js';

/**
 * 25. Reverse Nodes in k-Group
 * Reverse every contiguous group of k nodes; leave remainder as-is.
 */
export function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head || k <= 1) return head;

  const dummy = new ListNode(0, head);
  let groupPrev = dummy;

  while (true) {
    let kth: ListNode | null = groupPrev;
    for (let i = 0; i < k; i++) {
      kth = kth.next;
      if (!kth) return dummy.next;
    }
    const groupNext = kth.next;

    // reverse [groupPrev.next .. kth]
    let prev: ListNode | null = groupNext;
    let cur: ListNode | null = groupPrev.next;
    while (cur !== groupNext) {
      const nxt = cur!.next;
      cur!.next = prev;
      prev = cur;
      cur = nxt;
    }

    const newGroupEnd = groupPrev.next!;
    groupPrev.next = kth;
    groupPrev = newGroupEnd;
  }
}
