// function solution(str) {
//   const arr = [];
//   const strArr = str.split("").reverse();
//   try {
//     while (strArr.length > 0) {
//       const popStr = strArr.pop();
//       if (popStr === "(") arr.push(popStr);
//       else arr.pop();
//     }
//     if (arr.length === 0) return "YES";
//     else return "NO";
//   } catch (err) {
//     return "NO";
//   }
// }

//best practice
function solution(str) {
  let answer = "YES";
  const stack = [];
  for (let x of str) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) {
        return "NO";
      }
      stack.pop();
    }
  }
  if (stack.length > 0) return (answer = "NO");
  return answer;
}

console.log(solution("(()(()))(()"));
console.log(solution("(())()"));
