function getCombination(arr, r) {
  const combinations = [];
  function DFS(combination, start) {
    if (combination.length === r) {
      console.log(combination);
      combinations.push([...combination]);
    } else {
      for (let i = start; i < arr.length; i++) {
        combination.push(arr[i]);
        DFS(combination, i + 1);
        combination.pop();
      }
    }
  }
  DFS([], 0);
  return combinations;
}

function getAllCombinations(arr) {
  const result = [];

  function dfs(start, current) {
    if (start === arr.length) {
      if (current.length !== 0) result.push(current.slice());
      return;
    }
    current.push(arr[start]);
    dfs(start + 1, current);
    current.pop();
    dfs(start + 1, current);
  }

  dfs(0, []);
  return result.sort((a, b) => a.length - b.length);
}

console.log(getAllCombinations(["a", "b", "c"]));

console.log(getCombination(["a", "b", "c"], 2));
