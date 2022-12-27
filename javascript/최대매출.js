function solution(n, arr) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i < n) {
      sum += arr[i];
    } else {
      sum = sum - arr[i - n] + arr[i];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}

// best practice
function solution(n, arr) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  max = sum;
  for (let i = n; i < arr.length; i++) {
    sum += arr[i] - arr[i - n];
    max = Math.max(max, sum);
  }
  return max;
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
