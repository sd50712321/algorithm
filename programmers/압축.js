function solution(str) {
  const dic = {};
  for (let i = 0; i < 26; i++) {
    dic[String.fromCharCode(i + 65)] = i + 1;
  }

  const result = [];
  let current = "";
  let index = 27;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const combined = current + ch;
    if (dic[combined]) {
      current = combined;
    } else {
      result.push(dic[current]);
      dic[combined] = index;
      index++;
      current = ch;
    }
  }
  if (current !== "") result.push(dic[current]);

  return result;
}
