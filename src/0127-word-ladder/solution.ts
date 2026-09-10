/**
 * 127. Word Ladder
 * BFS from beginWord; each step changes one letter to a word in the wordList.
 */
export function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  const words = new Set(wordList);
  if (!words.has(endWord)) return 0;

  const queue: [string, number][] = [[beginWord, 1]];
  const visited = new Set<string>([beginWord]);

  while (queue.length > 0) {
    const [word, dist] = queue.shift()!;
    if (word === endWord) return dist;

    const chars = word.split('');
    for (let i = 0; i < chars.length; i++) {
      const original = chars[i]!;
      for (let c = 97; c <= 122; c++) {
        const ch = String.fromCharCode(c);
        if (ch === original) continue;
        chars[i] = ch;
        const next = chars.join('');
        if (words.has(next) && !visited.has(next)) {
          visited.add(next);
          queue.push([next, dist + 1]);
        }
      }
      chars[i] = original;
    }
  }
  return 0;
}
