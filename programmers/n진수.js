function solution(n, t, m, p) {
  let result = "";
  let i = 0;
  for (let i = 0; i < t * m; i++) {
    const ch = i.toString(n);
    for (let j = 0; j < ch.length; j++) {
      result += ch[j];
    }
  }
  const answer = result.split("").filter((v, i) => {
    if (i % m === p - 1) {
      return v.toString().toUpperCase();
    }
  });
  return answer
    .map((v) => v.toUpperCase())
    .join("")
    .slice(0, t);
}
