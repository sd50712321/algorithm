function isInt(number) {
  return !Number.isNaN(parseInt(number));
}

function location(num, loc) {
  let result;
  if (loc === "S") result = num ** 1;
  if (loc === "D") result = num ** 2;
  if (loc === "T") result = num ** 3;
  return result;
}

function solution(dartResult) {
  const answer = [];
  let optCount = 0;
  const locationList = ["S", "D", "T"];
  const optionList = ["*", "#"];
  const result = dartResult.split("");
  while (result.length) {
    let ch = result.shift();
    if (ch === "1" && result[0] === "0") {
      result.shift();
      ch = 10;
    }
    if (isInt(ch)) {
      answer.push(parseInt(ch));
    }
    if (locationList.includes(ch)) {
      answer[answer.length - 1] = location(answer[answer.length - 1], ch);
    }
    if (optionList.includes(ch)) {
      if (ch === "*") {
        for (let i = answer.length - 1; i >= answer.length - 2; i--) {
          if (i < 0) break;
          answer[i] = answer[i] * 2;
        }
      } else {
        answer[answer.length - 1] = answer[answer.length - 1] * -1;
      }
    }
  }
  return answer.reduce((prev, cur) => prev + cur, 0);
}

//gpt
// function solution(dartResult) {
//     let scores = [];
//     let currentScore = 0;

//     for (let i = 0; i < dartResult.length; i++) {
//       const char = dartResult[i];

//       if (/\d/.test(char)) { // 숫자일 때
//         if (char === '1' && dartResult[i + 1] === '0') { // 10일 때
//           currentScore = 10;
//           i++;
//         } else {
//           currentScore = parseInt(char);
//         }
//       } else if (/[SDT]/.test(char)) { // 보너스일 때
//         if (char === 'S') {
//           currentScore **= 1;
//         } else if (char === 'D') {
//           currentScore **= 2;
//         } else if (char === 'T') {
//           currentScore **= 3;
//         }

//         scores.push(currentScore);
//         currentScore = 0;
//       } else if (/[#*]/.test(char)) { // 옵션일 때
//         if (char === '*') {
//           scores[scores.length - 1] *= 2;

//           if (scores.length > 1) {
//             scores[scores.length - 2] *= 2;
//           }
//         } else if (char === '#') {
//           scores[scores.length - 1] *= -1;
//         }
//       }
//     }

//     return scores.reduce((acc, curr) => acc + curr, 0);
//   }
