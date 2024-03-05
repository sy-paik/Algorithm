const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const N = parseInt(input[0]);
const M = parseInt(input[1]);
const materials = input[2].split(' ').map(Number);
let answer = 0;

for (let i = 0; i < N; i++) {
    let pair = M - materials[i];
    if (materials.includes(pair, i + 1)) answer++;
}

console.log(answer);
