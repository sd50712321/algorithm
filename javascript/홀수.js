function solution(a) {
  let answer;
  answer = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0 ; i < a.length ; i++) {
    if(a[i] % 2 !== 0) {
      answer = answer + a[i];
      if (a[i] < min) min = a[i];
    }
  }
  console.log(answer);
  console.log(min);
}

solution([12, 77, 38, 41, 53, 92, 85]);