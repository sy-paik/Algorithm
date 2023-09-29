const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, request, total] = [+input[0], input[1].split(' ').map(Number), +input[2]];

const maxRequest = Math.max(...request);

let left = 1;
let right = maxRequest;
let answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const currentTotal = request.reduce((acc, val) => acc + (val > mid ? mid : val), 0);
  if (currentTotal <= total) {
    answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(answer);
