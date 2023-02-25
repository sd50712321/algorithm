function solution(clothes) {
  let answer = 1;
  const object = {};
  for (const cloth of clothes) {
    const [goods, category] = cloth;
    if (!object[category]) {
      object[category] = [];
    }
    object[category].push(goods);
  }

  const keys = Object.keys(object);
  for (let key of keys) {
    const len = object[key].length;
    answer *= len + 1;
  }

  return answer - 1;
}
