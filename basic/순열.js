function getPermutation(arr) {
  if (arr.length === 1) return [arr];
  const result = [];
  arr.forEach((v, index, origin) => {
    const rest = origin.filter((v, idx) => idx !== index);
    const permutation = getPermutation(rest);
    const mapped = permutation.map((p) => [v, ...p]);
    result.push(...mapped);
  });
  return result;
}

console.log(
  getPermutation([
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"],
  ])
);
