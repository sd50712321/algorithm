function solution(num,arr) {
  let answer = 0;
  let min = Number.MIN_SAFE_INTEGER
  for (const student of arr) {
    if (student > min) {
      answer++;
      min = student;
    } 
  }
  
  return answer;
}
console.log(solution(6,[130,135,148,140,145,150,150,153]));