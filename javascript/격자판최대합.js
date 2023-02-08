function solution(num, arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let lineSum = Number.MIN_SAFE_INTEGER;
  let verticalSum = Number.MIN_SAFE_INTEGER;
  let rightDigonalSum = 0;
  let leftDigonalSum = 0;
  console.log("arr", arr);
  for (let i = 0; i < num; i++) {
    lineSum = Math.max(
      lineSum,
      arr[i].reduce((a, b) => a + b)
    );
    verticalSum = Math.max(
      verticalSum,
      arr.map((row) => row[i]).reduce((a, b) => a + b)
    );
    for (let j = 0; j < num; j++) {
      if (i === j) rightDigonalSum += arr[i][j];
      if (i + j === num - 1) leftDigonalSum += arr[i][j];
    }
  }
  return Math.max(lineSum, verticalSum, rightDigonalSum, leftDigonalSum);
}

//best practice
function solution(n, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);
}
console.log(
  solution(5, [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
