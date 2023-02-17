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
