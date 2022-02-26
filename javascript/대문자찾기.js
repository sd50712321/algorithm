function solution(string) {
  let answer = 0;
  for(const str of string) {
    // if(str === str.toUpperCase()) answer++;
    const num = str.charCodeAt();
    if(num >= 65 && num <= 90) answer++;
  }
  return answer;
}

console.log(solution('KoreaTimeGood'));