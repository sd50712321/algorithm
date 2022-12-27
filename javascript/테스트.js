function solution(n) {
  var answer = 0;
  let divideFive = 0;
  let divideThree = 0;
  while (true) {
    if (n < 0) {
      answer = -1;
      break;
    } else if (n === 0) {
      answer = divideFive + divideThree;
      break;
    }
    if (n % 5 === 0) {
      divideFive += n / 5;
      n = 0;
    } else if (!(n === 0) && (n % 10) % 3 === 0) {
      divideThree = (n % 10) / 3;
      n = n - (n % 10);
    } else {
      divideFive += 1;
      n -= 5;
    }
  }
  return answer;
}

// console.log(solution(15));
// console.log(solution(7));
// console.log(solution(123));
console.log(solution(31));
console.log(solution(34));
