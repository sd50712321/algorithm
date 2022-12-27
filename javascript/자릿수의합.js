// function solution(n, arr) {
//   let max = Number.MIN_SAFE_INTEGER;
//   let maxSplitedSum = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i < arr.length; i++) {
//     const splitedArr = arr[i].toString().split("");
//     let splitedSum = 0;
//     for (let j = 0; j < splitedArr.length; j++) {
//       splitedSum += +splitedArr[j];
//     }
//     if (splitedSum > maxSplitedSum) {
//       max = arr[i];
//       maxSplitedSum = splitedSum;
//     }
//     if (splitedSum === maxSplitedSum && arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

//best practice1
// function solution(n, arr) {
//   let answer,
//     max = Number.MIN_SAFE_INTEGER;
//   for (let x of arr) {
//     let sum = 0,
//       tmp = x;
//     while (tmp) {
//       sum += tmp % 10;
//       tmp = Math.floor(tmp / 10);
//     }
//     if (sum > max) {
//       max = sum;
//       answer = x;
//     } else if (sum === max) {
//       if (x > answer) answer = x;
//     }
//   }
//   return answer;
// }

//best practice2
function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((prev, cur) => +prev + +cur, 0);
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

console.log(solution(7, [137, 460, 603, 40, 521, 128, 123]));
