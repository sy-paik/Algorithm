const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [K, N] = input.shift().split(' ');
const line = input.map(Number).sort((a, b) => a - b);

let left = 0;
let right = line[line.length - 1];
let answer = Number.MIN_SAFE_INTEGER;
while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let lineCount = line.reduce((acc, cur) => acc + Math.floor(cur/mid), 0);
    
    if (lineCount >= N) {
        if (mid > answer) answer = mid;
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

console.log(answer);