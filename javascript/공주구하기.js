// function solution(p, k) {
//   let queue = [];
//   let i = 1;
//   let t = 1;
//   while (i <= p) {
//     queue.push(i++);
//   }
//   while (queue.length > 1) {
//     const mem = queue.reverse().pop();
//     const newQueue = queue.reverse();
//     if (t % k !== 0) {
//       queue = [...newQueue];
//       queue.push(mem);
//     } else {
//       queue = [...newQueue];
//     }
//     t++;
//   }
//   return queue[0];
// }

//best practice
function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.pop();
  }
  return answer;
}

console.log(solution(8, 3));
