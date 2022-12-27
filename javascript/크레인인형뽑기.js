// function solution(moves, boards) {
//   const stacks = [];
//   let answer = 0;
//   for (let x of moves) {
//     while (boards[x - 1].length > 0) {
//       const popDoll = boards[x - 1].pop();
//       if (popDoll !== 0) {
//         if (stacks[stacks.length - 1] === popDoll) {
//           stacks.push(popDoll);
//           while (stacks.pop() === popDoll) {
//             answer++;
//           }
//         } else {
//           stacks.push(popDoll);
//         }
//         break;
//       }
//     }
//   }
//   return answer;
// }

//best practice
function solution(moves, boards) {
  let answer = 0;
  const stacks = [];
  moves.forEach((pos) => {
    for (let i = 0; i < boards.length; i++) {
      if (boards[i][pos - 1] !== 0) {
        let tmp = boards[i][pos - 1];
        boards[i][pos - 1] = 0;
        if (tmp === stacks[stacks.length - 1]) {
          stacks.pop();
          answer += 2;
        } else stacks.push(tmp);
        break;
      }
    }
  });
  return answer;
}

console.log(
  solution(
    [1, 5, 3, 5, 1, 2, 1, 4],
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ]
  )
);
