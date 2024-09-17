const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const count = Number(input.shift());
let result = '';
// 오름차순 정렬
const sorted = input.sort((a, b) => a - b);
for (let i = 0; i < count; i++) {
    result += sorted[i] + '\n'
}
console.log(result)
