// const ops = ["+", "-", "*", "/"];
// function solution(str) {
//   const stacks = [];
//   for (const s of str) {
//     if (!ops.includes(s)) {
//       stacks.push(s);
//     } else {
//       const rt = stacks.pop();
//       const lt = stacks.pop();
//       const result = eval(`${lt}${s}${rt}`);
//       stacks.push(result);
//     }
//   }
//   return stacks.pop();
// }

//best practice
function solution(s) {
  let answer;
  const stacks = [];
  for (let x of s) {
    if (!isNaN(x)) stacks.push(Number(x));
    else {
      const rt = stacks.pop();
      const lt = stacks.pop();
      if (x === "+") stacks.push(lt + rt);
      else if (x === "-") stacks.push(lt - rt);
      else if (x === "*") stacks.push(lt * rt);
      else if (x === "/") stacks.push(lt / rt);
    }
  }
  answer = stacks.pop();
  return answer;
}

console.log(solution("352+*9-"));
