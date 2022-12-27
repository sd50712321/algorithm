// function isPrime(x) {
//   if (x === 1) return false;
//   for (let j = 2; j < x; j++) {
//     if (x !== 2 && x % j === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function solution(n, arr) {
//   const answer = [];
//   for (let x of arr) {
//     const splitedNumber = x
//       .toString()
//       .split("")
//       .reduce((prev, cur, i) => +prev + +(cur * Math.pow(10, i)), 0);
//     if (isPrime(splitedNumber)) answer.push(splitedNumber);
//   }
//   return answer;
// }

//best practice
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n, arr) {
  let answer = [];
  for (let x of arr) {
    let res = +x.toString().split("").reverse().join("");
    // while (x) {
    //   let t = x % 10;
    //   res = res * 10 + t;
    //   x = parseInt(x / 10, 10);
    // }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

console.log(solution(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]));
