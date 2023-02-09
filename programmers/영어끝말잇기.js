function solution(n, words) {
  const set = new Set();
  let cnt = 0;
  for (let i = 0; i < words.length; i++) {
    cnt++;
    if (i === 0) {
      set.add(words[i]);
      continue;
    }
    const current = words[i];
    const prev = words[i - 1];
    if (set.has(current) || current[0] !== prev[prev.length - 1]) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    set.add(current);
  }
  return [0, 0];
}
