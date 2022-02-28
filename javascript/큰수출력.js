function solution(num,arr) {
  const answer = [];
  let min = Number.MIN_SAFE_INTEGER
  for (const item of arr) {
    if (item > min) {
      answer.push(item);
    } 
    min = item;
  }
  return answer;
}
console.log(solution(6,[7,3,9,5,6,12]));