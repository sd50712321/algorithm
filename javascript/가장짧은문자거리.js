// function solution(s, t) {
//   const answer = [];
//   const tIndexed = s
//     .split("")
//     .map((str, idx) => {
//       if (str === t) {
//         return idx;
//       }
//     })
//     .filter((data) => data);
//   s.split("").map((str, idx) => {
//     const indexMin = tIndexed.map((tIdx) => Math.abs(+(tIdx - idx)));
//     answer.push(Math.min(...indexMin));
//   });

//   return answer;
// }

//best
function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
      answer[i] = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

console.log(solution("teachermode", "e"));
