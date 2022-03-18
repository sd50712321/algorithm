function isPrimeNumber(num) {
  if(num === 1) return false;
  for(let i = 2 ; i <= Math.sqrt(num) ; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(nums) {
  var answer = 0;
  for(let i = 0 ; i < nums.length ; i++) {
    for(let j = i + 1 ; j < nums.length ; j++) {
      for(let k = j + 1 ; k < nums.length ; k++) {
        const total = nums[i] + nums[j] + nums[k];
        const isPrime = isPrimeNumber(total);
        if(isPrime) {
          answer++;
        }
      }
    }
  }
  return answer;
}