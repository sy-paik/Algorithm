const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let index = 0;

function makeGraph(perm) {
    const graph = [];
    for (let i = 0; i < perm.length; i++) {
        graph[i + 1] = perm[i];
    }
    return graph;
}

function countCycles(graph) {
    const visited = new Array(graph.length).fill(false);
    let count = 0;

    function dfs(node) {
        visited[node] = true;
        const nextNode = graph[node];
        if (!visited[nextNode]) {
            dfs(nextNode);
        }
    }

    for (let i = 1; i < graph.length; i++) {
        if (!visited[i]) {
            dfs(i);
            count++;
        }
    }

    return count;
}

const T = parseInt(input[index++]);


for (let i = 0; i < T; i++) {
    const N = parseInt(input[index++]); 
    const perm = input[index++].split(" ").map(Number); 
    const graph = makeGraph(perm); 
    const cycleCount = countCycles(graph); 
    console.log(cycleCount); 
}
