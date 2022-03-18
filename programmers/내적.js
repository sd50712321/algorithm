function solution(a, b) {
  return a.map((data, idx) => data * b[idx]).reduce((acc, cur) => acc + cur, 0);
}

// best practice
function solution(a, b) {
  return a.reduce((acc, cur, idx) => a[idx] * b[idx] + acc, 0);
}
