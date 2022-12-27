// function solution(str) {
//   const stack = [];
//   const stackStr = [];
//   let answer = "";
//   for (const x of str) {
//     if (x === "(") {
//       stack.push("(");
//     } else if (x === ")") {
//       stack.pop();
//       stackStr.pop();
//     } else {
//       if (stack.length > stackStr.length) {
//         stackStr.push([]);
//         stackStr[stackStr.length - 1].push(x);
//       } else if (stack.length < stackStr.length) {
//         stackStr[stackStr.length - 1].push(x);
//       } else {
//         if (stack.length === 0) {
//           answer += x;
//         } else {
//           stackStr[stackStr.length - 1].push(x);
//         }
//       }
//       console.log("stackStr", stackStr);
//       console.log("x", x);
//     }
//   }
//   console.log("stackStr", stackStr);
//   return answer;
// }

//best practice
// function solution(str) {
//   const stack = [];
//   for (const x of str) {
//     if (x !== ")") {
//       stack.push(x);
//     } else {
//       const idx = stack.lastIndexOf("(");
//       while (stack.length > idx) {
//         stack.pop();
//       }
//     }
//   }
//   return stack.join("");
// }
function solution(str) {
  const stack = [];
  for (const x of str) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }
  return stack.join("");
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
