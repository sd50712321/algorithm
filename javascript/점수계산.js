function solution(num,arr) {
  let answer = 0, count = 0;
  for (let x of arr) {
    if (x===1) {
      count ++;
      answer += count;
    } else {
      count = 0;
    }
  }
  return answer;
}
console.log(solution(10,[1,0,1,1,1,0,0,1,1,0]));