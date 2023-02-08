function solution(n) {
  const chk = Array.from({ length: n + 1 }, () => 0);
  chk[1] = 2;
  chk[2] = 3;
  for (let i = 3; i <= n; i++) {
    chk[i] = chk[i - 1] + chk[i - 2];
  }
  return chk[n];
}

console.log(solution(7));
