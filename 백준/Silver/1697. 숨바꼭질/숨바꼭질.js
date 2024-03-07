const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(v => parseInt(v));
const N = input[0];
const M = input[1];

const BFS_visited = Array.from(100001).fill(false);

function BFS() {
    let queue = [[N, 0]];
    BFS_visited[N] = 1;
    while (queue.length !== 0) {
        let [cur, time] = queue.shift();
        if (cur === M) return time;
        for (const next of [cur - 1, cur + 1, cur * 2]) {
            if (next >= 0 && next <= 100000 && !BFS_visited[next]) {
                BFS_visited[next] = 1;
                queue.push([next, time + 1]);
            }
        }
    }
}

console.log(BFS());