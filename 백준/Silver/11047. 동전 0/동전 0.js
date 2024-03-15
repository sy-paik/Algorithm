const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input.shift().split(' ').map(Number);

const coins = input.map(Number).reverse(); // 내림차순 정렬

let answer = 0;
let remainingAmount = K; 

for (let i = 0; i < N; i++) {
    if (coins[i] <= remainingAmount) {
        answer += Math.floor(remainingAmount / coins[i]);
        remainingAmount %= coins[i];
    }
}

console.log(answer);
