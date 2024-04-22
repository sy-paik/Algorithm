const fs = require('fs');

let arr, visit, done; 
let count; 

function dfs(n) {
    if (visit[n]) {
        done[n] = true;
        count++; 
    } else {
        visit[n] = true;
    }

    if (!done[arr[n]]) {
        dfs(arr[n]);
    }

    visit[n] = false;
    done[n] = true;
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]);
let index = 1;

for (let t = 0; t < T; t++) {
    const n = parseInt(input[index++]);

    arr = new Array(n + 1);
    visit = new Array(n + 1).fill(false);
    done = new Array(n + 1).fill(false);
    count = 0;

    const numbers = input[index++].split(' ').map(Number);

    for (let i = 1; i <= n; i++) {
        arr[i] = numbers[i - 1];
    }

    for (let i = 1; i <= n; i++) {
        if (!done[i]) {
            dfs(i);
        }
    }

    console.log(n - count);
}
