// function solution(s) {
//   let result = true;
//   const changeCharacter = s.toLowerCase();
//   for (
//     let i = 0, j = changeCharacter.length - 1;
//     i < changeCharacter.length;
//     i++, j--
//   ) {
//     if (changeCharacter[i] !== changeCharacter[j]) {
//       result = false;
//     }
//   }
//   return result ? "YES" : "NO";
// }

//best
// function solution(s) {
//   let answer = "YES";
//   s = s.toLowerCase();
//   let len = s.length;
//   for (let i = 0; i < Math.floor(len / 2); i++) {
//     if (s[i] !== s[len - i - 1]) return "NO";
//   }
//   return answer;
// }

//split
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  if (s !== s.split("").reverse().join("")) return "NO";
  return answer;
}

console.log(solution("gooG"));
