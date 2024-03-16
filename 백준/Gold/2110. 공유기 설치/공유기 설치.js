const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, C] = input.shift().split(' ').map(Number);
const lines = input.map(Number).sort((a, b) => a - b);

function dis(lines, x) {
    let end = lines[0];
    let count = 1;
    for(let i = 0; i < lines.length; i++) {
        if (lines[i] - end >= x) {
            end = lines[i];
            count++;
        }
    }
    return count;
}

let start = 1;
let end = lines[lines.length - 1] - lines[0];
let answer = 0;

while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (dis(lines, mid) >= C) {
        answer = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(answer);
