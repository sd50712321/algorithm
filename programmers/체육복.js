function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  lost = lost.map((v) => {
    if (reserve.includes(v)) {
      reserve.splice(reserve.indexOf(v), 1);
      return 0;
    }
    if (reserve.includes(v-1)) {
      reserve.splice(reserve.indexOf(v-1), 1);
      return 0;
    }
    if (!lost.includes(v+1) && reserve.includes(v+1)) {
      reserve.splice(reserve.indexOf(v+1), 1);
      return 0;
    }
    return 1;
  });
  console.log(lost);
  return n - lost.filter(v => v!==0).length;
}

//best practice
function solution(n, lost, reserve) {
    const filtered = lost.filter(a => {
      const b = reserve.find(r => Math.abs(r-a) <= 1)
      if(!b) return true
      reserve = reserve.filter(r => r !== b)
  })
    console.log('filtered', filtered);
    return n - filtered.length
}


// console.log(solution(5, [2, 4], [1, 3, 5]));  // 5
// console.log(solution(5, [2, 4], [3]));  // 4
// console.log(solution(3, [3], [1])); // 2
// console.log(solution(5, [2,3], [2])); // 4
// console.log(solution(5, [2,3,4], [1,2,3])); // 5
// console.log(solution(6, [2,3,4,5,6], [1,2,3,4,5])); // 5
console.log(solution(5, [1,2,4], [2,4,5])); // 4
console.log(solution(5, [1,2,4], [2,3,4,5])); // 5