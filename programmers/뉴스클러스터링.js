function engValid(s) {
  const asc = s.charCodeAt();
  if ((asc >= 65 && asc <= 90) || (asc >= 97 && asc <= 122)) {
    return true;
  } else return false;
}

function solution(str1, str2) {
  const strA = [];
  const strB = [];
  for (let i = 0; i < str1.length - 1; i++) {
    const first = engValid(str1[i]);
    const next = engValid(str1[i + 1]);
    if (first && next) {
      strA.push((str1[i] + str1[i + 1]).toLowerCase());
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    const first = engValid(str2[i]);
    const next = engValid(str2[i + 1]);
    if (first && next) {
      strB.push((str2[i] + str2[i + 1]).toLowerCase());
    }
  }
  const unionSet = new Set([...strA, ...strB]);
  const interSet = new Set();
  let unionCnt = 0;
  let interCnt = 0;
  for (let i = 0; i < strA.length; i++) {
    if (strB.includes(strA[i])) interSet.add(strA[i]);
  }
  for (const s of interSet) {
    interCnt += Math.min(
      strA.filter((d) => d === s).length,
      strB.filter((d) => d === s).length
    );
  }
  for (const s of unionSet) {
    unionCnt += Math.max(
      strA.filter((d) => d === s).length,
      strB.filter((d) => d === s).length
    );
  }

  return unionCnt === 0 ? 65536 : parseInt((interCnt / unionCnt) * 65536);
}
