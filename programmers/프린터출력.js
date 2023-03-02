// 문제 잘 읽기!
function solution(priorities, location) {
  var result = 0;
  let newPrior = priorities.map((v, i) => {
    return {
      prior: v,
      location: i,
    };
  });
  const queue = [...newPrior];
  while (true) {
    result++;
    const max = Math.max(...queue.map((v) => v.prior));
    const maxIndex = queue.map((v) => v.prior).indexOf(max);
    for (let i = 0; i < maxIndex; i++) {
      queue.push(queue.shift());
    }
    const { prior, location: maxLocation } = queue.shift();
    if (location === maxLocation) break;
  }
  return result;
}
