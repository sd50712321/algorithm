function solution(a,b,c) {
  let answer;
  let max;
  let sum = a+b+c;
  if (a>b) max = a;
  else max = b;
  if (max < c) max = c;
  
  if ((sum - max) >= max) answer = true;
  else answer = false;
  return answer;
}

console.log(solution(6,7,11));