function solution(a) {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0 ; i<a.length ; i++) {
    if (a[i] < min) {
      min = a[i];
    }
  }
  answer = min;
  return answer;
}

console.log(solution([5, 3, 7, 11, 2, 15, 17]));