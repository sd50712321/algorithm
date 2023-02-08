// function preSolution(n) {
//   const answer = [];
//   function DFS(number) {
//     if (number > 7) return;
//     answer.push(number);
//     DFS(number * 2);
//     DFS(number * 2 + 1);
//   }
//   DFS(n);
//   return answer;
// }

// function cenSolution(n) {
//   const answer = [];
//   function DFS(number) {
//     if (number > 7) return;
//     DFS(number * 2);
//     answer.push(number);
//     DFS(number * 2 + 1);
//   }
//   DFS(n);
//   return answer;
// }

// function postSolution(n) {
//   const answer = [];
//   function DFS(number) {
//     if (number > 7) return;
//     DFS(number * 2);
//     DFS(number * 2 + 1);
//     answer.push(number);
//   }
//   DFS(n);
//   return answer;
// }

//best practice
function solution(v) {
  let answer;
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      console.log(v);
      DFS(v * 2 + 1);
    }
  }
  DFS(v);
  return answer;
}

// console.log(preSolution(1));
// console.log(cenSolution(1));
// console.log(postSolution(1));
console.log(solution(1));
