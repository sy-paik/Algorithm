const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const N = input[0];
const K = input[1];

const sequence = [];
for (let i = 1; i <= N; i++) {
    sequence.push(i);
}

const result = [];
let index = 0;
while (sequence.length > 0) {
    index = (index + K - 1) % sequence.length;
    result.push(sequence.splice(index, 1)[0]);
}

console.log(`<${result.join(', ')}>`);
