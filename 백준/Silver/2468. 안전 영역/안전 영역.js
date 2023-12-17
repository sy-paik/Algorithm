const input = require("fs").readFileSync("./dev/stdin").toString().split("\n");

const direction = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
const N = Number(input.shift());
const areas = [];
let visited = [];

let [min, max] = [1, 1];
for (let i = 0; i < N; i++) {
  const area = input[i].split(" ").map(Number);
  const newMax = Math.max(...area);
  if (newMax > max) max = newMax;

  areas.push(area);
}

const bfs = (startX, startY) => {
  const queue = [[startX, startY]];
  while (queue.length) {
    const [x, y] = queue.shift();
    if (areas[x][y] > min && visited[x][y]) continue;
    else visited[x][y] = 1;

    for (let i = 0; i < 4; i++) {
      const xPos = x + direction[i][0];
      const yPos = y + direction[i][1];

      if (xPos < 0 || yPos < 0 || xPos >= N || yPos >= N) continue;
      if (areas[xPos][yPos] > min && !visited[xPos][yPos])
        queue.push([xPos, yPos]);
    }
  }
};
let answer = 1;
while (min < max) {
  visited = [...Array(N)].map((v) => Array(N).fill(0));
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (areas[i][j] > min && !visited[i][j]) {
        bfs(i, j);
        count++;
      }
    }
  }
  if (count > answer) answer = count;
  min++;
}

console.log(answer);