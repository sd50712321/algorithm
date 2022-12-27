// function solution(str) {
//   let answer = 0;
//   const stacks = [];
//   for (const s of str) {
//     if (s === "(") stacks.push(s);
//     else {
//       stacks.pop();
//       if (stacks[stacks.length - 1] === "(") {
//         answer += stacks.length;
//       }
//     }
//   }
//   return answer;
// }

//best practice
function solution(str) {
  let answer = 0;
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push(str[i]);
    else {
      stack.pop();
      if (str[i - 1] === "(") answer += stack.length;
      else answer += 1;
    }
  }
  return answer;
}
console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));
