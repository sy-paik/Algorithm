const fs = require('fs');

function solution(n) {
    if (n % 5 === 0) {
        return n / 5;
    } else {
        let fiveCount = Math.floor(n / 5);
        while (fiveCount >= 0) {
            let reminder = n - (5 * fiveCount);
            if (reminder % 2 === 0) {
                let twoCount = reminder / 2;
                return fiveCount + twoCount;
            }
            fiveCount--;
        }
        return -1;
    }
}

const input = fs.readFileSync("/dev/stdin", "utf8").toString().trim();
const number = parseInt(input, 10);

const count = solution(number);

console.log(count);
