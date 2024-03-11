const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const N = input.shift();
const sorted = input.sort((a, b) => a - b);
let answer = '';
for (let i = 0; i < N; i++) {
    answer += sorted[i] + '\n';
}
console.log(answer);