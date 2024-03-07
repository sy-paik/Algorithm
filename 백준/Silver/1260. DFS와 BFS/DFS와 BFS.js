const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, V] = input[0].split(' ').map(v => parseInt(v));

const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
for (let i = 1; i <= M; i++) {
    let [row, column] = input[i].split(' ').map(v => parseInt(v));
    graph[row][column] = 1;
    graph[column][row] = 1;
}

let DFS_visited = new Array(N + 1).fill(false);
let DFS_answer = [];
let BFS_visited = new Array(N + 1).fill(false);
let BFS_answer = [];

function DFS(V) {
    DFS_visited[V] = true;
    DFS_answer.push(V);
    for (let i = 1; i < graph.length; i++) {
        if (graph[V][i] === 1 && !DFS_visited[i]) {
            DFS(i);
        }
    }
}

function BFS(V) {
    let queue = [];
    BFS_visited[V] = true;
    BFS_answer.push(V);
    queue.push(V);

    while (queue.length !== 0) {
        let el = queue.shift();
        for (let i = 1; i < graph.length; i++) {
            if (graph[el][i] === 1 && !BFS_visited[i]) {
                BFS_visited[i] = true;
                queue.push(i);
                BFS_answer.push(i);
            }
        }
    }
}

DFS(V);
BFS(V);

console.log(DFS_answer.join(' '));
console.log(BFS_answer.join(' '));
