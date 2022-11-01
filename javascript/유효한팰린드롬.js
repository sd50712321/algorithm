// function solution(s) {
//   const tolowerCase = s.split("").map((data) => {
//     if (
//       data.toLowerCase().charCodeAt() >= 97 &&
//       data.toLowerCase().charCodeAt() <= 122
//     ) {
//       return data.toLowerCase();
//     }
//   });

//   return tolowerCase === tolowerCase.reverse() ? "YES" : "NO";
// }

//best
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
