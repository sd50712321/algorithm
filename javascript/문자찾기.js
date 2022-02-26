function solution(string, word) {
  let answer = s.split(word)
  /* for (let x of string) {
    if (x === word) answer++;
  } */
  
  return answer;
}

console.log(solution('COMPUTERPROGRAMMING', 'R'));