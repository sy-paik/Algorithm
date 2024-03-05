const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const coins = input.slice(1).map(Number);

const dp = new Array(k + 1).fill(Infinity);
dp[0] = 0;

for (let i = 1; i <= k; i++) {
    for (let j = 0; j < n; j++) {
        if (i >= coins[j]) {
            dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
        }
    }
}

const result = dp[k] === Infinity ? -1 : dp[k];
console.log(result);
