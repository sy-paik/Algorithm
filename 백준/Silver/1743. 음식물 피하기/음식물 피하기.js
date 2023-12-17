const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const yLength = +input[0].split(' ')[0];
const xLength = +input[0].split(' ')[1];

let arr = Array.from(Array(yLength + 1), () => Array(xLength + 1).fill(0));

for (let i = 1; i <= +input[0].split(' ')[2]; i++) {
    const [y, x] = input[i].split(" ");
    
    arr[y][x] = 1;
}

let result = 0;

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const dfs = (y, x) => {
    if (y < 1 || x < 1 || y > yLength || x > xLength || arr[y][x] === 0) {
        return 0;
    }

    arr[y][x] = 0;
    let answer = 1;

    for (let k = 0; k < 4; k++) {
        const ny = y + dy[k];
        const nx = x + dx[k];
        answer += dfs(ny, nx);
    }

    return answer;
};

for (let i = 1; i <= yLength; i++) {
    for (let j = 1; j <= xLength; j++) {
        if (arr[i][j] === 1) {
            result = Math.max(result, dfs(i, j));
        }
    }
}

console.log(result);
