// function solution(n, arr) {
//   const filledArr = Array.from({ length: n }).fill(0);
//   for (let i = 0; i < arr.length; i++) {
//     if (filledArr.includes(arr[i])) {
//       let idx = filledArr.indexOf(arr[i]);
//       for (let j = idx; j > 0; j--) {
//         [filledArr[j - 1], filledArr[j]] = [filledArr[j], filledArr[j - 1]];
//       }
//     } else {
//       const temp = arr[i];
//       for (let j = filledArr.length - 1; j > 0; j--) {
//         filledArr[j] = filledArr[j - 1];
//       }
//       filledArr[0] = temp;
//     }
//   }
//   return filledArr;
// }

//best practice
function solution(size, arr) {
  //   const answer = Array.from({ length: size }, () => 0);
  const answer = [];
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) {
      if (x === answer[i]) pos = i;
    }
    // // 캐시 미스
    // if (pos === -1) {
    //   for (let i = size - 1; i >= 1; i--) {
    //     answer[i] = answer[i - 1];
    //   }
    //   // 캐시 적중
    // } else {
    //   for (let i = pos; i >= 1; i--) {
    //     answer[i] = answer[i - 1];
    //   }
    // }
    // answer[0] = x;
    if (pos === -1) {
      answer.unshift(x);
      if (answer.length > size) answer.pop();
    } else {
      answer.splice(pos, 1);
      answer.unshift(x);
    }
  });
  return answer;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
