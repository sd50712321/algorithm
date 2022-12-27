// best practice
function solution(arr1, arr2) {
  const answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = (p2 = 0);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      p1++;
    } else if (arr2[p2] < arr1[p1]) {
      p2++;
    } else {
      answer.push(arr1[p1++]);
      p2++;
    }
  }
  return answer;
}
console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
