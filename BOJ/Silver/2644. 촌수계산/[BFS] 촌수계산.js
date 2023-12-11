const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const [x, y] = input[1].split(' ').map(Number); 
const m = Number(input[2]); 

const relations = input.slice(3); // 촌수 관계 정보

const graph = Array.from({ length: n + 1 }, () => []); 
const visited = Array(n + 1).fill(false); 

for (let i = 0; i < m; i++) {
  const [parent, child] = relations[i].split(' ').map(Number);
  graph[parent].push(child);
  graph[child].push(parent);
}

function bfs(start, end) {
  const queue = [];
  queue.push({ node: start, depth: 0 });

  while (queue.length > 0) {
    const current = queue.shift();
    const currentNode = current.node;
    const currentDepth = current.depth;

    visited[currentNode] = true;

    if (currentNode === end) {
      return currentDepth; 
    }

    for (const child of graph[currentNode]) {
      if (!visited[child]) {
        queue.push({ node: child, depth: currentDepth + 1 });
      }
    }
  }

  return -1; 
}

const result = bfs(x, y);

console.log(result);
