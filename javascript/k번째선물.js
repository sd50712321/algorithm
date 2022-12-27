// function solution(n, arr) {
//   arr.sort((a, b) => a - b);
//   const sumArr = [];
//   for (let k = 0; k < arr.length - 2; k++) {
//     if (arr.length - k < 3) break;
//     const firstNumber = arr[k];
//     for (let s = k + 1; s < arr.length - 1; s++) {
//       const secondNumber = arr[s];
//       for (let t = s + 1; t < arr.length; t++) {
//         sumArr.push(firstNumber + secondNumber + arr[t]);
//       }
//     }
//   }
//   return sumArr.sort((a, b) => a - b)[sumArr.length - n];
// }

//best practice
function solution(n, card) {
  let temp = new Set();
  for (let i = 0; i < card.length; i++) {
    for (let j = i + 1; j < card.length; j++) {
      for (let k = j + 1; k < card.length; k++) {
        temp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  const toArray = Array.from(temp).sort((a, b) => b - a);
  return toArray[n - 1];
}

console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
