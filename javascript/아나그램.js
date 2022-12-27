// function solution(str1, str2) {
//   const map1 = new Map();
//   const map2 = new Map();
//   let answer = "YES";
//   for (const str of str1) {
//     if (map1.has(str)) map1.set(str, map1.get(str) + 1);
//     else map1.set(str, 1);
//   }
//   for (const str of str2) {
//     if (!map1.has(str) || map1.get(str) === 0) return "NO";
//     map1.set(str, map1.get(str) - 1);
//   }
//   for (const [key, value] of map1.entries()) {
//     if (!map2.has(key)) {
//       answer = "NO";
//       break;
//     }
//     if (value !== map2.get(key)) {
//       answer = "NO";
//       break;
//     }
//   }
//   return answer;
// }

//best practice
function solution(str1, str2) {
  const map1 = new Map();
  let answer = "YES";
  for (const str of str1) {
    if (map1.has(str)) map1.set(str, map1.get(str) + 1);
    else map1.set(str, 1);
  }
  for (const str of str2) {
    if (!map1.has(str) || map1.get(str) === 0) return "NO";
    map1.set(str, map1.get(str) - 1);
  }
  return answer;
}

console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));
