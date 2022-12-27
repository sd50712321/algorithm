// sort는 nlogn 시간복잡도를 가짐
// function solution(arr) {
//   const flatArr = new Set(arr.flat(1));
//   return Array.from(flatArr).sort((a, b) => a - b);
// }

//best practice
function solution(arr1, arr2) {
  const answer = [];
  const n = arr1.length;
  const m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1++]);
    } else {
      answer.push(arr2[p2++]);
    }
  }
  while (p1 < n) {
    answer.push(arr1[p1++]);
  }
  while (p2 < m) {
    answer.push(arr2[p2++]);
  }
  return answer;
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
