function solution(s, e) {
  const queue = [];
  queue.push(s);
  const chk = Array.from({ length: e + 1 }, () => 0);
  chk[s] = 1;
  const dis = Array.from({ length: e + 1 }, () => 0);
  dis[s] = 0;
  while (queue.length) {
    const v = queue.shift();
    for (let lt of [1, 5, -1]) {
      let sum = v + lt;
      if (sum === e) return dis[v] + 1;
      if (chk[sum] === 0) {
        queue.push(sum);
        chk[sum] = 1;
        dis[sum] = dis[v] + 1;
      }
    }
  }
  return answer;
}

//best practice
// function solution(s, e) {
//   let answer = 0;
//   const chk = Array.from({ length: e + 1 }, () => 0);
//   const dis = Array.from({ length: e + 1 }, () => 0);
//   const queue = [];
//   queue.push(s);
//   chk[s] = 1;
//   dis[s] = 0;
//   while (queue.length) {
//     console.log("queue", queue);
//     let x = queue.shift();
//     for (let nx of [x - 1, x + 1, x + 5]) {
//       if (nx === e) return dis[x] + 1;
//       if (nx > 0 && nx < e && chk[nx] === 0) {
//         chk[nx] = 1;
//         queue.push(nx);
//         dis[nx] = dis[x] + 1;
//       }
//     }
//   }

//   return answer;
// }

console.log(solution(5, 14));
