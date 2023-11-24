const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const [x, y] = input[1].split(' ').map(Number); 
const m = Number(input[2]); 

const relations = input.slice(3);

const graph = Array.from({ length: n + 1 }, () => []); 
const visited = Array(n + 1).fill(false); 

for (let i = 0; i < m; i++) {
  const [parent, child] = relations[i].split(' ').map(Number);
  graph[parent].push(child);
  graph[child].push(parent);
}

let result = -1;

function dfs(currentNode, end, depth) {
  visited[currentNode] = true;

  if (currentNode === end) {
    result = depth;
    return;
  }

  for (const child of graph[currentNode]) {
    if (!visited[child]) {
      dfs(child, end, depth + 1);
    }
  }
}

dfs(x, y, 0);

console.log(result);
