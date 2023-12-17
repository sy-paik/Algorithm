const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(x, y, field, visited) {
  const queue = [[x, y]];
  visited[y][x] = true;

  while (queue.length > 0) {
    const [cx, cy] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (nx >= 0 && nx < field[0].length && ny >= 0 && ny < field.length) {
        if (field[ny][nx] === 1 && !visited[ny][nx]) {
          queue.push([nx, ny]);
          visited[ny][nx] = true;
        }
      }
    }
  }
}

const T = parseInt(input[0]);
let currentIndex = 1;
const results = [];

for (let i = 0; i < T; i++) {
  const [M, N, K] = input[currentIndex].split(' ').map(Number);
  currentIndex++;

  const field = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  let count = 0;

  for (let j = 0; j < K; j++) {
    const [x, y] = input[currentIndex].split(' ').map(Number);
    field[y][x] = 1;
    currentIndex++;
  }

  let wormCount = 0;

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (field[y][x] === 1 && !visited[y][x]) {
        bfs(x, y, field, visited);
        wormCount++;
      }
    }
  }

  results.push(wormCount);
}

results.forEach((result) => {
  console.log(result);
});
