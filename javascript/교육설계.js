// function solution(q, s) {
//   const resultQueue = q.split("");
//   const question = s.split("");
//   let answer = "NO";
//   while (question.length > 0) {
//     if (resultQueue.length === 0) {
//       answer = "YES";
//       break;
//     }
//     const firstCharacter = question.shift();
//     if (firstCharacter === resultQueue[0]) resultQueue.shift();
//   }
//   return answer;
// }

//best practice
function solution(need, plan) {
  let answer = "YES";
  let queue = need.split("");
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) {
        return "NO";
      }
    }
  }
  if (queue.length > 0) return "NO";
  return answer;
}

console.time("test");
console.log(solution("CBA", "CBDAGE"));
console.log(solution("CBA", "CDABGE"));
console.timeEnd("test");
