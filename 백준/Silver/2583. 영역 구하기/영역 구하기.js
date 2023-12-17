const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, K] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: M }, () => Array(N).fill(0));
const visited = Array.from({ length: M }, () => Array(N).fill(false));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function dfs(x, y) {
    visited[x][y] = true;
    let cnt = 1;
    for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];
        if (nx >= 0 && ny >= 0 && nx < M && ny < N && !visited[nx][ny] && graph[nx][ny] !== 1) {
            cnt += dfs(nx, ny);
        }
    }
    return cnt;
}

for (let i = 0; i < K; i++) {
    const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
    for (let j = x1; j < x2; j++) {
        for (let k = y1; k < y2; k++) {
            graph[j][k] = 1;
        }
    }
}

const areas = [];
for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
        if (graph[i][j] === 0 && !visited[i][j]) {
            areas.push(dfs(i, j));
        }
    }
}

const sortedAreas = areas.sort((a, b) => a - b);
const areaCount = areas.length;

console.log(areaCount);
console.log(sortedAreas.join(" "));
