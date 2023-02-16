function solution(n, arr1, arr2) {
  const map = arr1.map((num1, i) => {
    const num2 = arr2[i];
    const merged = num1 | num2;
    console.log(num1);
    console.log(num2);
    console.log(merged);
    return merged.toString(2).padStart(n, "0");
  });

  return map.map((row) => {
    return row.replace(/1/g, "#").replace(/0/g, " ");
  });
}

//비트연산 활용
