const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [f, s, g, u, d] = input[0].split(' ').map(Number);

const visited = new Array(2000001).fill(0);
let cnt = 0;
let flag = true;
const queue = [s];
visited[s] = 1;

while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
        const x = queue.shift();

        if (x === g) {
            flag = false;
            visited[x] = 1;
            console.log(cnt);
        }

        for (const k of [x + u, x - d]) {
            if (visited[k] === 0 && k >= 1 && k <= f) {
                visited[k] = 1;
                queue.push(k);
            }
        }
    }

    if (flag === false) {
        break;
    }

    cnt++;
}

if (flag) {
    console.log('use the stairs');
}
