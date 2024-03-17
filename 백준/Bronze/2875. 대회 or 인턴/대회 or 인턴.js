const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, K] = input[0].split(' ').map(Number);

let maxTeams = Math.min(Math.floor(N / 2), M); 


if (N + M - maxTeams * 3 < K) {
    maxTeams -= Math.ceil((K - (N + M - maxTeams * 3)) / 3);
}

console.log(Math.max(maxTeams, 0));
