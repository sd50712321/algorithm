function solution(num, arr) {
  let answer = '';
  let min = Number.MIN_SAFE_INTEGER;
  for(const str of arr) {
    if (str.length > min) {
      min = str.length;
      answer = str;
    }
  }
  return answer;
}
console.log(solution(5,['teacher','time','student','beautiful','good']));