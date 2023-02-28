// 시간복잡도 n! dfs로 풀면 안댐
function solution(numbers) {
  const chk = Array.from({ length: numbers.length }, () => 0);
  const n = chk.length;
  let max = Number.MIN_SAFE_INTEGER;
  function dfs(L, tmp) {
    if (L === n) {
      const str = tmp.join("");
      max = Math.max(max, parseInt(str));
    } else {
      for (let i = 0; i < numbers.length; i++) {
        if (chk[i] === 0) {
          chk[i] = 1;
          tmp.push(numbers[i]);
          dfs(L + 1, tmp);
          chk[i] = 0;
          tmp.pop();
        }
      }
    }
  }
  dfs(0, []);
  return max.toString();
}

function solution(numbers) {
  const result = numbers
    .map((v) => v.toString())
    .sort((a, b) => parseInt(b + a) - parseInt(a + b))
    .join("");
  return result[0] === "0" ? "0" : result;
}
