const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift());
const arr = [];

for (const row of input) {
  arr.push(row.split(" ").map(Number));
}

const visited = Array(N).fill(false);

function dfs(start, current) {
  for (let next = 0; next < N; next++) {
    if (arr[current][next] && !visited[next]) {
      visited[next] = true;
      arr[start][next] = 1;
      dfs(start, next);
    }
  }
}

for (let i = 0; i < N; i++) {
  visited.fill(false);
  dfs(i, i);
}

for (let i = 0; i < N; i++) {
  console.log(arr[i].join(" "));
}
