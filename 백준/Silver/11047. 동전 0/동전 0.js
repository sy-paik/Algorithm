const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ');

const coins = input.map(Number).reverse(); // 내림차순 정렬

let answer = 0;
let count = 0;

let remainingAmount = parseInt(M);

for (let i = 0; i < N; i++) {
    if (coins[i] <= remainingAmount) {
        count = Math.floor(remainingAmount / coins[i]);
        answer += count;
        remainingAmount -= coins[i] * count;
    }
}

console.log(answer);
