function solution(nums) {
  const duplicateSet = new Set(nums);
  const selectedNumbers = nums.length/2;
  return duplicateSet.size>selectedNumbers?selectedNumbers:duplicateSet.size;
}
console.log(solution([3, 1, 2, 3]));