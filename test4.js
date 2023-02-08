function solution(begin, end) {
  const result = [];
  for (let i = begin; i <= end; i++) {
    const start = parseInt(i / 2);
    if (start === 0) result.push(0);
    for (let j = start; j > 0; j--) {
      if (j > 10000000) {
        result.push(1);
        break;
      }
      if (i % j === 0) {
        result.push(j);
        break;
      }
    }
  }
  return result;
}

console.log(solution(1, 10));
console.log(solution(11, 20));
console.log(solution(932869174, 932869175));
