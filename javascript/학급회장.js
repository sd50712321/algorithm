// function solution(n, str) {
//   const splitedArr = str.split("");
//   const hash = new Map();
//   let max = 0;
//   let answer = "";
//   for (let i = 0; i < splitedArr.length; i++) {
//     if (hash.has(splitedArr[i])) {
//       const value = hash.get(splitedArr[i]);
//       hash.set(splitedArr[i], +value + 1);
//       if (value + 1 > max) {
//         max = value + 1;
//         answer = splitedArr[i];
//       }
//     } else {
//       hash.set(splitedArr[i], 1);
//     }
//   }
//   return answer;
// }

//best practice
function solution(n, str) {
  let answer;
  let sh = new Map();
  for (let s of str) {
    if (sh.has(s)) sh.set(s, sh.get(s) + 1);
    else sh.set(s, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sh) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

console.log(solution(15, "BACBACCACCBDEDE"));
