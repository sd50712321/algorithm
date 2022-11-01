// function solution(s) {
//   const replacedString = s.replace(/[^0-9]/g, "");
//   return parseInt(replacedString, 10);
// }

//best
function solution(s) {
  let answer = 0;
  for (let x of s) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  return answer;
}

console.log(solution("g0en2T0s8eSoft"));
