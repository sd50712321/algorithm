function solution(n, arr) {
  let lt = 0;
  let cnt = 0;
  let sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > n) {
      sum -= arr[lt++];
    }
    cnt += rt - lt + 1;
  }
  return cnt;
}

console.log(solution(5, [1, 3, 1, 2, 3]));
