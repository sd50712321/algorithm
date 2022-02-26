function solution(day, arr) {
  let answer = 0;
  for (const number of arr) {
    if(number % 10 === day)
      answer += 1;
  }
  return answer;
}

console.log(solution(3,[25,23,11,47,53,17,33]));